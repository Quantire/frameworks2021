var app = angular.module('studApp', []);
    app.controller('studCtrl', function($scope) {
        $scope.studList = [{
            sName: 'Борщ',
            fName: 'Карл',
            patr: 'Енакентиевич',
            note: 6, 
            rem: false
        },{
            sName: 'Стеценко',
            fName: 'Виктор',
            patr: 'Георгиевич',
            note: 4, 
            rem: false
        }];
    
        $scope.studAdd = function() {
            $scope.studList.push({
                sName: $scope.sName, 
                fName: $scope.fName, 
                patr: $scope.patr, 
                note: $scope.note,
                rem: false});
            $scope.sName = ""; 
            $scope.fName = ""; 
            $scope.patr = ""; 
            $scope.note = ""; 
        };
    
        $scope.studRemove = function() {
            var oldList = $scope.studList;
            $scope.studList = [];
            angular.forEach(oldList, function(x) {
                if (!x.rem) 
                    $scope.studList.push(x);
            });
        };
    });