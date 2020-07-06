(function () {
  "use strict"; // Stricts variables to stay in this scope. Don't go GLOBAL.
  angular
    .module("app-main", [])

    .controller("ctlr-main", function ($scope) {
      // console.log("what");
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
    });
})();
