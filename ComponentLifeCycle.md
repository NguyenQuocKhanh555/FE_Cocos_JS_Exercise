## Component Life Cycle là gì ?
Component Life Cycle là tập hợp các phương thức được Cocos Creator tự động gọi theo thứ tự xác định trong suốt vòng đời của một component gắn trên một Node.

Một life-cycle bao gồm:
```text
onLoad → onEnable → start → update → lateUpdate → onDisable → onDestroy
```

## Chi tiết từng giai đoạn
**onLoad()**

Thời điểm gọi: <br>
🔹 Khi Node được tạo và Component được gắn vào. <br>
🔹 Chỉ gọi một lần trong vòng đời.

Đặc điểm kỹ thuật:<br>
🔹 Chạy trước onEnable() và start().<br>
🔹 Không phụ thuộc vào trạng thái active của Node khi scene được tải.<br>
🔹 Dùng để khởi tạo dữ liệu nội bộ.

Ứng dụng:<br>
🔹 Cache component để tối ưu hiệu năng.<br>
🔹 Khởi tạo biến và cấu hình.

**onEnable()**

Thời điểm gọi:<br>
🔹 Được gọi khi Component hoặc Node được kích hoạt.<br>
🔹 Xảy ra sau onLoad().<br>
🔹 Được gọi mỗi khi:<br>
    <pre>🔸 node.active = true</pre><br>
    <pre>🔸 component.enabled = true</pre>

Đặc điểm kỹ thuật:<br>
🔹 Có thể được gọi nhiều lần trong vòng đời.<br>
🔹 Không được gọi nếu Node bị vô hiệu hóa.<br>
🔹 Là nơi phù hợp để bắt đầu các hệ thống sự kiện hoặc logic runtime.

Ứng dụng:<br>
🔹 Đăng ký sự kiện.<br>
🔹 Kích hoạt hệ thống input.<br>
🔹 Khởi động animation hoặc timer.

**start()**

Thời điểm gọi:<br>
🔹 Được gọi trước frame đầu tiên.<br>
🔹 Xảy ra sau onEnable().<br>
🔹 Chỉ gọi một lần duy nhất.

Đặc điểm kỹ thuật:<br>
🔹 Đảm bảo tất cả các Component trong Scene đã hoàn tất onLoad().<br>
🔹 Phù hợp cho các thiết lập phụ thuộc giữa các đối tượng.<br>
🔹 Không được gọi nếu Component bị vô hiệu hóa trước khi frame đầu tiên chạy.

Ứng dụng:<br>
🔹 Thiết lập tham chiếu đến các Node khác.<br>
🔹 Khởi tạo logic phụ thuộc giữa các Component.<br>
🔹 Chuẩn bị dữ liệu cho gameplay.

**update(dt)**

Thời điểm gọi:<br>
🔹 Được gọi ở mỗi khung hình (frame).<br>
🔹 Chỉ chạy khi Component đang được kích hoạt.<br>

Đặc điểm kỹ thuật:
🔹 dt (deltaTime) là khoảng thời gian giữa hai frame.<br>
🔹 Tần suất phụ thuộc vào FPS của game.<br>
🔹 Là một phần của game loop.<br>

Ứng dụng:<br>
🔹 Di chuyển nhân vật.<br>
🔹 Xử lý AI và vật lý cơ bản.<br>
🔹 Cập nhật trạng thái theo thời gian.

**lateUpdate(dt)**

Thời điểm gọi: Được gọi sau khi tất cả các update() hoàn tất.

Đặc điểm kỹ thuật:<br>
🔹 Giúp đồng bộ hóa logic sau khi các đối tượng khác đã cập nhật.<br>
🔹 Đảm bảo dữ liệu cuối cùng trước khi render.<br>
🔹 Thích hợp cho các hệ thống phụ thuộc vào vị trí cuối cùng của đối tượng.

Ứng dụng:<br>
🔹 Camera theo nhân vật.<br>
🔹 Đồng bộ hiệu ứng và UI.<br>
🔹 Điều chỉnh vị trí sau khi physics hoặc animation chạy.

**onDisable()**

Thời điểm gọi:<br>
🔹 Được gọi khi Component hoặc Node bị vô hiệu hóa.<br>
🔹 Xảy ra khi:<br>
    <pre>🔸 node.active = false</pre><br>
    <pre>🔸 component.enabled = false</pre>

Đặc điểm kỹ thuật:<br>
🔹 Có thể được gọi nhiều lần.<br>
🔹 Được kích hoạt trước khi Component ngừng hoạt động.<br>
🔹 Không còn nhận update() sau khi bị disable.

Ứng dụng:<br>
🔹 Hủy đăng ký sự kiện.<br>
🔹 Dừng animation và timer.<br>
🔹 Tạm dừng logic của game.

**onDestroy()**

Thời điểm gọi:<br>
🔹 Được gọi khi Node hoặc Component bị hủy bằng destroy().<br>
🔹 Xảy ra sau onDisable().

Đặc điểm kỹ thuật:<br>
🔹 Chỉ gọi một lần.<br>
🔹 Được thực thi vào cuối frame.<br>
🔹 Dùng để dọn dẹp tài nguyên nhằm tránh rò rỉ bộ nhớ.

Ứng dụng:<br>
🔹 Giải phóng tài nguyên.<br>
🔹 Hủy timer, tween và sự kiện.<br>
🔹 Xóa tham chiếu đến các đối tượng khác.
