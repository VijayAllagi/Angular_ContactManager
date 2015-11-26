app.controller('edit',['$scope','$route','$routeParams','$location', function ($scope,$route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        if(typeof $scope.$routeParams.id=="undefined"){
                $scope.newContact = true;
                $scope.contact ={};
                $scope.contact.name ="";
                $scope.contact.tel = "";
                $scope.contact.email="";
                $scope.contact.id = "";
        }
        else{
          $scope.newContact = false;                  
          var id = $scope.$routeParams.id;
           contact =  $scope.getContact(id);
        }
        $scope.addOrUpdateContact = function(){
            if($scope.newContact == true){
            var maxid = 0;
           angular.forEach($scope.contacts,function(value, key) {
                    if(maxid <value.id){
                     maxid = value.id;
                    }
                });
        $scope.contacts.push({ id: maxid+1,name: $scope.contact.name, tel: $scope.contact.tel, email:               $scope.contact.email, imgname:Math.floor((Math.random() * 10) + 1)});
        console.log($scope.contacts);
        $scope.contact.name = "";
        $scope.contact.tel = "";
        $scope.contact.email="";
        $scope.contact.id = undefined;         
        }
        else{
            var keyc ;
            angular.forEach($scope.contacts,function(value, key) {
                    if($scope.$routeParams.id  == value.id){
                      keyc = key;
                    }
                });
            $scope.contacts[keyc]= $scope.contact;
        }
        $location.path('/');
        };
    
    
}]);