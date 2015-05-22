angular.module('MyApp')
.controller('Part4Controller', function ($scope, CascadeService) {
    $scope.CountryId = null;
    $scope.StateId = null;
    $scope.CountryList = null;
    $scope.StateList = null;

    $scope.StateTextToShow = 'Please select state';

    CascadeService.GetCountry().then(function (d) {
        $scope.CountryList = d.data;
    });

    $scope.GetState = function ()
    {
        $scope.StateId = null;
        $scope.StateList = null;
        $scope.StateTextToShow = 'Loading State.....';
        CascadeService.GetState($scope.CountryId).then(function (d) {
            $scope.StateList = d.data;
            $scope.StateTextToShow = 'Please select state';
        }, function (error) {
            alert('Error');
        });

    }

})
.factory('CascadeService', function ($http) {
    var fac = {};
    fac.GetCountry = function () {
        return $http.get('/Data/GetCountry');
    }
    fac.GetState = function (CountryId) {
        return $http.get('/Data/GetState?CountryId='+CountryId);
    }
    return fac;
});