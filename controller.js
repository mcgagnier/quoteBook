
angular.module('quoteBook').controller('mainCtrl', function($scope, mainService) {
    $scope.test = "WORKING";
    $scope.quotes = mainService.getQuotes();

});
