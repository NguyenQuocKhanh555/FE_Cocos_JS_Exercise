## Component Life Cycle là gì ?
Component Life Cycle là tập hợp các phương thức được Cocos Creator tự động gọi theo thứ tự xác định trong suốt vòng đời của một component gắn trên một Node.

Một life-cycle bao gồm:
```text
onLoad → onEnable → start → update → lateUpdate → onDisable → onDestroy
```

## Chi tiết từng giai đoạn
**onLoad()**

Thời điểm gọi: <br>
&nbsp;&nbsp;&nbsp;🔹 Khi Node được tạo và Component được gắn vào. <br>
&nbsp;&nbsp;&nbsp;🔹 Chỉ gọi một lần trong vòng đời.

Đặc điểm kỹ thuật:<br>
&nbsp;&nbsp;&nbsp;🔹 Chạy trước onEnable() và start().<br>
&nbsp;&nbsp;&nbsp;🔹 Không phụ thuộc vào trạng thái active của Node khi scene được tải.<br>
&nbsp;&nbsp;&nbsp;🔹 Dùng để khởi tạo dữ liệu nội bộ.

Ứng dụng:<br>
&nbsp;&nbsp;&nbsp;🔹 Cache component để tối ưu hiệu năng.<br>
&nbsp;&nbsp;&nbsp;🔹 Khởi tạo biến và cấu hình.

**onEnable()**

Thời điểm gọi:<br>
&nbsp;&nbsp;&nbsp;🔹 Được gọi khi Component hoặc Node được kích hoạt.<br>
&nbsp;&nbsp;&nbsp;🔹 Xảy ra sau onLoad().<br>
&nbsp;&nbsp;&nbsp;🔹 Được gọi mỗi khi:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔸 node.active = true<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔸 component.enabled = true

Đặc điểm kỹ thuật:<br>
&nbsp;&nbsp;&nbsp;🔹 Có thể được gọi nhiều lần trong vòng đời.<br>
&nbsp;&nbsp;&nbsp;🔹 Không được gọi nếu Node bị vô hiệu hóa.<br>
&nbsp;&nbsp;&nbsp;🔹 Là nơi phù hợp để bắt đầu các hệ thống sự kiện hoặc logic runtime.

Ứng dụng:<br>
&nbsp;&nbsp;&nbsp;🔹 Đăng ký sự kiện.<br>
&nbsp;&nbsp;&nbsp;🔹 Kích hoạt hệ thống input.<br>
&nbsp;&nbsp;&nbsp;🔹 Khởi động animation hoặc timer.

**start()**

Thời điểm gọi:<br>
&nbsp;&nbsp;&nbsp;🔹 Được gọi trước frame đầu tiên.<br>
&nbsp;&nbsp;&nbsp;🔹 Xảy ra sau onEnable().<br>
&nbsp;&nbsp;&nbsp;🔹 Chỉ gọi một lần duy nhất.

Đặc điểm kỹ thuật:<br>
&nbsp;&nbsp;&nbsp;🔹 Đảm bảo tất cả các Component trong Scene đã hoàn tất onLoad().<br>
&nbsp;&nbsp;&nbsp;🔹 Phù hợp cho các thiết lập phụ thuộc giữa các đối tượng.<br>
&nbsp;&nbsp;&nbsp;🔹 Không được gọi nếu Component bị vô hiệu hóa trước khi frame đầu tiên chạy.

Ứng dụng:<br>
&nbsp;&nbsp;&nbsp;🔹 Thiết lập tham chiếu đến các Node khác.<br>
&nbsp;&nbsp;&nbsp;🔹 Khởi tạo logic phụ thuộc giữa các Component.<br>
&nbsp;&nbsp;&nbsp;🔹 Chuẩn bị dữ liệu cho gameplay.

**update(dt)**

Thời điểm gọi:<br>
&nbsp;&nbsp;&nbsp;🔹 Được gọi ở mỗi khung hình (frame).<br>
&nbsp;&nbsp;&nbsp;🔹 Chỉ chạy khi Component đang được kích hoạt.<br>

Đặc điểm kỹ thuật:<br>
&nbsp;&nbsp;&nbsp;🔹 dt (deltaTime) là khoảng thời gian giữa hai frame.<br>
&nbsp;&nbsp;&nbsp;🔹 Tần suất phụ thuộc vào FPS của game.<br>
&nbsp;&nbsp;&nbsp;🔹 Là một phần của game loop.<br>

Ứng dụng:<br>
&nbsp;&nbsp;&nbsp;🔹 Di chuyển nhân vật.<br>
&nbsp;&nbsp;&nbsp;🔹 Xử lý AI và vật lý cơ bản.<br>
&nbsp;&nbsp;&nbsp;🔹 Cập nhật trạng thái theo thời gian.

**lateUpdate(dt)**

Thời điểm gọi: Được gọi sau khi tất cả các update() hoàn tất.

Đặc điểm kỹ thuật:<br>
&nbsp;&nbsp;&nbsp;🔹 Giúp đồng bộ hóa logic sau khi các đối tượng khác đã cập nhật.<br>
&nbsp;&nbsp;&nbsp;🔹 Đảm bảo dữ liệu cuối cùng trước khi render.<br>
&nbsp;&nbsp;&nbsp;🔹 Thích hợp cho các hệ thống phụ thuộc vào vị trí cuối cùng của đối tượng.

Ứng dụng:<br>
&nbsp;&nbsp;&nbsp;🔹 Camera theo nhân vật.<br>
&nbsp;&nbsp;&nbsp;🔹 Đồng bộ hiệu ứng và UI.<br>
&nbsp;&nbsp;&nbsp;🔹 Điều chỉnh vị trí sau khi physics hoặc animation chạy.

**onDisable()**

Thời điểm gọi:<br>
&nbsp;&nbsp;&nbsp;🔹 Được gọi khi Component hoặc Node bị vô hiệu hóa.<br>
&nbsp;&nbsp;&nbsp;🔹 Xảy ra khi:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔸 node.active = false<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔸 component.enabled = false

Đặc điểm kỹ thuật:<br>
&nbsp;&nbsp;&nbsp;🔹 Có thể được gọi nhiều lần.<br>
&nbsp;&nbsp;&nbsp;🔹 Được kích hoạt trước khi Component ngừng hoạt động.<br>
&nbsp;&nbsp;&nbsp;🔹 Không còn nhận update() sau khi bị disable.

Ứng dụng:<br>
&nbsp;&nbsp;&nbsp;🔹 Hủy đăng ký sự kiện.<br>
&nbsp;&nbsp;&nbsp;🔹 Dừng animation và timer.<br>
&nbsp;&nbsp;&nbsp;🔹 Tạm dừng logic của game.

**onDestroy()**

Thời điểm gọi:<br>
&nbsp;&nbsp;&nbsp;🔹 Được gọi khi Node hoặc Component bị hủy bằng destroy().<br>
&nbsp;&nbsp;&nbsp;🔹 Xảy ra sau onDisable().

Đặc điểm kỹ thuật:<br>
&nbsp;&nbsp;&nbsp;🔹 Chỉ gọi một lần.<br>
&nbsp;&nbsp;&nbsp;🔹 Được thực thi vào cuối frame.<br>
&nbsp;&nbsp;&nbsp;🔹 Dùng để dọn dẹp tài nguyên nhằm tránh rò rỉ bộ nhớ.

Ứng dụng:<br>
&nbsp;&nbsp;&nbsp;🔹 Giải phóng tài nguyên.<br>
&nbsp;&nbsp;&nbsp;🔹 Hủy timer, tween và sự kiện.<br>
&nbsp;&nbsp;&nbsp;🔹 Xóa tham chiếu đến các đối tượng khác.
