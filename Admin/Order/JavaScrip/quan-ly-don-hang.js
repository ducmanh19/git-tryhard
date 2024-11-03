adminApp.controller("orderCtrl", function ($scope, $http, $routeParams) {
    $scope.orderList = [];
    $scope.filterStatus = "";
    $http({
      url: "http://localhost:3000/orders",
    }).then(function (res) {
      $scope.orderList = res.data;
      // console.log("Dữ liệu đơn hàng:", $scope.orderList);
    });
    // Lọc
    $scope.onChangeStatus = function () {
      // console.log("id:", $scope.filterStatus);
  
      $http({
        url: "http://localhost:3000/orders",
        params: {
          status: $scope.filterStatus,
        },
      }).then(function (res) {
        $scope.orderList = res.data;
        console.log("Dữ liệu đơn hàng:", $scope.orderList);
      });
    };
  
    $scope.onClickAgree = function (id) {
        // ... (code hiện tại của bạn)
    
        // 2. Lấy trạng thái hiện tại và xác định trạng thái mới
        const orderIndex = $scope.orderList.findIndex((order) => order.id === id);
        if (orderIndex === -1) return; // Thoát nếu không tìm thấy đơn hàng
    
        const currentStatus = $scope.orderList[orderIndex].status;
        let newStatus = "";
        switch (currentStatus) {
            case "Chờ xác nhận":
                newStatus = "Đang vận chuyển";
                break;
            case "Đang vận chuyển":
                newStatus = "Đang giao";
                break;
            case "Đang giao":
                newStatus = "Đã giao";
                break;
            default:
                return; // Thoát nếu trạng thái không hợp lệ
        }
    
       // 3. Gọi API để cập nhật trạng thái trên server
    $http({
        method: "PUT",
        url: "http://localhost:3000/orders/" + id,
        data: { status: newStatus } // Chỉ gửi trường trạng thái mới
    })
    .then(function (res) {
        // 4. Cập nhật trạng thái đơn hàng trên giao diện
        $scope.orderList = res.data; // Cập nhật toàn bộ dữ liệu đơn hàng
        alert("Cập nhật thành công.");
    })
    .catch(function (error) {
        console.error(error);
        alert("Cập nhật thất bại.");
    });
    };
  
    // Hàm xử lý khi click nút "Hủy"
    $scope.onClickCancel = function (id) {
      if (!confirm("Bạn có chắc chắn muốn hủy đơn hàng này?")) {
        return; // Không làm gì nếu người dùng không xác nhận
      }
  
      // Gọi API để cập nhật trạng thái đơn hàng thành "Đã hủy"
      $http({
        method: "PUT",
        url: "http://localhost:3000/orders/" + id,
        data: { status: "Đã hủy" },
      })
        .then(function (res) {
          // Cập nhật trạng thái đơn hàng trên giao diện
          const orderIndex = $scope.orderList.findIndex(
            (order) => order.id === id
          );
          if (orderIndex !== -1) {
            $scope.orderList[orderIndex].status = "Đã hủy";
          }
          alert("Hủy đơn hàng thành công.");
        })
        .catch(function (error) {
          console.error(error);
          alert("Hủy đơn hàng thất bại.");
        });
    };
  });