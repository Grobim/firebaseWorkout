(function() {
  'use strict';

  angular.module('slv.app').config(['$translateProvider', appConfig]).run(['$rootScope', '$translate', appRun]);

  function appConfig($translateProvider) {

    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '/config/lang/{lang}/{part}.json'
    });
    $translateProvider.useMessageFormatInterpolation();
    $translateProvider.registerAvailableLanguageKeys(['en', 'fr'], {
      'en_US': 'en',
      'en_UK': 'en',
      'en_GB': 'en',
      'fr_FR': 'fr'
    });
    $translateProvider.determinePreferredLanguage();
    $translateProvider.fallbackLanguage('en');
    $translateProvider.useMissingTranslationHandlerLog();

  }

  function appRun($rootScope, $translate) {

    $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
      $translate.refresh();
    });

  }
  
})();
