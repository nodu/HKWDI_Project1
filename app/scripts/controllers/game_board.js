'use strict';

angular.module('tickeyApp')
 .controller('GameBoardCtrl', function ($scope, $rootScope, $timeout, localStorageService) {
    $rootScope.currentPage = "game_board";
    $scope.tempName = "abc";

    $scope.numberOfWins = localStorageService.get("keyName");
    if ($scope.numberOfWins == undefined) {
      $scope.numberOfWins = 0;
    }

    
    $scope.addNumberOfWin = function() {
    	$scope.numberOfWins = parseInt($scope.numberOfWins) + 1;
		  localStorageService.add("keyName", $scope.numberOfWins);
    }

    // $scope.numberOfLoses = localStorageService.get("numberOfLoses");


    // $rootScope.getCurrentPage = function(pageName) {
    // 	return pageName == "game_board"
    // }

    $scope.name = "Tickety";
    $scope.currentSymbol = "x";
    $scope.cells = [];

    $scope.clickInAngular = function(eventObj) {
    	

    	// console.log("EventObject " + eventObj.srcElement.attributes);
      console.log("Awesome ! " + eventObj.srcElement.attributes.data.value);
      console.log("Awesome ! " + eventObj.srcElement.attributes.data_quantity.value);
      console.log("Awesome ! " + eventObj.srcElement.attributes.data_price.value);

		  if ($scope.notOccupied(location)) {
		    // $scope.makeNextMove(location, $scope.currentSymbol);
      //   $scope.swapSymbol();
		    // if (isWinning(currentSymbol)) {
		    //   alert( currentSymbol + " wins!");
		    //   restartGame();
		    // } else {
		    //   swapSymbol();

		    //   if (turnNum < 9) {
		    //     selectRandomSquare(currentSymbol);
		    //     if (isWinning(currentSymbol)) {
		    //       alert( "you lose !");
		    //       restartGame();
		    //     } else {
		    //       swapSymbol();
		    //     }
		    //   } else {
		    //     swapSymbol();

		    //   }
		      
		    // }
		  } else {
        console.log("isOccupied do nothing");		  	
		    // do nothing
		  }
		  // if (turnNum == 9) {
		  //   alert("No body wins! CAT!");
		  //   restartGame();
		  // }    	
    }

    $scope.notOccupied = function(location) {
    	// console.log($scope.cell[0]);
    	// $scope.cell[0] = "B";

		  var contentAtLocation = $scope.cells[location - 1];
		  var result = (contentAtLocation == "");
		  return result;
		}


		$scope.makeNextMove = function(location, symbol) {
		  $scope.cells[location - 1] = symbol;
		  // document.getElementById('cell' + location).classList.add(symbol);
		  // document.getElementById('cell' + location).innerHTML = symbol;
		  // turn();
		}		
    
		$scope.swapSymbol = function() {
		  if ($scope.currentSymbol == "x") {
		    $scope.currentSymbol = "o";
		  } else {
		    $scope.currentSymbol = "x";
		  }
		}  

		$scope.isWinning = function() {
			$scope.numberOfWins += 1;
			localStorageService.add("numberOfWins", $scope.numberOfWins);
		}

		$scope.isLosing = function() {
			$scope.numberOfLoses += 1;
			localStorageService.add("numberOfLoses", $scope.numberOfLoses);
		}

    // $scope.minutes = "00";
    // $scope.seconds = "00";
    // $scope.currentNumberOfSeconds = 0;
    // $scope.intervalCallback;

    // $scope.reset = function() {
    // 	$scope.stopTimer();
    // 	$scope.seconds = "00";
    // 	$scope.minutes = "00";
    // 	$scope.currentNumberOfSeconds = 0;
    // }
    // $scope.increment = function() {
    //   $scope.currentNumberOfSeconds++;

    //   $scope.minutes = $scope.formatZeroPadding(Math.floor($scope.currentNumberOfSeconds / 60));
    //   $scope.seconds = $scope.formatZeroPadding($scope.currentNumberOfSeconds % 60);

    //   $scope.intervalCallback = $timeout($scope.increment, 1000);
    // }

    // $scope.startTimer = function() {
    //   $scope.intervalCallback = $timeout($scope.increment, 1000);
    // }

    // $scope.stopTimer = function() {
    // 	$timeout.cancel($scope.intervalCallback);
    // }

    // $scope.formatZeroPadding = function(integer) {
    //   if (integer < 10) {
    //   	return "0" + integer;
    //   } else {
    //   	return integer;
    //   }
    // }
  });






