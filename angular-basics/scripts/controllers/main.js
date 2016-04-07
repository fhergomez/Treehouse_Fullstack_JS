app.controller('mainCtrl', function ($scope,dataService) {
  $scope.addTodo = function(){
    var todo = {name: "This is a new reminder"};
    $scope.todos.unshift(todo);
  }

  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.saveTodo = function(todo){
    dataService.saveTodo(todo);
  }

  $scope.deleteTodo = function(todo, $index){
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  }

  $scope.learningNgChange = function(){
    console.log('An input changed!');
  }

})