todo

 
$scope.leaderData = {names:
    {
        SeededValue: 1
    }};


 // $scope.userName;
    $scope.getName = function(){
        $scope.userName = prompt("What's your name?");
        console.log($scope.userName);
    };

    $scope.addWinToLeaderBoard = function(){
        if ($scope.userName){
            if ($scope.leaderData.names.hasOwnProperty($scope.userName)){
                    console.log("yep, the name is in there...", $scope.leaderData.names[$scope.userName] )
                    $scope.leaderData.names[$scope.userName]++;
                } else {
                    console.log("user not found, adding to DB")
                    $scope.leaderData.names[$scope.userName] = 1;
                }
            }
    }

<button data-ng-click="getName()">UserName!</button>
<button data-ng-click="addWinToLeaderBoard()">AddWin!</button>

<ul>
  <li>LeaderBoard!</li>
  <li ng-repeat="(name, score) in leaderData.names ">{{name}}: {{score}}</li>
</ul>    





| orderBy:'{score}'