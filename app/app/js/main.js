(function() {
  'use strict';
  var app = angular.module('SampleApp', ['ngRoute', 'ngAnimate']);
  app.config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./sections/dashboard.html",
          controller: "MainController"
        })
        .when("/form-builder", {
          templateUrl: "./sections/form-builder.html",
          controller: "MainController"
        })
        .when("/apply", {
          templateUrl: "./sections/partial2.html",
          controller: "MainController"
        })
        .when("/your-rates", {
          templateUrl: "./sections/partial4.html",
          controller: "MainController"
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);





//Directive for adding buttons on click that show an alert on click
// app.directive("addbuttons", function($compile){
//   return function(scope, element, attrs){
//     element.bind("click", function(){
//       scope.count++;
//       angular.element(document.getElementById('space-for-buttons')).append($compile("<div><button class='btn btn-default' data-alert='sdfsdf'>Show alert #1 </button></div>")(scope));
//     });
//   };
// });

app.directive('addComponent', [
  '$http',
  '$compile',
  function($http, $compile) {

    return {
      scope: false,
      link: function(scope, element, attrs){
        element.bind("click", function(){
        scope.message = attrs.message;
        var folder_dir = attrs["folderDirectory"];
        var rdm = Math.floor((Math.random()*100)+1);
        var attr_ = "'" + attrs["addComponent"] + rdm+"'";
        var attr = attrs["addComponent"] + rdm;
        var tpl_l = "/components/lender/"+folder_dir+"/"+attrs["addComponent"]+".html";
        var tpl_b = "/components/borrower/"+folder_dir+"/"+attrs["addComponent"]+".html";
        var a_tmp = '<div class="comp-container '+attr+'"><div class="tmp close" data-ng-click="deleteItem('+attr_+')">X</div>';
        var b_tmp = "<div class='tmp-bottom "+attrs["addComponent"]+"'></div></div>";


        $http.get(tpl_b)
          .then(function(response){
            
             var rd = a_tmp + response.data + b_tmp;
             angular.element(document.getElementById('form-borrower-content')).append($compile(rd)(scope));
          });

        $http.get(tpl_l)
          .then(function(response){
             var rd = a_tmp + response.data + b_tmp;
             angular.element(document.getElementById('form-lender-content')).append($compile(rd)(scope));
          });  
        });
      }
    };

  }
]);


//Directive for showing an alert on click
app.directive("alert", function(){
  return function(scope, element, attrs){
    element.bind("click", function(){
      console.log(attrs);
      alert("This is alert #"+attrs.alert);
    });
  };
});



  app.directive("limitTo", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keydown", function(event) {
                if(event.keyCode != 8){
                  if (this.value.length == limit) return false;
                }
            });
        }
    }
  }]);
  app.directive("currency", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var currency = attrs.currency;
            angular.element(elem).on("keyup", function(event) {
                
                elem.val(elem.val().split(',').join(''));
                elem.val((elem.val()).replace(/\B(?=(?:\d{3})+(?!\d))/g, ","));
                
  
            });
        }
    }
  }]);
  app.directive("ssn", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var currency = attrs.currency;
            angular.element(elem).on("keyup", function(event) {
                
                if(elem.val().length < 10){
                  
                elem.val(elem.val().match(/\d{3}(?=\d{2,3})|\d+/g).join("-"));  
                
                }

                
                
  
            });
        }
    }
  }]);
  app.directive('calendar', function () {
            return {
                require: 'ngModel',
                link: function (scope, el, attr, ngModel) {
                    $(el).datepicker({
                        dateFormat: 'yy-mm-dd',
                        onSelect: function (dateText) {
                            scope.$apply(function () {
                                ngModel.$setViewValue(dateText);
                            });
                        }
                    });
                }
            };
        })
  app.filter('removeSpacesThenLowercase', function() {
    return function(text) {
      var str = text.replace(/[_-]/g, " ");
      str = str.replace(/[^\w\s]/gi, '');
      str = str.replace(/ /g,'');
      return str;
    };
  })
  app.filter('compress', []).filter('compress', function() {
    return function(text) {
      var str = text.replace(/ /g,"_");
      return str.toLowerCase();
    };
  });

  app.filter('slugify', []).filter('slugify', function() {
    return function(text) {
      var str = text.replace(/ /g,"-");
      return str.toLowerCase();
    };
  });

  app.factory('Data', function(){
      return { FirstName: 'mike' };
  });

  app.controller('HeaderCtrl', ['$scope', '$rootScope', '$location', '$filter', '$compile', 'Data',
    function($scope, $rootScope, $location, $filter, $compile, Data) {
      $rootScope.component = 'sdsdsd';
      $rootScope.componentURL = 'sdfsdf';
      $scope.data = blend_ui.navigation;
      $scope.toggleMenu = function(event) {
        if(!$(event.target).hasClass('sub-nav')){
          $('.open').removeClass('open');
          $(event.target).addClass('open');  
        }
        else{
          $('li.active').removeClass('active');
          $(event.target).addClass('active');   
        }
        
      }

      $scope.runComponent;


      $scope.deleteItem = function (a){
        $('.'+a).remove();
      };

      

      $scope.runComponent = function(a,b,c) {
        //a is component type. fitler just makes it url friendly
        $rootScope.headerFilters = c;
        // $('.borrower, .lender').empty();
        $rootScope.component = $filter('compress')(a);
        $rootScope.folder = b.replace(/[_-]/g, "");

        //var el = $compile( '<div ng-include="/components/lender/input.html"></div>' )( $scope );
        if($rootScope.formBuilderStatus){
           var htmlprev_content_b = $('.borrower.view-port').html();
           var htmlcontent_b = $('.borrower.view-port');
           var htmlprev_content_l = $('.borrower.view-port').html();
           var htmlcontent_l = $('.lender.view-port');
               htmlcontent_b.load('/components/borrower/'+$rootScope.folder+'/'+$rootScope.component+'.html')
               console.log(htmlprev_content_b)
               setTimeout(function(){htmlcontent_b.prepend(htmlprev_content_b)},100);
               htmlcontent_l.append($compile( '<div ng-include="/components/lender/date.html"></div>' )( $scope ));
               htmlcontent_l.load('/components/lender/'+$rootScope.folder+'/'+$rootScope.component+'.html')
               console.log(htmlprev_content_l)
               setTimeout(function(){htmlcontent_l.prepend(htmlprev_content_l)},100);
          
        }
        else{
          $rootScope.component_BORROWERURL = '/components/borrower/'+$rootScope.folder+'/'+$rootScope.component+'.html';
          $rootScope.component_LENDERURL = '/components/lender/'+$rootScope.folder+'/'+$rootScope.component+'.html';
        }

      }

      $scope.runComponent('text', 'forminputs', '');
    }
  ])
  //Load controller
  app.controller('MainController', [
    '$scope', '$rootScope','$location', 'Data',
    function($scope, $rootScope, $location, Data) {
        $rootScope.$watch('headerFilters', function(){
          $scope.filters = $rootScope.headerFilters;
        }, true);



      $scope.go = function ( path ) {
        $location.path( path );
      };
      $scope.data = blend_ui.navigation;

      $rootScope.formBuilderStatus = false;

      $scope.formBuilder = function(event) {
     
        $(event.target).toggleClass('active'); 
        $rootScope.formBuilderStatus = !$rootScope.formBuilderStatus;
        if($rootScope.formBuilderStatus){
          $('.view-port #main-content').empty();
        }
        else{
          $('.view-port').empty();

        }
        
      };


        $('.view-port').height($(window).height() - 0);
        // var min = 300;
        // var max = 3600;
        // var mainmin = 200;

        // $('#split-bar').mousedown(function (e) {          
        //     e.preventDefault();
        //     $(document).mousemove(function (e) {
        //         console.log(e);
        //         e.preventDefault();
        //         var x = e.pageX - $('.borrower').offset().left;
        //         if (x > min && x < max && e.pageX < ($(window).width() - mainmin)) {  
        //           $('.borrower').css("width", x);
        //           $('#split-bar').css("left", x);
        //           $('.lender').css("margin-left", x);
        //           $('.lender').css("width", e.pageX + $('.borrower').offset().left);
        //         }
        //     })
        // });
        // $(document).mouseup(function (e) {
        //     $(document).unbind('mousemove');
        // });



    }
  ]);
  app.directive('runPresentation', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function() {
            setTimeout(function() {
              $('.message-content:first-child').addClass('active');
              runProcess()
            }, 1000);
          })
        }
      }
    }
  });
}());
