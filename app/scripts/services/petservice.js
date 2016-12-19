'use strict';

/**
 * @ngdoc service
 * @name petstoreUiApp.petservice
 * @description
 * # petservice
 * Service in the petstoreUiApp.
 */
angular.module('petstoreUiApp')
  .service('petservice', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.findAPet = function(searchPetId) {
      var url = 'pet/' + searchPetId;
      // console.log("url:" + url);
      $http.get(url)
        .then(function(response) {
          var returnPet = response.data
          console.log("Retrieving info for pet name / pet id : " + returnPet.name + "/" + returnPet.id);
          // if we've gotten the pet, map it back to the GUI
          return returnPet;
        }, function(error) {
          if (error.status===404) {
            return null; // indicates no pet found
          }
          else {
          	// if it is not a 'not found', simply throw an error
            throw error;
          }
        });
    };


  });
