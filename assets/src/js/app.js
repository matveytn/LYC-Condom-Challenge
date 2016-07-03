//Define an application and pull ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);


//Routing==================================
animateApp.config(function ($routeProvider) {
    $routeProvider

    //home page
        .when('/', {
        templateUrl: "page-home.html",
        controller: "homeController"
    })

    //construction page
    .when('/construction', {
        templateUrl: "page-construction.html",
        controller: "constructionController"
    })

    //question 1 page
    .when('/q1', {
        templateUrl: "page-q1.html",
        controller: "q1Controller"
    })

    //question 2 page
    .when('/q2', {
        templateUrl: "page-q2.html",
        controller: "q2Controller"
    })

    //final page
    .when('/finish', {
        templateUrl: "page-finish.html",
        controller: "finishController"
    });
});


//Controllers==============================
//home page controller
animateApp.controller('homeController', function ($scope) {
    $scope.pageClass = "page-home";
    //    $(function () {
    //        var x = 0;
    //        var y = 0;
    //        setInterval(function () {
    //            x += 1.16;
    //            y -= 1;
    //            $('body').css('background-position', x + 'px ' + y + 'px');
    //        }, 40);
    //    });
});

//construction page controller
animateApp.controller('constructionController', function ($scope) {
    $scope.pageClass = "page-construction";
});

//question 1 controller
animateApp.controller('q1Controller', function ($scope) {
    $scope.pageClass = "page-q1";
});

//question 2 controller
animateApp.controller('q2Controller', function ($scope) {
    $scope.pageClass = "page-q2";
});

//final page controller
animateApp.controller('finishController', function ($scope) {
    $scope.pageClass = "page-finish";
});
