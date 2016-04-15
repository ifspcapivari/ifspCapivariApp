angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});  
})

.controller('HomeCtrl', function($scope, $http, $ionicLoading){  
    $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });
    
    $http.get("http://www.ifspcapivari.com.br/wp-json/wp/v2/posts/?per_page=5")
    .success(function(response){
        $scope.posts = response;
        $ionicLoading.hide();
    })
    .error(function(err){
        console.log("Erro ao fazer a requisicao" + err);
    });    
})

.controller('SingleCtrl', function($scope, $http, $stateParams){
    $http.get("http://www.ifspcapivari.com.br/wp-json/wp/v2/posts/" + $stateParams.postId)
    .success(function(response){
        $scope.post = response;
    })
    .error(function(err){
        console.log("Erro ao fazer a requisicao" + err);
    })
});