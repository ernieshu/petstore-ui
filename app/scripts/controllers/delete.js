'use strict';
angular.module('petstoreUiApp')
  .controller('DeleteCtrl', function ($scope, $http) {
    this.deleteAPet = function(data) {

      $http.delete('pet/' + this.deletePetId)
        .then( function(data) {
                  $scope.feedbackMessage = 'Successfully deleted pet';
               },
               function(data) {
                  if (data.status===404) {
                    $scope.feedbackMessage = 'No pet found';
                  }
                  else {
                    $scope.feedbackMessage = 'System error';
                  }
        });
    };
  });
