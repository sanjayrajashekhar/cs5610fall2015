"use strict";

(function () {
    angular
        .module("RentEasy")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "home/home.view.html"
        })
        .when("/register", {
            templateUrl: "register/register.view.html",
            controller: "RegisterController"
        })
        .when("/login", {
            templateUrl: "login/login.view.html",
            controller: "LoginController"
        })
        .when("/profile", {
            templateUrl: "profile/profile.view.html",
            controller: "ProfileController"
        })
        .when("/search", {
            templateUrl: "search/search.view.html",
            controller: "SearchController"
        })
        .when("/addListing", {
            templateUrl: "addListing/addlisting.view.html",
            controller: "AddListingController"
        })
        .when("/myListing", {
            templateUrl: "myListings/myListings.view.html",
            controller: "SearchController"
        })
        .otherwise({
            redirectTo: "/home"
        });
    }
})();