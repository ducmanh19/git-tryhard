

userApp.controller("cartCtrl", function ($scope, $http, $routeParams) {
  console.log("Giỏ hàng");
  $scope.cart = [];

 
  

  $http({
    method: "GET",
    url: "http://localhost:3000/gio-hang"
  }).then(function (res) {
    $scope.cart = res.data;


    console.log($scope.cart);
  })

  $scope.onChangeQuantity = function () {
    $http({
      method: "PUT",
      url: "http://localhost:3000/gio-hang"
    }).then(function (res) {
      $scope.cart = res.data;


      console.log($scope.cart);
    })

  }



  // XÓa 
  $scope.onClickDelete = function (id) {
    console.log(id);

    if (confirm("Xác nhận xóa sản phẩm id:" + id)) {
      $http({
        method: "DELETE",
        url: "http://localhost:3000/gio-hang/" + id,
        data: $scope.cart
      }).then(function (res) {
        // $scope.cart = res.data;
        alert("Xóa thành công")
      })
    } else {
      alert("Đã hủy xóa")
    }

  }

  // tính tiền


  //  $scope.cart.tongTien = $scope.cart.giaBan * $scope.item.quantity
  //  $scope.tongCong = tongPhu + 30000
  //  console.log("Tổng phụ:" ,$scope.tongCong);



  // $scope.$on('$routeChangeSuccess', function () {
  //   // Code xử lý checkbox "chọn tất cả" 
  //   document.getElementById('selectAll').addEventListener('change', function () {
  //     var checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
  //     for (var checkbox of checkboxes) {
  //       checkbox.checked = this.checked;
  //     }
  //   });
  // });

})