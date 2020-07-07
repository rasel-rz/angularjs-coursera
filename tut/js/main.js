(function () {
  "use strict"; // Stricts variables to stay in this scope. Don't go GLOBAL.
  var mainApp = angular.module("app-main", []);

  mainApp
    .controller("ctlr-main", mainController)
    .filter("custom", CustomFilterFactory);

  mainController.$inject = ["$scope", "$filter", "customFilter"];
  function mainController($scope, $filter, customFilter) {
    $scope.name = "";
    $scope.numericValue = 0;
    $scope.displayNumericValue = function () {
      var totalNumericValue = calculateNumericValueOfString($scope.name);
      $scope.numericValue = totalNumericValue;
    };

    function calculateNumericValueOfString(string) {
      var total = 0;
      if (string == null || string == undefined || string == "") {
        return total;
      }
      for (var i = 0; i < string.length; i++) {
        total += string.charCodeAt(i);
      }
      return total;
    }
  }

  function CustomFilterFactory() {
    return function (input) {
      return "$ " + input;
    };
  }
})();
