

userApp.controller("productCtrl", function ($scope, $http, $routeParams) {

    console.log("ID danh mục:", $routeParams.idDM);
    $scope.prdList = [];
    $scope.catList = [];
    $scope.filterDM = "";
    $scope.sortSP = "";
    $scope.searchName = "";

    // tìm kiếm
    $scope.filterPRD = function (product) {
        var prdNameLower = product.ten.toLowerCase(); // chuyển tên trong data thành chữu thường
        var searchNameLower = $scope.searchName.toLowerCase()// tên tìm kiếm => chữ thường
        return prdNameLower.includes(searchNameLower)
    };
    // button search
        // $scope.searchProducts = function(){
        //     $http({
        //         method:"GET",
        //         url:"http://localhost:3000/san-pham",
        //         params:{
        //             q:$scope.searchName,
        //             _sort:$scope.sortSP,
        //             idDanhMuc:$scope.filterDM
        //         }
        //     }).then(function(res){
        //         $scope.prdList = res.data;
        //     })
        // }

    // Sản phẩm
    if ($routeParams.idDM === "all") {
        // console.log("if");
        $http({
            method: "GET",
            url: "http://localhost:3000/san-pham"
        }).then(function (res) {
            $scope.prdList = res.data;
        })
    } else {
        console.log("else:", $routeParams.idDM);
        $http({
            method: "GET",
            url: "http://localhost:3000/san-pham",
            params: {
                idDanhMuc: $routeParams.idDM
            }
        }).then(function (res) {
            $scope.prdList = res.data;
        })
    }


    // Danh mục
    $http({
        method: "GET",
        url: "http://localhost:3000/danh-muc"
    }).then(function (res) {
        $scope.catList = res.data
    })

    // lọc
    $scope.onChangeDanhMuc = function () {
        console.log("Giá trị:", $scope.filterDM);

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

    // Sắp xếp
    $scope.onChangeSP = function () {
        console.log("SORT:", $scope.sortSP);

        $http({
            method: "GET",
            url: "http://localhost:3000/san-pham",
            params: {
                _sort: $scope.sortSP,
                idDanhMuc: $scope.filterDM
            }
        }).then(function (res) {
            $scope.prdList = res.data
        })
    }




})