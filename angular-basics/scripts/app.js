var app = angular.module('todoListApp', []);

app.controller('mainCtrl', ['$scope', function ($scope) {
  $scope.learningNgChange = function(){
    console.log('An input changed!');
  }

  $scope.todos = [
    {name: 'clean the house'},
    {name: 'water the dog'},
    {name: 'code at least 2 hr per day'},
    {name: 'wash the dishes'},
    {name: 'email nicole'}
  ]
}]);
