(function () {
  "use strict"; // Stricts variables to stay in this scope. Don't go GLOBAL.
  angular
    .module("LunchCheck", [])

    .controller("ctlr-main", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.message = "";
    $scope.CheckIfTooMuch = function () {
      var numberOfItems = countCommaSeperatedItems($scope.items);
      // console.log("click => ", $scope.items, numberOfItems);
      if (numberOfItems <= 0) {
        $scope.message = "Please enter data first";
      } else if (numberOfItems > 3) {
        $scope.message = "Too much";
      } else if (numberOfItems > 0 && numberOfItems <= 3) {
        $scope.message = "Enjoy";
      }
    };

    function countCommaSeperatedItems(string) {
      if (string == "" || string == null || string == undefined) return 0;
      var strArr = string.split(",");
      var count = 0;
      // Do not consider empty items
      strArr.forEach((str, index) => {
        if (str.trim() != "") {
          count += 1;
        }
      });
      // console.log(count);
      return count;
    }
  }
})();
