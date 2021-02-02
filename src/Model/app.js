var app = angular.module('VeterinaryServices',[]);
(function(){

    var UsersController = function($scope){
        $scope.Message = "Welcome to Online";
    };
    app.controller("UsersController",UsersController);
}());