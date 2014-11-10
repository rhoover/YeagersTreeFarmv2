'use strict';

/**
 * Repeatable map options and initialize/config
 */

angular
    .module('ytfApp')
    .service('googleMapStuff', function googleMapStuff() {
        return {
            mapOptions: function (zoom, lat, lon) {
                var mapOptionsStuff; //google insists be defined

                return mapOptionsStuff = {
                    zoom: zoom,
                    center: new google.maps.LatLng(lat, lon),
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                    },
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
            },
            mapCreator: function (div, myMapOptions) {
                return new google.maps.Map(div, myMapOptions);
            },
            mapMarker: function (map, lat, lon) {
                return new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lon),
                    map: map
                });
            },
            infoWindowCreator: function (infoContent) {
                return new google.maps.InfoWindow({
                    content: infoContent
                });
            },
            infoWindowClick: function (map, marker, infowindow) {
                return google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });
            }
        };
    });
