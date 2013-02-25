angular.module 'Sandbox', ['Sandbox.Controllers', 'Sandbox.Directives']
angular.module 'Sandbox.Controllers', []
angular.module 'Sandbox.Directives', []

angular.module( 'Sandbox.Controllers' )
  .controller 'Application',
[
  '$scope',
  ($scope) ->
    $scope.pictures = [
      {src: 'images/1.jpg', title: 'Hello !',       description: 'Hello World!', active: "active" }
      {src: 'images/2.jpg', title: 'Another slide', description: 'it works !'}
      {src: 'images/3.gif', title: 'Another one',   description: 'yes yes yes'}
    ]
    $scope.message = "Hello World !"
]

angular.module( 'Sandbox.Controllers' )
  .controller 'Message',
[
  '$scope',
  ($scope) ->
    $scope.message = "Hello !"
]

angular.module( 'Sandbox.Directives' )
  .directive 'carousel',
[
  () ->
    {
      restrict:     'E'
      replace:      true
      transclude:   true
      templateUrl:  'templates/carousel.html'
      scope:        {slides: '=', id: '@'}
      link:         (scope, elm, attr, ctrl)->

    }
]


