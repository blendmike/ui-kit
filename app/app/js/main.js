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
        .when("/text", {
          templateUrl: "./sections/dashboard.html",
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
  app.filter('removeSpacesThenLowercase', function() {
    return function(text) {
      var str = text.replace(/[_-]/g, " ");
      str = str.replace(/[^\w\s]/gi, '');
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
      $scope.data = blend_ui.navigation;
      $scope.toggleMenu = function(event) {
        $(event.target).parent().toggleClass('open');
      }
      $scope.runComponent = function(a,b,c) {
        
        $rootScope.headerFilters = c;
        $scope.component = $filter('compress')(a)
        $('.borrower, .lender').empty();
        var el = $compile( "<div my-customer>"+$scope.component+"</div>" )( $scope );
        $('.borrower, .lender').append( b );
      }
    }
  ])
  //Load controller
  app.controller('MainController', [
    '$scope', '$rootScope','$location', 'Data',
    function($scope, $rootScope, $location, Data) {
        $rootScope.$watch('headerFilters', function(){
          $scope.filters = $rootScope.headerFilters;
          console.log($scope.filters);
        }, true);



        $('.view-port').height($(window).height() - 0);
        var min = 300;
        var max = 3600;
        var mainmin = 200;

        $('#split-bar').mousedown(function (e) {          
            e.preventDefault();
            $(document).mousemove(function (e) {
                console.log(e);
                e.preventDefault();
                var x = e.pageX - $('.borrower').offset().left;
                if (x > min && x < max && e.pageX < ($(window).width() - mainmin)) {  
                  $('.borrower').css("width", x);
                  $('#split-bar').css("left", x);
                  $('.lender').css("margin-left", x);
                  $('.lender').css("width", e.pageX + $('.borrower').offset().left);
                }
            })
        });
        $(document).mouseup(function (e) {
            $(document).unbind('mousemove');
        });



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
