'use strict';

angular
    .module('ytfApp')
    .service('loadGoogleFontAPI', function ($window, $q) {

        var deferred = $q.defer();

        function loadScript() {
            var fontLinks = ['http://fonts.googleapis.com/css?family=Julius+Sans+One', 'http://fonts.googleapis.com/css?family=Open+Sans:300,700'];
            for (var i = 0; i < fontLinks.length; i++) {
                var linkTag = document.createElement('link');
                linkTag.type = 'text/css';
                linkTag.rel = 'stylesheet';
                linkTag.href = fontLinks[i];

                angular.element(document.body).append(linkTag);
            };
        };

        $window = function () {
            deferred.resolve();
        };

        loadScript();

        return deferred.promise;
    });
