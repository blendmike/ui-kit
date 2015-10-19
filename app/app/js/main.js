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
  app.controller('HeaderCtrl', ['$scope', '$location', '$filter', '$compile',
    function($scope, $location, $filter, $compile) {
      $scope.data = blend_ui.navigation;
      $scope.toggleMenu = function(event) {
        $(event.target).parent().toggleClass('open');
      }
      $scope.runComponent = function(a,b) {

        $scope.component = $filter('compress')(a)
        $('#main-container').empty();
        var el = $compile( "<div my-customer>"+$scope.component+"</div>" )( $scope );
        $('#main-container').append( b );
    
    
      }
    }
  ])
  //Load controller
  app.controller('MainController', [
    '$scope', '$location',
    function($scope, $location) {
      console.log($scope.data);
      // var navObj = Object.keys(blend_ui.navigation).length;
      // for (var i = 0; i < nav.length; i++) {
      //   nav[i]
      // };
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
