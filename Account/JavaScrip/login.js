

userApp.controller("loginCtrl", function ($scope, $http, $routeParams,$location) {
    console.log("Đăng nhập");

    $scope.taiKhoan = {
        email: "",
        matKhau: ""
    };

    $scope.tai_khoan = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/tai-khoan"
    }).then(function (res) {
        $scope.tai_khoan = res.data;
        // console.log("email:", $scope.tai_khoan[0].email);
    })

    $scope.onClickLogin = function () {
        $scope.err = "";
        var checkLogin = $scope.tai_khoan.find(function (acc) {
            return acc.email === $scope.taiKhoan.email && acc.matKhau === $scope.taiKhoan.matKhau
        });
        if (checkLogin) {
            // Đăng nhập thành công
            alert("Đăng nhập thành công");
            window.location.href = "#!/"; // Chuyển hướng đến trang chủ
        } else {
            $scope.err = "Email hoặc mật khẩu không chính xác";
        }

        // if ($scope.taiKhoan.email === "") {
        //     $scope.err = "Mời nhập email"
        // }
        // else if ($scope.taiKhoan.matKhau === "") {
        //     $scope.err = "Mời nhập mật khẩu"
        // } else {
        //     $scope.err = "Tên tài khoản hoặc mật khẩu không chính xác"
        // }

        // if ($scope.err === "") {
        //     if ($scope.taiKhoan.email === taiKhoan.email && $scope.taiKhoan.matKhau === taiKhoan.matKhau) {
        //         alert("Đăng nhập thành công")
        //         window.location.href = "#!/"
        //     }
        // }
    }
})