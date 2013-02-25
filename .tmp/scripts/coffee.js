(function() {

  angular.module('Sandbox', ['Sandbox.Controllers', 'Sandbox.Directives']);

  angular.module('Sandbox.Controllers', []);

  angular.module('Sandbox.Directives', []);

  angular.module('Sandbox.Controllers').controller('Application', [
    '$scope', function($scope) {
      $scope.pictures = [
        {
          src: 'images/1.jpg',
          title: 'Hello !',
          description: 'Hello World!',
          active: "active"
        }, {
          src: 'images/2.jpg',
          title: 'Another slide',
          description: 'it works !'
        }, {
          src: 'images/3.gif',
          title: 'Another one',
          description: 'yes yes yes'
        }
      ];
      return $scope.message = "Hello World !";
    }
  ]);

  angular.module('Sandbox.Controllers').controller('Message', [
    '$scope', function($scope) {
      return $scope.message = "Hello !";
    }
  ]);

  angular.module('Sandbox.Directives').directive('carousel', [
    function() {
      return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'templates/carousel.html',
        scope: {
          slides: '=',
          id: '@'
        },
        link: function(scope, elm, attr, ctrl) {}
      };
    }
  ]);

}).call(this);
