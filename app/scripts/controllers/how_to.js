'use strict';

angular.module('tickeyApp')
 .controller('HowToCtrl', function ($scope, $rootScope){
  	$scope.how = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  	$rootScope.is_how_to_page = true;
  	$rootScope.currentPage = "how_to";
  });
