var app = angular.module('studentApp', []).controller('stdCntrl', function($scope){
    $scope.firstName = "Edic";
    $scope.secName = "Quantire";
    $scope.patron = "Petru";
    $scope.grade = 10;
    $scope.stipend = 850;
    $scope.bday = { 
        value: new Date(2077, 8, 10)
    }
})

// function okon(){
//     let ok = num % 10;
//     if(ok == 2 || ok == 3 | ok == 4){
//         $('.okon').text("лея");
//     }
// }
