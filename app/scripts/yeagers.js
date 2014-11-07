'use strict';

angular
    .module('ytfApp', ['ngAnimate', 'ngTouch'])

    .config(function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);

    });