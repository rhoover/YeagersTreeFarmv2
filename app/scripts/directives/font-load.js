'use strict';

angular
    .module('ytfApp')
    .directive('fontLoad', function (loadGoogleFontAPI) {

        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element, attrs) {

                loadGoogleFontAPI.then(function () {

                    //promise succeeded
                    scope.initialize();
                }, function () {

                    //promise failed
                    /* jshint validthis: true */
                    console.log('Google fonts is clearly not co-operating');
                    /* jshint validthis: true */
                });

            } //end link
        }; //end return
    });
