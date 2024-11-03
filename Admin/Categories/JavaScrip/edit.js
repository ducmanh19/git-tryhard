

adminApp.controller("catEditCtrl", function ($scope, $http, $routeParams) {


    console.log("CTRL - EDIT");

    $scope.catList = {
        ten: ""
    }

    // call dư liệu cũ 
    $http({
        method: "GET",
        url: "http://localhost:3000/danh-muc/" + $routeParams.id
    }).then(function (res) {
        $scope.catList = res.data
    })

    $scope.onClickEdit = function () {

        $scope.err = ""
        if ($scope.catList.ten === "") {
            $scope.err = "Mời nhập tên danh mục";
            // console.log($scope.err);

        }

        if ($scope.err === "") {
            $http({
                method: "PUT",
                url: "http://localhost:3000/danh-muc/" + $routeParams.id,
                data: $scope.catList
            }).then(function (res) {
                alert("Cập nhật dữ liệu thành côcng")
            })
        }
    }
})