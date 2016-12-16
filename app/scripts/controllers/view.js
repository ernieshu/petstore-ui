'use strict';
angular.module('petstoreUiApp')
  .controller('ViewCtrl', function ($scope, $http) {

    this.findAPet = function(data) {
      $http.get('pet/' + this.searchPetId)
        .then(function(data) {
          var returnPet = data.data
          console.log("Retrieving info for pet name: " + returnPet.name);
          // if we've gotten the pet, map it back to the GUI
          $scope.viewPet = {
            id: returnPet.id,
            name: returnPet.name,
            category: returnPet.category,
            status: returnPet.status,
            tags: returnPet.tags,
            photoUrls: returnPet.photoUrls
          };
          $scope.feedbackMessage = null;
        }, function(data) {
          if (data.status===404) {
            $scope.feedbackMessage = 'No pet found';
            $scope.viewPet = null;
          }
          else {
            $scope.feedbackMessage = 'System error';
            $scope.viewPet = null;
          }
        });
    };
  });
