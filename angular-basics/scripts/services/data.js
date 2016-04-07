app.service('dataService', function ($http) {
  this.helloWorld = function(){
    console.log("This is the Hello Console Service!")
  };

  this.getTodos = function(callback){
    $http({
      method: 'GET',
      url: 'mock/todos.json'
    }).then(callback)
  };

  this.deleteTodo = function(todo){
    console.log("The " + todo.name + " todo has been deleted!");
  };

  this.saveTodo = function(todo){
    console.log("The " + todo.name + " todo has been saved!");
  };
});
