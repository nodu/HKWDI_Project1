// var currentSymbol = "x";
// var turnNum = 0;

// function turn() {
//       turnNum += 1;
// };

// function handleClick(location) {
//   angular.element(document.getElementById("gameboard")).scope().tickle();

//   if (notOccupied(location)) {
//     makeNextMove(location, currentSymbol);

//     if (isWinning(currentSymbol)) {
//       alert( currentSymbol + " wins!");
//       restartGame();
//     } else {
//       swapSymbol();

//       if (turnNum < 9) {
//         selectRandomSquare(currentSymbol);
//         if (isWinning(currentSymbol)) {
//           alert( "you lose !");
//           restartGame();
//         } else {
//           swapSymbol();
//         }
//       } else {
//         swapSymbol();

//       }
      
//     }
//   } else {
//     // do nothing
//   }
//   if (turnNum == 9) {
//     alert("No body wins! CAT!");
//     restartGame();
//   }
// }

// function makeNextMove(location, symbol) {
//   document.getElementById('cell' + location).classList.add(symbol);
//   document.getElementById('cell' + location).innerHTML = symbol;
//   turn();

// }

// function swapSymbol() {
//   if (currentSymbol == "x") {
//     currentSymbol = "o";
//   } else {
//     currentSymbol = "x";
//   }
// }

// //
// // <div class="cell">X</div>

// function notOccupied(location) {
//   var contentAtLocation = document.getElementById("cell" + location).innerHTML;
//   var result = (contentAtLocation == "");
//   return result;
// }

// function isWinning(currentPlayer) {
//   // check first row horizontal winning condition
//   // isSameSymbolsIn(1, 2, 3, currentPlayer);

//   // wrong !!
//   for (var i=1; i <= 9; i += 3) {
//     if (isSameSymbolsIn(i, i + 1, i +2, currentPlayer)) {
//       return true;
//     }
//   }

//   // check vertical
//   for (var i=1; i <= 3; i++) {
//     if (isSameSymbolsIn(i, i + 3, i +6, currentPlayer)) {
//       return true;
//     }
//   }

//   // check diagonal
//   return $scope.isDiagonalSameSymbols($scope.currentPlayer);
// }

// function isSameSymbolsIn(first_cell_id, second_cell_id, third_cell_id, currentPlayer) {
//   var first_comparison = document.getElementById("cell" + first_cell_id).innerHTML == currentPlayer;
//   var second_comparison = document.getElementById("cell" + second_cell_id).innerHTML == currentPlayer;
//   var third_comparison = document.getElementById("cell" + third_cell_id).innerHTML == currentPlayer;

//   var result = first_comparison && second_comparison && third_comparison;

//   return result;
// }

// function isDiagonalSameSymbols(currentPlayer) {
//   var firstDiagonalCheck = (document.getElementById("cell1").innerHTML == currentPlayer &&
//     document.getElementById("cell5").innerHTML == currentPlayer &&
//     document.getElementById("cell9").innerHTML == currentPlayer);
//   var secondDiagonalCheck = (document.getElementById("cell3").innerHTML == currentPlayer &&
//     document.getElementById("cell5").innerHTML == currentPlayer &&
//     document.getElementById("cell7").innerHTML == currentPlayer);
//   return firstDiagonalCheck || secondDiagonalCheck;
// }



// // Lab 1
// function clearBoard() {
//   for ( var i=1 ; i <= 9; i++ ) {
//     var currentCell = document.getElementById("cell" + i);

//     // <div class="cell x">x</div>
//     // <div class="cell o">o</div>
//     // <div class="cell">x</div>
//     currentCell.innerHTML = "";
//     currentCell.classList.remove("x");
//     currentCell.classList.remove("o");
//   }
//   // clear class list
// }

// // Lab 2
// function restartGame() {
//   // setTimeout(function() { clearBoard(); }, 1000);
//   currentSymbol = "x";
//   turnNum = 0;
//   clearBoard();
// }

// // Lab 3
// function selectRandomSquare(currentPlayer) {
//   var randomNumber;

//   do {
//     randomNumber = Math.floor((Math.random()*9)+1);
//   } while( !notOccupied(randomNumber) );

//   makeNextMove(randomNumber, currentPlayer);
// }

// Lab 4
// add Go Back button at gameboard screen
angular.module('LocalStorageModule').value('prefix', "GameBoardLeaderboard");
angular.module('tickeyApp', ['LocalStorageModule', 'firebase'])
  .config(function ($routeProvider){
    $routeProvider
      .when('/game_board', {
        templateUrl: 'views/game_board.html',
        controller: 'GameBoardCtrl'
      })
      .when('/how_to', {
        templateUrl: 'views/how_to.html',
        controller: 'HowToCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      }) 
      .otherwise({
        redirectTo: '/'
      })
  })
  .filter('toDictionaryArray', function () {
    return function (obj) {
        if (!(obj instanceof Object)) return obj;

        var arr = [];
        for (var key in obj) {
            arr.push({ key: key, value: obj[key] });
        }
        return arr;
    }
});

// ###########################
// var url = new Firebase("https://my-firebase.firebaseio.com/auction/" + $scope.auctionId);
// angularFire(url, $scope, "auction", {}).then(function() {
//   ref.transaction(function(auction) {
//     auction.price = ...
//   });
// });


// ########################### Services
// angular.module('blog.services', [])
// .factory('content', ['$http', function($http){
//   // return{
//   //  get: function(callback){
//   //    $http.get("../content/content.json").then(function(dataResponse) {
//  //             callback(dataResponse);
//  //      });
//   //  }
//   // };
// }])
// .factory('Data', function () {
//   return {query:""}
// })


// ###########################
// angular.module('blog.controllers', []).
//   controller('contentController', ["content", "$scope", "$location", "Data", "angularFire", function(content, $scope, $location, Data, angularFire) {
//     // content.get(function(jsonData){
//     //  $scope.content = jsonData.data;
//     // });
//     window.contentControllerScope = $scope;
    
//     $scope.data = Data;

//     // $scope.content = [];
//     // don't need to create the content arr or the ngModel vars
//     var url = new Firebase("https://mblog.firebaseio.com/");
//     angularFire(url, $scope, "content");

//     // apparently i'm using implicit bc of angularFire
//     $scope.addPost = function(e) {
//       if (e.keyCode != 13) return;
      
//       $scope.content.posts.push({title: $scope.data.newTitle, meat: $scope.data.newMeat, query: $scope.data.query})
//       $scope.data.newTitle = "";
//       $scope.data.newMeat = "";

//     };
//     $scope.del = function(num){
//       num --
//       delete $scope.content.posts[num]
      
//     }

//   }])



// ###########################
// <script src="https://cdn.firebase.com/v0/firebase.js"></script>
// <script src="https://cdn.firebase.com/libs/angularfire/0.3.0/angularfire.js"></script>

// angular.module('myapp', ['firebase'])

// Implicit:
// myapp.controller('MyCtrl', ['$scope', 'angularFire',
//   function MyCtrl($scope, angularFire) {
//     ...
//   }
// ]);


// var ref = new Firebase('https://<my-firebase>.firebaseio.com/items');
// angularFire(ref, $scope, 'items');



// $scope.winners ={};
// $scope.name = function() {
//   prompt("what's your name stranger")
// };
// $scope.wins = 0;
// $scope.wins[prompt("name")]= 1;
// $scope.wins[$scope.name]= $scope.wins;


// $scope.won = function() {
//   var newName = prompt "What's your name?"
//   if name is key in firebase {for winners.name.length (if winners.name[i] == newName)}
//       record found, adding 1;
//   new record created
//   $scope.wins++;
// }



// RouteParams:
// 1. add :routeParamVarName to the when of route providor in app.js
// 2. inject into controller
// 3. bind $scope.scopeName =$routeParams.routeParamVarName
// 4. Use eit.



















