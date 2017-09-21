(function () {
  'use strict';

  angular
    .module('app')
    .directive('connectionLink', connectionLink);

  connectionLink.$inject = ['$rootScope', '$location', '$routeParams', 'config', '$route','$timeout', 'toastr','Api','Notification'];
  function connectionLink($rootScope, $location, $routeParams, config, $route, $timeout, toastr, Api, Notification) {
    return {
      restrict: 'AE',
      templateUrl: 'app/directives/connectionLink/view.html',
      // require: 'ngModel',
      scope: {
        title: '@',
        subtitle: '@',
        small: '=',
        icon: '@',
        w: '@',
        mw: '@',
        clickable: '=',
        statusDotType: '@',
        statusDotLegend: '@',
      },
      link: ($scope, elem, attr)  => {
      }
    }
  }

})();
