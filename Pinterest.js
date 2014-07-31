//links from HTML//
var app = angular.module("pinApp",["firebase"]);

//finds specific controller and links from HTML//
app.controller("pinController", function($scope,$firebase){

// links Javascript to firebase
var ref = new Firebase("https://travelist.firebaseio.com/");
var sync = $firebase(ref);

// function that links information in html to firebase //

$scope.movies = sync.$asArray();
	$scope.addPin = function(picture, website, description){
    $scope.pins.$add({picture: picture, website: website, description: description})

  }

 
});

// //the "pins" in 'pin in pins//
// $scope.pins = [
// 	{
// 		"Picture":"pictures/beach.jpg",
// 		"Link":"www.louis.com",
// 		"Description": "blah"
// 	},
// 	{
// 		"Picture":"pictures/world.jpg",
// 		"Link":"{{link}}",
// 		"Description": "blah"
// 	},
// 	{
// 		"Picture":"pictures/lewis.png",
// 		"Link":"{{link}}",
// 		"Description": "blah"
// 	},
// 	{
// 		"Picture":"pictures/book.jpg",
// 		"Link":"{{link}}",
// 		"Description": "blah"
// 	},
// 	{
// 		"Picture":"pictures/hotair.jpg",
// 		"Link":"{{link}}",
// 		"Description": "blah"
// 	},
// 	{
// 		"Picture":"pictures/hike.jpg",
// 		"Link":"{{link}}",
// 		"Description": "blah"
// 	},
// 	{
// 		"Picture":"pictures/map.jpg",
// 		"Link":"{{link}}",
// 		"Description": "blah"
// 	},
// 	{
// 		"Picture":"pictures/aware.jpg",
// 		"Link":"{{link}}",
// 		"Description": "blah"
// 	}




// ]
// });

