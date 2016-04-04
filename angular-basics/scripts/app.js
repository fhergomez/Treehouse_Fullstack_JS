var app = angular.module('todoListApp', []);

app.controller('mainCtrl', function ($scope,dataService) {
  $scope.helloConsole = dataService.helloConsole;

  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.learningNgChange = function(){
    console.log('An input changed!');
  }

})

.service('dataService', function ($http) {
  this.helloConsole = function(){
    console.log("This is the Hello Console Service!")
  };

  this.getTodos = function(callback){
    $http({
      method: 'GET',
      url: 'mock/todos.json'
    }).then(callback)
  };
});
