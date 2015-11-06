!function(){"use strict";var e=angular.module("SampleApp",["ngRoute","ngAnimate"]);e.config(["$locationProvider","$routeProvider",function(e,n){e.hashPrefix("!"),n.when("/",{templateUrl:"./sections/dashboard.html",controller:"MainController"}).when("/text",{templateUrl:"./sections/dashboard.html",controller:"MainController"}).when("/apply",{templateUrl:"./sections/partial2.html",controller:"MainController"}).when("/your-rates",{templateUrl:"./sections/partial4.html",controller:"MainController"}).otherwise({redirectTo:"/"})}]),e.directive("limitTo",[function(){return{restrict:"A",link:function(e,n,t){var o=parseInt(t.limitTo);angular.element(n).on("keydown",function(e){return 8!=e.keyCode&&this.value.length==o?!1:void 0})}}}]),e.directive("currency",[function(){return{restrict:"A",link:function(e,n,t){t.currency;angular.element(n).on("keyup",function(e){n.val(n.val().split(",").join("")),n.val(n.val().replace(/\B(?=(?:\d{3})+(?!\d))/g,","))})}}}]),e.directive("ssn",[function(){return{restrict:"A",link:function(e,n,t){t.currency;angular.element(n).on("keyup",function(e){n.val().length<10&&n.val(n.val().match(/\d{3}(?=\d{2,3})|\d+/g).join("-"))})}}}]),e.directive("calendar",function(){return{require:"ngModel",link:function(e,n,t,o){$(n).datepicker({dateFormat:"yy-mm-dd",onSelect:function(n){e.$apply(function(){o.$setViewValue(n)})}})}}}),e.filter("removeSpacesThenLowercase",function(){return function(e){var n=e.replace(/[_-]/g," ");return n=n.replace(/[^\w\s]/gi,"")}}),e.filter("compress",[]).filter("compress",function(){return function(e){var n=e.replace(/ /g,"_");return n.toLowerCase()}}),e.filter("slugify",[]).filter("slugify",function(){return function(e){var n=e.replace(/ /g,"-");return n.toLowerCase()}}),e.factory("Data",function(){return{FirstName:"mike"}}),e.controller("HeaderCtrl",["$scope","$rootScope","$location","$filter","$compile","Data",function(e,n,t,o,r,i){n.component="sdsdsd",n.componentURL="sdfsdf",e.data=blend_ui.navigation,e.toggleMenu=function(e){$(e.target).parent().toggleClass("open")},e.runComponent,e.runComponent=function(e,t,r){n.headerFilters=r,n.component=o("compress")(e),n.folder=t.replace(/[_-]/g,""),n.component_BORROWERURL="/components/borrower/"+n.folder+"/"+n.component+".html",n.component_LENDERURL="/components/lender/"+n.folder+"/"+n.component+".html"},e.runComponent("text","forminputs","")}]),e.controller("MainController",["$scope","$rootScope","$location","Data",function(e,n,t,o){n.$watch("headerFilters",function(){e.filters=n.headerFilters},!0),$(".view-port").height($(window).height()-0);var r=300,i=3600,l=200;$("#split-bar").mousedown(function(e){e.preventDefault(),$(document).mousemove(function(e){console.log(e),e.preventDefault();var n=e.pageX-$(".borrower").offset().left;n>r&&i>n&&e.pageX<$(window).width()-l&&($(".borrower").css("width",n),$("#split-bar").css("left",n),$(".lender").css("margin-left",n),$(".lender").css("width",e.pageX+$(".borrower").offset().left))})}),$(document).mouseup(function(e){$(document).unbind("mousemove")})}]),e.directive("runPresentation",function(e){return{restrict:"A",link:function(n,t,o){n.$last===!0&&e(function(){setTimeout(function(){$(".message-content:first-child").addClass("active"),runProcess()},1e3)})}}})}();