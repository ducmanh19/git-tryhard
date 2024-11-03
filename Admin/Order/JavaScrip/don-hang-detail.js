



adminApp.controller("orderDetailCtrl", function ($scope, $http, $routeParams) {
    $scope.orderList = [];
    $http({
        url: "http://localhost:3000/orders/" + $routeParams.id
    }).then(function (res) {
        $scope.orderList = res.data;
        console.log("Dữ liệu đơn hàng:", $scope.orderList);
        $scope.orderPrd = res.data.products
        console.log("Dư liệu sản phẩm:", $scope.orderPrd);
        
    })
})