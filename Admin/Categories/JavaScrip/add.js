

adminApp.controller("catAddCtrl", function ($scope, $http, $routeParams) {

    $scope.catList = {
        ten: ""
    };
    console.log("CTRL - ADD");

    $scope.onClickAdd = function () {
        console.log("vào");
        $scope.err = "";
        if ($scope.catList.ten === "") {
            $scope.err = "Mời nhập tên danh mục"
        }

        if ($scope.err === "") {
            $http({
                method: "POST",
                url: "http://localhost:3000/danh-muc",
                data: $scope.catList
            }).then(function (res) {
                alert("THêm sản phẩm thành công")
                window.location.href = "#!/category-list"
            })

        }

    }


})