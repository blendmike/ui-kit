!function(){"use strict";var e=angular.module("SampleApp",["ngRoute","ngAnimate"]);e.config(["$locationProvider","$routeProvider",function(e,t){e.hashPrefix("!"),t.when("/",{templateUrl:"./sections/dashboard.html",controller:"MainController"}).when("/text",{templateUrl:"./sections/dashboard.html",controller:"MainController"}).when("/apply",{templateUrl:"./sections/partial2.html",controller:"MainController"}).when("/your-rates",{templateUrl:"./sections/partial4.html",controller:"MainController"}).otherwise({redirectTo:"/"})}]),e.filter("removeSpacesThenLowercase",function(){return function(e){var t=e.replace(/[_-]/g," ");return t=t.replace(/[^\w\s]/gi,"")}}),e.filter("compress",[]).filter("compress",function(){return function(e){var t=e.replace(/ /g,"_");return t.toLowerCase()}}),e.filter("slugify",[]).filter("slugify",function(){return function(e){var t=e.replace(/ /g,"-");return t.toLowerCase()}}),e.controller("HeaderCtrl",["$scope","$location","$filter","$compile",function(e,t,n,r){e.data=blend_ui.navigation,e.toggleMenu=function(e){$(e.target).parent().toggleClass("open")},e.runComponent=function(t,o){e.component=n("compress")(t),$("#main-container").empty();r("<div my-customer>"+e.component+"</div>")(e);$("#main-container").append(o)}}]),e.controller("MainController",["$scope","$location",function(e,t){console.log(e.data)}]),e.directive("runPresentation",function(e){return{restrict:"A",link:function(t,n,r){t.$last===!0&&e(function(){setTimeout(function(){$(".message-content:first-child").addClass("active"),runProcess()},1e3)})}}})}();