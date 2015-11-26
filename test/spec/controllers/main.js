'use strict';

describe('Controller: indexctrl', function () {

  // load the controller's module
  beforeEach(module('contactManagerApp'));

  var indexctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    indexctrl = $controller('indexctrl', {
      $scope: scope
    });
  }));

  it('contacts length to be 6', function () {
    expect(scope.contacts.length).toBe(6);
  });
 it('check the  length to be 0', function () {
    scope.contacts =[];
    expect(scope.contacts.length).toBe(0);
  });

it('check the  getContact function', function () {
    scope.contacts =[{
              id: 1,
              name : 'Terrence S. Hatfield',
              tel: '651-603-1723',
              email: 'TerrenceSHatfield@rhyta.com'
            }];
     scope.getContact(1);
    expect(scope.contact.id).toBe(1);
  });
    
it('check the  delete function', function () {
    scope.contacts =[{
              id: 4,
              name : 'sss',
              tel: '651-603-1723',
              email: 'dfcf@rhyta.com'
            }];
     scope.deleteContact(4);
    expect(scope.contacts.length).toBe(0);
  });
it('check the  delete function wrong input', function () {
    scope.contacts =[{
              id: 4,
              name : 'sss',
              tel: '651-603-1723',
              email: 'dfcf@rhyta.com'
            }];
     scope.deleteContact(1);
    expect(scope.contacts.length).toBe(1);
  });
    
});
