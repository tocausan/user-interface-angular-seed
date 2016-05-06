'use strict';

angular.module('myApp.main', ['pascalprecht.translate'])

    .controller('mainCtrl', function($scope, $translate) {

        /**
         * Change language translation
         * */
        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };

        /**
         * Watch language translation
         */
        $scope.$watch('language',function(){
            $translate.use($scope.language);
        });

    });