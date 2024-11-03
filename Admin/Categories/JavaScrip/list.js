

adminApp.controller("catListCtrl", function ($scope, $http, $routeParams) {
    console.log("CTRL - list");

    $scope.catList = [];

    $http({
        method: "GET",
        url: "http://localhost:3000/danh-muc"
    }).then(function (res) {
        $scope.catList = res.data
    })

    // Xóa 
    $scope.onClickDelete = function (id) {
        $scope.err = "";
        let al_cf = confirm("Có chắc chắn xóa bản ghi ID:" + id);
        if (al_cf) {
            $http({
                method: "DELETE",
                url: "http://localhost:3000/danh-muc/" + id
            }).then(function (res) {
                alert("Xóa thành công")
            })
        } else {
            $scope.err = "Đã hủy xóa"
        }

    }


})