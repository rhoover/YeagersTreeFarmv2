'use strict';

angular
    .module('ytfApp')
    .directive('heroTrigger', function ($window) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element) {

                scope = {};
                var url = $window.location.pathname;
                var file = url.substring(url.lastIndexOf('/')+1);
                var name = file.split('.');

                var result = getComputedStyle(element[0], ':after').content;
                result = result.replace(/"/g,''); //Because Firefox keeps quotes from content

                element.addClass(name[0] + '-' + result);

            }
        };
    });
