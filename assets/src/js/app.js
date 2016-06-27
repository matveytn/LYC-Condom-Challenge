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
    $.getJSON("assets/src/js/condoms.json", function (data) {
            //Q1 - Do you or your partner experience itchy or irritated skin from condoms?
            //Q2 - Do you get enough sensation from the condoms you use?

            if (sessionStorage.penisSize > 60) {
                if (sessionStorage.q1 == 'yes' && sessionStorage.q2 == "yes")
                    $('#results').html(data.large.non_latex.regular);
                else if (sessionStorage.q1 == 'yes' && sessionStorage.q2 == "no")
                    $('#results').html(data.large.non_latex.thin);
                else if (sessionStorage.q1 == 'no' && sessionStorage.q2 == "yes")
                    $('#results').html(data.large.latex.regular);
                else if (sessionStorage.q1 == 'no' && sessionStorage.q2 == "no")
                    $('#results').html(data.large.latex.thin);
            } else if (sessionStorage.penisSize < 60 && sessionStorage.penisSize > 50) {
                if (sessionStorage.q1 == 'yes' && sessionStorage.q2 == "yes")
                    $('#results').html(data.medium.non_latex.regular);
                else if (sessionStorage.q1 == 'yes' && sessionStorage.q2 == "no")
                    $('#results').html(data.medium.non_latex.thin);
                else if (sessionStorage.q1 == 'no' && sessionStorage.q2 == "yes")
                    $('#results').html(data.medium.latex.regular);
                else if (sessionStorage.q1 == 'no' && sessionStorage.q2 == "no")
                    $('#results').html(data.medium.latex.thin);
            } else if (sessionStorage.penisSize < 50) {
                if (sessionStorage.q1 == 'yes' && sessionStorage.q2 == "yes")
                    $('#results').html(data.snug.non_latex.regular);
                else if (sessionStorage.q1 == 'yes' && sessionStorage.q2 == "no")
                    $('#results').html(data.snug.non_latex.thin);
                else if (sessionStorage.q1 == 'no' && sessionStorage.q2 == "yes")
                    $('#results').html(data.snug.latex.regular);
                else if (sessionStorage.q1 == 'no' && sessionStorage.q2 == "no")
                    $('#results').html(data.snug.latex.thin);
            }
        });
});
