'use strict';

/**
 * @ngdoc function
 * @name contactManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactManagerApp
 */
app.controller("indexctrl",["$scope","ContactsData",function($scope,ContactsData){
    $scope.contacts = ContactsData.getContacts();
    $scope.getContact=function(id){
        $scope.contact ;
        angular.forEach($scope.contacts,function(value, key) {
                    if(id == value.id){
                     $scope.contact = value;
                    }
                });
    }
    $scope.deleteContact = function(id){
    var keyc;
     angular.forEach($scope.contacts,function(value, key) {
                    if(id == value.id){
                     keyc = key;
                    }

                });
    if(keyc !==undefined){
    $scope.contacts.splice(keyc, 1);
    }
    };
}]);
