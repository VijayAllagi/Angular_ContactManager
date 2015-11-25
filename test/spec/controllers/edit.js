'use strict';

describe('Controller: edit', function () {

  // load the controller's module
  beforeEach(module('contactManagerApp'));

  var edit,
    scope,routeParams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$routeParams) {
    scope = $rootScope.$new();
    routeParams = {id:1}; 
    //Stub function for getContact
    scope.getContact=function(id){
        scope.contact ;
        angular.forEach(scope.contacts,function(value, key) {
                    if(id == value.id){
                     scope.contact = value;
                    }
                });
    };
    edit = $controller('edit', {
      $scope: scope,
      $routeParams:routeParams
    });
    scope.contacts =[{
              id: 1,
              name : 'Terrence S. Hatfield',
              tel: '651-603-1723',
              email: 'TerrenceSHatfield@rhyta.com'
            }];
  }));

  it('should routeParams is added', function () {
    scope.newContact =true;
    expect(scope.newContact).toBe(true);
  });
  it('should add contact is edit', function () {
      scope.newContact =false;
      scope.contact ={
              id: 1,
              name : 'sss',
              tel: '651-603-1723',
              email: 'dfcf@rhyta.com'
      };
    scope.addOrUpdateContact()
    expect(scope.contacts[0].name).toBe('sss');
  });
   it('should add contact is added', function () {
      scope.newContact =true;
      scope.contact ={
              name : 'vij',
              tel: '651-603-1723',
              email: 'dfcf@rhyta.com'
      };
    scope.addOrUpdateContact()
    expect(scope.contacts[1].id).toBe(2);
  });
});
