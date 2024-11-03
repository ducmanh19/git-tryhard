

userApp.controller("detailCtrl", function ($scope, $http, $routeParams) {

    // console.log("Vào");
    $scope.prdDetail = [];
    $scope.cart = {

        idSP: "",
        ten: "",
        anh: "",
        giaBan: null,
        quantity: null,
        tongTien: null
    }

    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham/" + $routeParams.id
    }).then(function (res) {
        $scope.prdDetail = res.data
        console.log($scope.prdDetail);

    })

    $scope.addToCart = function () {
        // console.log($scope.prdDetail.quantity);
        $scope.err = ""

        if ($scope.prdDetail.quantity == null) {
            $scope.err = " Mời chọn số lượng sản phẩm"
        } else if ($scope.prdDetail.quantity > $scope.prdDetail.soLuong) {
            $scope.err = "Mời bạn giảm số lượng sản phẩm "

        } else if ($scope.prdDetail.quantity < 0 || $scope.prdDetail.quantity == 0) {
            $scope.err = "Số lượng sản phẩm phải là số nguyên dương  "

        }
        // console.log($scope.err);


        if ($scope.err == "") {
            $http({
                method: "POST",
                url: "http://localhost:3000/gio-hang",
                data: $scope.prdDetail
            }).then(function (res) {
                console.log(res.data);
                alert("Thêm sản phẩm thành công")
                // $scope.cart = res.data
            })
        }



    }
})