'use strict';

angular.module('myApp.route', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'components/partials/view1.html',
            controller: 'view1Ctrl'
        });
        $routeProvider.when('/view2', {
            templateUrl: 'components/partials/view2.html',
            controller: 'view2Ctrl'
        });
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
