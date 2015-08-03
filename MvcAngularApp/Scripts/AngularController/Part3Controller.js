angular.module('MyApp')
.controller('Part3Controller', function ($scope, AddService) {
    $scope.Student =
        {
            StudentName: '',
            StudentRoll: '',
            StudentAddress: ''
        };
    $scope.SaveData = function () {
        AddService.SaveFromData($scope.Student, function (d) {
            alert(d);
        });
    }
})
.factory('AddService', function ($http) {
    var fac = {};
    fac.SaveFromData = function(data)
    {
        $http(
            {
                url: '/Data/Create',
                method: 'POST',
                data: JSON.stringify(data),
                headers: { 'content-type': 'application/json' }
            });
    }
    return fac;
    
});