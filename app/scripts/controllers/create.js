'use strict';
angular.module('petstoreUiApp')
  .controller('CreateCtrl', function ($scope, $http) {

    this.categories = [
      { id: 0, name: 'Category 0'},
      { id: 1, name: 'Category 1'},
      { id: 2, name: 'Category 2'},
      { id: 3, name: 'Category 3'}
    ];

    this.tags = [
      { id: 0, name: 'Tag 0'},
      { id: 1, name: 'Tag 1'},
      { id: 2, name: 'Tag 2'},
      { id: 3, name: 'Tag 3'}
    ];

    this.pet = {
    };

    this.feedbackMessage;

    this.addAPet = function() {

      // pre-process the photoUrls, so that only strings are passed, rather than full objects
      var photoUrlStrings = [];
      if (typeof this.pet.photoUrls!= 'undefined') {
        photoUrlStrings = this.pet.photoUrls.map(function(photoUrl) { return photoUrl.text; });
      };

      var petToBeAdded = {
        name : this.pet.name
      };

      // only populate certain items if they've been entered
      if (this.pet.status!==null) {
        petToBeAdded['status'] = this.pet.status.toUpperCase();
      };
      if (this.pet.categoryId!=null) {
        petToBeAdded['category'] = { id: this.pet.categoryId };
      };
      if (typeof this.pet.tags!= 'undefined') {
        petToBeAdded['tags'] = this.pet.tags;
      };
      if (photoUrlStrings.length > 0) { 
        petToBeAdded['photoUrls'] = photoUrlStrings;
      };

      $http.post('pet', petToBeAdded)
        .then(function(data) {
                $scope.feedbackMessage = 'Entity created with id:' + data.data.id;
              },
              function(data) {
                if (data.status==='500') {
                  console.log("system error");
                }
              });
    };
  });
