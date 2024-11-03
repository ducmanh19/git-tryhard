

adminApp.controller("prdDetailCtrl", function ($scope, $http, $routeParams) {

    console.log("URL", $routeParams);
    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham/" + $routeParams.id
    }).then(function (res) {
        console.log(res.data);
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
            window.location.href = "#!products-list"
        } else {
            alert("Đã hủy xóa")

        }
    }
})