var app = angular.module("myApp", [])
    .controller("myCtrl", function($scope){
        $scope.today = new Date();

        //Sex
        $scope.Sex = [{
            idName: "male",
            name: "Мужчина",
            checked: false
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

        //Educations
        $scope.educations = [
            {
                idName: "ed1",
                name: "среднее",
                checked: false
            },
            {
                idName: "ed2",
                name: "неоконченное высшее",
                checked: false
            },
            {
                idName: "ed3",
                name: "высшее",
                checked: false
            }
        ]

        //Vacancies
        $scope.vacancies = [
            {name: "Junior HTML/CSS Front-End Developer"},
            {name: "Middle PHP Back-End Developer"},
            {name: "Junior C# Back-End Developer"},
            {name: "Middle C++ Developer"},
            {name: "Junior Python Developer"},
        ];

        //Reset form
        $scope.resetForm = function(){
            $scope.myForm = {};
            angular.forEach($scope.Sex, function (Sex) {
                Sex.checked = false;
            });
            angular.forEach($scope.educations, function (educations) {
                educations.checked = false;
            });
        }
        //Show output
        $scope.showOutput = function(){
            $scope.showInfo = true;
        }
    })