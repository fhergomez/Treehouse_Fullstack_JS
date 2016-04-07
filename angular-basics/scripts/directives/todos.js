app.directive('todos', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: true
  };
});