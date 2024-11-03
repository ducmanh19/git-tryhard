

adminApp.controller("prdAddCtrl", function ($scope, $http) {
    console.log("COntroller Add:");
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
        anh:""
    };

    // call danh mục
    $http({
        method: "GET",
        url: "http://localhost:3000/danh-muc"
    }).then(function (res) {
        console.log(res.data.ten);
        $scope.catList = res.data
    })



    $scope.onClickAdd = async function () {
        $scope.err = "";
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
            console.log(res.data.ten);
            $scope.prdList.tenDanhMuc = res.data.ten
        })
        if ($scope.err === "") {
            $http({
                method: "POST",
                url: "http://localhost:3000/san-pham",
                data: $scope.prdList
            }).then(function (res) {
                alert("Cập nhật thành công.");
                window.location.href = "#!products-list"
                // $scope.prdList = res.data
            })
        }

    }


})