var app = angular.module('workApp', []).controller('workCtrl', function($scope){
    $scope.firstName = "Edic";
    $scope.secName = "Quantire";
    $scope.salary = 7000; 
    $scope.vacancies = [
        {name: "Junior HTML/CSS Front-End Developer",salary: 8000},
        {name: "Middle PHP Back-End Developer",salary: 15000},
        {name: "Junior C# Back-End Developer",salary: 10000},
        {name: "Middle C++ Developer",salary: 14000},
        {name: "Junior Python Developer",salary: 9000},
    ];
})