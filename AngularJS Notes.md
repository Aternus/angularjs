# AngularJS

First, you need to specify which section of the page is controlled by AngularJS.

This is done by using the `ng-app` directive (command) on an HTML node that is
the container for the AngularJS application.

Inside the container, you can use AngularJS syntax.

## Modules

Second, you need to define a module that is going to create a scope.

```javascript
// define a module with no requires
const myApp = angular.module('myApp', []);
```

```html
<!-- link the module to an HTML node -->
<html ng-app="myApp">
  <body></body>
</html>
```

## Controllers

The module can have one or more controllers.

```javascript
// define a controller
myApp.controller(
  // controller name
  'myController',
  // controller function receives the $scope by default
  function MyController($scope) {},
);
```

```html
<html ng-app="myApp">
  <!-- link the controller to an HTML node -->
  <body ng-controller="MyController"></body>
</html>
```

## Binding

The `ng-model` directive creates a variable in the scope with two-way data
binding.

The `{{ }}` expressions can contain any sort of JavaScript, they print the
expression's value in HTML.
