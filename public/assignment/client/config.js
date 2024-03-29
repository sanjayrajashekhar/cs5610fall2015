"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider.when("/home", {
                templateUrl: "views/home/home.view.html"
            })
            .when("/register", {
                templateUrl: "views/register/register.view.html",
                controller: "RegisterController"
            })
            .when("/login", {
                templateUrl: "views/login/login.view.html",
                controller: "LoginController"
            })
            .when("/profile", {
                templateUrl: "views/profile/profile.view.html",
                controller: "ProfileController"
            })
            .when("/form", {
                templateUrl: "views/form/form.view.html",
                controller: "FormController"
            })
            .when("/user/:userId/form/:formId/fields", {
                templateUrl: "views/field/field.view.html",
                controller: "FieldController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();