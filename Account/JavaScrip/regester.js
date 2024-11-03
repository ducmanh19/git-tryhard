

userApp.controller("regesterCtrl", function ($scope, $http, $routeParams) {
    console.log("Đăng ký");
    $scope.acc = {

        hoTen: "",
        sdt: null,
        diaChi: "",
        email: "",
        matKhau: ""
    };

    $scope.onClickRegester = function () {
        $scope.err = ""
        if ($scope.acc.hoTen === "") {
            $scope.err = "MỜi nhập họ và tên"
        }
        else if ($scope.acc.sdt === null) {
            $scope.err = "Mời nhập số điện thoại"
        }
        else if ($scope.acc.diaChi === "") {
            $scope.err = "Mời nhập địa chỉ"
        }
        else if ($scope.acc.email === "") {
            $scope.err = "Mời nhập email"
        }
        else if ($scope.acc.matKhau === "") {
            $scope.err = "Mời nhập mật khẩu"
        }

        if ($scope.err === "") {
            $http({
                method: "POST",
                url: "http://localhost:3000/tai-khoan",
                data: $scope.acc
            }).then(function (res) {
                console.log(res.data);
                alert("Đăng ký tài khoản thành công")
                window.location.href = "#!/account-login"
            })
        }

    }
})