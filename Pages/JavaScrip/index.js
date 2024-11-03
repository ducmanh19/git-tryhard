


userApp.controller("indexCtrl", function ($scope, $http, $location) {
// HIện slider 
$scope.showSlider = $location.path() === '/'; 
console.log($scope.showSlider)
console.log("Trang chủ");



    $scope.sanPham = [];
    $scope.danhMuc = [];
    // Sản phẩm trang chủ 
    $http({
      method: "GET",
      url: "http://localhost:3000/san-pham",
      params: {
        _limit: 4
    }

    }).then(function (res) {
      // console.log(res.data);
      $scope.sanPham = res.data


    })
    // Danh mục
    $http({
      method: "GET",
      url: "http://localhost:3000/danh-muc"

    }).then(function (res) {
      console.log(res.data);
      $scope.danhMuc = res.data


    })


  })