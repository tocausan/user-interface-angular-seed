'use strict';

angular.module('myApp.translation', [
    'myApp.translation-en-us',
    'myApp.translation-fr-fr',
    'myApp.translation-zh-chs',
])

    .value('version', '0.1')

    .config(function ($translateProvider) {
        $translateProvider.preferredLanguage('fr-fr');
        $translateProvider.useSanitizeValueStrategy('escaped');
    });
