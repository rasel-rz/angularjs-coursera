(function () {
  "use strict"; // Stricts variables to stay in this scope. Don't go GLOBAL.
  var mainApp = angular.module("app-main", []);

  mainApp
    .controller("ctlr-main", mainController)
    .directive("myProfile", myProfile)
    .directive("myPlaceholder", myPlaceholder)
    .factory("myAPI", myAPI);

  // mainController.$inject = ["$scope"];
  function mainController($scope, $timeout, myAPI) {
    $scope.profile = {
      name: "Raihanuzzaman",
      address: "Satkhira",
      hobby: "Programming",
    };

    $scope.loadData = function () {
      $timeout(function () {
        myAPI.getData().then(function (data) {
          $scope.apiData = data;
        });
      }, 2000);
    };

    $scope.refreshData = function () {
      $scope.apiData = null;
      $scope.loadData();
    };

    $scope.loadData();
  }

  function myAPI($http) {
    var apiurl = "https://jsonplaceholder.typicode.com/posts";
    return {
      getData: function () {
        var promise = $http.get(apiurl).then(
          function (response) {
            return response.data;
          },
          function (error) {
            return `data loading failed. STATUS CODE: ${error.status}`;
          }
        );
        return promise;
      },
    };
  }

  function myProfile() {
    return {
      templateUrl: "profile.html",
    };
  }

  function myPlaceholder() {
    return {
      templateUrl: "placeholder.html",
    };
  }
})();
