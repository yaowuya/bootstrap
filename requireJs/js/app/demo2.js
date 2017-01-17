define(["numm","angular","jquery"],function(Numm){
   var myapp=angular.module("myapp",[]);
   myapp.controller("mycontrol",function($scope){
      // $scope.name=Numm.names("小明");
      // $scope.num=Numm.number(4);
      Numm.names($scope,"小明");
      Numm.number($scope,4);
      $scope.abc=Numm.ABC(2);
   });
   $("#div").css({
       backgroundColor: 'red',
       property2: 'value2'
   });
});