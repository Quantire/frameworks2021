var app = angular.module("myApp", [])
    .controller("myCtrl", function($scope){
        //Sex
        $scope.ent = [{
            idName: "male",
            name: "Мужчина",
            checked: true
        },{
            idName: "female",
            name: "Женщина",
            checked: false
        }]

        $scope.updSelection = function(position, ent) {
            angular.forEach(ent, function(sub, index) {
              if (position != index) 
                sub.checked = false;
            });
        }
        //Vacancies
        $scope.vacancies = [
            {name: "Junior HTML/CSS Front-End Developer", salary: 8000},
            {name: "Middle PHP Back-End Developer", salary: 15000},
            {name: "Junior C# Back-End Developer", salary: 10000},
            {name: "Middle C++ Developer", salary: 14000},
            {name: "Junior Python Developer", salary: 9000},
        ];
    })