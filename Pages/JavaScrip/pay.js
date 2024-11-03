

userApp.controller("payCtrl", function ($scope, $http, $routeParams) {
    $scope.prd = [];
    $scope.order = [];
    console.log("Thanh toán");
    $http({
        url:"http://localhost:3000/orders/" + $routeParams.id
    }).then(function(res){
        $scope.order =  res.data;
        $scope.prd = res.data.products
        console.log($scope.prd);
        
        
    })
})