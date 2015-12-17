"use strict";

(function () {
    angular
        .module("RentEasy")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        $scope.login = login;
        $scope.loginerror = false;

        function login(user) {
            var userName = $scope.user.username;
            var password = $scope.user.password;

            if (!userName || !password) {
                $scope.loginErrorMessage = "Please enter your username and password";
                $scope.loginerror = true;
            }

            UserService.FindByAuth(userName, password)
                .then(function (user) {
                    if (user) {
                        $scope.user = user;
                        $rootScope.currentUser = user;
                        $rootScope.$broadcast('authenticate', user);
                        $location.url("/home");
                    } else {
                        $scope.loginerror = true;
                        $scope.loginErrorMessage = "Oh Snap! Your credentials did not match our records. Please try again!"
                    }
                });
        }

        //function login(user) {
        //    UserService.Login(user).then(function (user) {
        //        if (user) {
        //            $scope.user = user;
        //            $rootScope.currentUser = user;
        //            $rootScope.$broadcast('authenticate', user);
        //            $location.path("/home");
        //        } else {
        //            $scope.loginerror = true;
        //            $scope.loginErrorMessage = "Oh Snap! Your credentials did not match our records. Please try again!"
        //        }
        //    });
        //}
    }
})();
