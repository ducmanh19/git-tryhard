

adminApp.controller("prdListCtrl", function ($scope, $http) {
    // console.log("Controller List");
    // Call api lấy dữ liệu
    // Khai báo biến lưu trữ
    $scope.prdList = [];
    $scope.catList = [];
    $scope.filterDM = '';
    // call danh mục 
    $http({
        method: "GET",
        url: "http://localhost:3000/danh-muc"
    }).then(function (res) {
        $scope.catList = res.data
    })
    // call sản phẩm
    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham"
        

    }).then(function (res) {
        $scope.prdList = res.data
    })
    // Xóa
    $scope.onClickDelete = function (id) {
        let xoa = confirm("Bạn có chắc chắn xóa bản ghi ID:" + id)
        if (xoa) {
            $http({
                method: "DELETE",
                url: "http://localhost:3000/san-pham/" + id
            })
            alert("XÓa thành công")
        } else {
            alert("Đã hủy xóa")

        }
    }

    // Lọc 

    $scope.onChangeSP = function () {
        console.log("id:", $scope.filterDM);
        $http({
            method: "GET",
            url: "http://localhost:3000/san-pham",
            params: {
                idDanhMuc: $scope.filterDM
            }

        }).then(function (res) {
            $scope.prdList = res.data
        })
    }



})