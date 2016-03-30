var app = angular.module('todoListApp', []);

app.controller('mainCtrl', ['$scope', function ($scope) {
  $scope.helloWorld = function(){
    console.log('This the helloWorld controller function in the mainCtrl!');
  }

  $scope.todos = [
    {name: 'clean the house'},
    {name: 'water the dog'},
    {name: 'code at least 2 hr per day'},
    {name: 'wash the dishes'},
    {name: 'email nicole'}
  ]
}]);
