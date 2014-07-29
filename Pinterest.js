//links from HTML//
var app = angular.module("pinApp",[]);

//finds specific controller and links from HTML//
app.controller("pinController", function($scope){

//the "pins" in 'pin in pins//
$scope.pins = [
	{
		"Picture":"pictures/pic1.jpg" ,
		"Link":"www.wines.com",
		"Description": "what is your favorite thing about wine?"
	},
	{
		"Picture":"{{picture}}",
		"Link":"{{link}}",
		"Description": "blah"
	},
	{
		"Picture":"{{picture}}",
		"Link":"{{link}}",
		"Description": "blah"
	},
	{
		"Picture":"{{picture}}",
		"Link":"{{link}}",
		"Description": "blah"
	},
	{
		"Picture":"{{picture}}",
		"Link":"{{link}}",
		"Description": "blah"
	},
	{
		"Picture":"{{picture}}",
		"Link":"{{link}}",
		"Description": "blah"
	},
	{
		"Picture":"{{picture}}",
		"Link":"{{link}}",
		"Description": "blah"
	},
	{
		"Picture":"{{picture}}",
		"Link":"{{link}}",
		"Description": "blah"
	}


]
});

