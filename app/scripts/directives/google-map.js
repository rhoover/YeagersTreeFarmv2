'use strict';

angular
    .module('ytfApp')
    .directive('googleMap', function (loadGoogleMapAPI, googleMapStuff) {

        return {
            restrict: 'A',
            scope: {
                lat: '@lat',
                lon: '@lon'
            },
            link: function (scope, element, attrs) {

                //note this is an abstraction on top of standard GoogleMaps initialization stuff, so we don't repeat ourselves
                var myMapOptions, map, marker;
                var div = element[0];

                scope.initialize = function () {

                    myMapOptions = googleMapStuff.mapOptions(13, attrs.lat, attrs.lon);

                    map = googleMapStuff.mapCreator(div, myMapOptions);

                    marker = googleMapStuff.mapMarker(map, attrs.lat, attrs.lon);

                };

                loadGoogleMapAPI.then(function () {

                    //promise succeeded
                    scope.initialize();
                }, function () {

                    //promise failed
                    /* jshint validthis: true */
                    alert('Google maps is clearly not co-operating');
                    /* jshint validthis: true */
                });

            } //end link
        }; //end return
    });
