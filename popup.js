console.log("I am the popup");
let amazonextension = angular.module("amazonextension", ['ui.router'])

amazonextension.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: '/login.html',
          controller: 'logger'
        });
    
      $urlRouterProvider.otherwise('login');
    }]);
    var ID;
    var password;
    var userdata={
        ID,
        password
    }
     
    amazonextension.controller('logger',['$scope',function($scope){
        $scope.username='shivani';
        $scope.password='agrahari';

        $scope.makedata=function(usernam,passwor){
            $scope.username=usernam;
            userdata.ID=usernam;
            userdata.password=passwor;
            console.log(userdata);
            chrome.runtime.sendMessage(userdata);
        };
    }])
    