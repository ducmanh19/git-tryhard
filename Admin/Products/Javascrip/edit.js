

adminApp.controller("prdEditCtrl", function ($scope, $http, $routeParams) {
    console.log("URL:", $routeParams);
    $scope.catList = {
        ten: ""
    };
    $scope.prdList = {

        ten: "",
        moTa: "",
        giaBan: null,
        idDanhMuc: "",
        tenDanhMuc: "",
        soLuong: null,
        anh: ""
    };
    // call danh mục
    $http({
        method: "GET",
        url: "http://localhost:3000/danh-muc"
    }).then(function (res) {
        console.log(res.data);
        $scope.catList = res.data
    })
    // call sản phẩm
    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham/" + $routeParams.id
    }).then(function (res) {
        console.log(res.data);
        $scope.prdList = res.data



    })

    $scope.onClickEdit = async function () {
        $scope.err = ""
        if ($scope.prdList.ten === "") {
            $scope.err = "Mời nhập tên sản phẩm"
        }
        else if ($scope.prdList.idDanhMuc === "") {
            $scope.err = "Mời chọn danh mục sản phẩm"
        }
        else if ($scope.prdList.moTa === "") {
            $scope.err = "Mời nhập mô tả sản phẩm"
        }
        else if ($scope.prdList.giaBan === null) {
            $scope.err = "Mời nhập giá sản phẩm"
        }
        else if ($scope.prdList.soLuong === null) {
            $scope.err = "Mời nhập số lượng sản phẩm"
        }
        else if ($scope.prdList.anh === "") {
            $scope.err = "Mời nhập đường dẫn ảnh  sản phẩm"
        }
        await $http({
            method: "GET",
            url: "http://localhost:3000/danh-muc/" + $scope.prdList.idDanhMuc
        }).then(function (res) {
            $scope.prdList.tenDanhMuc = res.data.ten
            console.log(res.data.ten);
        })

        if ($scope.err === "") {
            $http({
                method: "PUT",
                url: "http://localhost:3000/san-pham/" + $routeParams.id,
                data: $scope.prdList
            }).then(function (res) {
                alert("Cập nhật thành công.");

                // $scope.prdList = res.data
            })
        }
    }


})