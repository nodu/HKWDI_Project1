'use strict';

angular.module('tickeyApp')
 .controller('GameBoardCtrl', function ($scope, $rootScope) {
    $rootScope.is_how_to_page = false;

    $scope.name = "Tickety";

    $scope.click = function(){
    	alert("I've been clicked!");
    };
  });
