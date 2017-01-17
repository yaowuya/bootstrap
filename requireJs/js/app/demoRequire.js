define(["angular"], function() {
    var formapp = angular.module("formApp", []);
    formapp.controller("formControl", function($scope, $timeout) {
        $scope.name = "小明";
        $scope.paw = "123124";
        $timeout(function() {
            $scope.paw = "000000";
        }, 2000);
    });

    formapp.directive("xiaoming", function() {
        return {
            restrict: "AE",
            template: "<h1>小明</h1>"
        }
    });

    formapp.controller("conUL", function($scope, $interval) {
        $scope.theTime = new Date().toLocaleString();
        $interval(function() {
            $scope.theTime = new Date().toLocaleString();
        }, 1000);
        $scope.names = [{
            name: 'Jani',
            country: 'Norway'
        }, {
            name: 'Hege',
            country: 'Sweden'
        }, {
            name: 'Kai',
            country: 'Denmark'
        }];
    });
    formapp.service('$hexafy', function() {
        this.myFunc = function(x) {
            return x.toString(16);
        }
    });
    formapp.controller("createSer", function($scope, $hexafy) {
        $scope.hex = $hexafy.myFunc(255);
    });
    // formapp.controller("serHttp", function($scope, $http) {
    //     $http.get("http://www.runoob.com/try/angularjs/data/sites.php").success(function(response) {
    //         console.log("response");
    //         $scope.names = response.sites;
    //     });
    // });

});