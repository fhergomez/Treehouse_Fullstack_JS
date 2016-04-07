var app = angular.module('todoListApp')
.directive('todos', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: true
  };
});