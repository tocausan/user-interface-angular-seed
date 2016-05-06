'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .controller('view1Ctrl', function($scope) {

        /**
         * Local variables & Scopes
         */
        $scope.user = {
            profile: {}
        };

        /**
         * User profile watch
         */
        $scope.$watchCollection('user.profile', function(){
            $scope.user.profile = JSON.parse(localStorage.getItem("myApp.user.profile"))
        });
    });