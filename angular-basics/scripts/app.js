var app = angular.module('todoListApp', []);

app.controller('mainCtrl', ['$scope', function ($scope) {
  $scope.helloWorld = function(){
    console.log('This the helloWorld controller function in the mainCtrl!');
  }
}]);