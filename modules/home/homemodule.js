/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



'use strict';
angular.module('home',[])

.controller('HomeViewCtrl', function($scope) {
  return $scope.hello='hello';	
})

.controller('navigationCtrl',function($scope, $location) {
  return $scope.isActive = function(currentUrl) {
    return currentUrl === $location.$$path;
  };
})

.directive('navigation',function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'modules/home/navigation.html'
  };
});


