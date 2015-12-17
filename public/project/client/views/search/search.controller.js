"use strict";

(function () {
    angular
        .module("RentEasy")
        .controller("SearchController", SearchController);

    function SearchController($scope, $location, $rootScope, ListingService) {
        $scope.$location = $location;
        $scope.user = $rootScope.currentUser;
        $scope.search = search;
        $scope.checkSearchTerm = checkSearchTerm;
        $scope.showDetails = showDetails;
        $scope.listing = null;
        $scope.searchTerm = null;
        $scope.listings = null;

        $rootScope.$on("authenticate", function (event, user) {
            $scope.user = $rootScope.currentUser = user;
        });

        function search() {
            if ($scope.searchTerm) {
                ListingService.SearchByLocality($scope.searchTerm)
                    .then(function (listings) {
                        if (listings) {
                            $scope.listings = listings;
                        } else {
                            console.log("suggest a different method of search")
                        }
                    });
            }
        }

        function checkSearchTerm() {
            if ($scope.searchTerm == "" || $scope.searchTerm == null) {
                $scope.listings = null;
            }
        }

        function showDetails(listing) {
            $scope.listing = listing;
            $rootScope.listing = listing;
            $rootScope.$broadcast("listing", listing);
            console.log("breadcasting");
            console.log(listing);

            $location.url('/result');
        }
    }
})();
