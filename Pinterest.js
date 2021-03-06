//links from HTML//
var app = angular.module("pinApp",["firebase"]);

//finds specific controller and links from HTML//
app.controller("pinController", function($scope,$firebase){

// links Javascript to firebase
var ref = new Firebase("https://travelist.firebaseio.com/");
var sync = $firebase(ref);

// function that links information in html to firebase //

$scope.pins = sync.$asArray();

$scope.addPins = function(){
    $scope.pins.$add({
    	picture: $scope.newPinPicture, 
    	website: $scope.newPinWebsite, 
    	description: $scope.newPinDescription,
    	liked: false 
    });

 	$scope.newPinPicture = ""; 
 	$scope.newPinWebsite = ""; 
 	$scope.newPinDescription = "";
 	$('#myModal').modal('hide')


  }


 
});



