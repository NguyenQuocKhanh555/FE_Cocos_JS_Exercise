## Lable là gì ?
Trong Cocos Creator, Label là một component dùng để hiển thị văn bản trong game hoặc ứng dụng.

Thường được được sử dụng rộng rãi trong các thành phần giao diện người dùng như: <br>
🔹 Điểm số (Score)<br>
🔹 Thời gian đếm ngược <br>
🔹 Hộp thoại và hướng dẫn <br>

## Cache Mode là gì ?
Cache Mode xác định cách Cocos xử lý và lưu trữ dữ liệu văn bản trước khi hiển thị lên màn hình, giúp kiểm soát cách văn bản được render và lưu trữ trong bộ nhớ.

Lợi ích của Cache Mode:<br>
🔹 Giảm số lượng Draw Calls <br>
🔹 Tăng hiệu năng render <br>
🔹 Tối ưu bộ nhớ GPU và CPU <br>
🔹 Cải thiện tốc độ hiển thị văn bản

## Các chế độ Cache Mode
**NONE - Không sử dụng cache**

Mô tả <br>
Ở chế độ này, văn bản được render trực tiếp mỗi khi hiển thị hoặc thay đổi. Không có dữ liệu nào được lưu trữ để tái sử dụng.

Đặc điểm <br>
🔹 Không chiếm thêm bộ nhớ cache. <br>
🔹 Phù hợp với văn bản thay đổi liên tục. <br>
🔹 Hiệu năng thấp hơn so với các chế độ khác khi render nhiều.

Ưu điểm <br>
🔹 Linh hoạt và chính xác. <br>
🔹 Không tiêu tốn bộ nhớ để lưu cache. <br>
🔹 Phù hợp với text động.

Nhược điểm <br>
🔹 Tăng số lượng Draw Calls. <br>
🔹 Giảm hiệu năng khi có nhiều Label.

**BITMAP - Cache dưới dạng ảnh bitmap**

Mô tả <br>
Ở chế độ này, toàn bộ nội dung của Label được render thành một hình ảnh (texture) và lưu vào bộ nhớ. Khi hiển thị lại, hệ thống chỉ cần vẽ lại texture đó.

Đặc điểm <br>
🔹 Tăng hiệu năng render đáng kể. <br>
🔹 Giảm Draw Calls.<br>
🔹 Không phù hợp với text thay đổi thường xuyên.

Ưu điểm <br>
🔹 Hiệu suất cao đối với văn bản tĩnh. <br>
🔹 Tối ưu GPU. <br>
🔹 Giảm tải CPU.

Nhược điểm <br>
🔹 Tốn bộ nhớ nếu có nhiều Label. <br>
🔹 Cần tạo lại texture khi nội dung thay đổi.

**CHAR - Cache từng ký tự**

Mô tả <br>
Chế độ này cache từng ký tự riêng lẻ vào một texture atlas. Khi hiển thị, các ký tự sẽ được ghép lại để tạo thành chuỗi văn bản.

Đặc điểm <br>
🔹 Tối ưu cho văn bản thay đổi thường xuyên. <br>
🔹 Giảm việc tạo texture mới. <br>
🔹 Phù hợp với các chuỗi số hoặc ký tự lặp lại.

Ưu điểm <br>
🔹 Hiệu năng cao với text động. <br>
🔹 Giảm chi phí render khi cập nhật nội dung. <br>
🔹 Tối ưu Draw Calls.

Nhược điểm <br>
🔹 Tốn bộ nhớ nếu sử dụng nhiều ký tự khác nhau. <br>
🔹 Không phù hợp với văn bản dài và đa dạng.

## Lưu ý khi sử dụng

🔹 Tránh lạm dụng BITMAP khi văn bản thay đổi liên tục vì sẽ gây tiêu tốn bộ nhớ và giảm hiệu năng.<br>
🔹 CHAR Mode có giới hạn số lượng ký tự, nên hạn chế sử dụng với văn bản dài hoặc đa ngôn ngữ. <br>
🔹 NONE Mode phù hợp cho nội dung động, nhưng không nên dùng quá nhiều Label cùng lúc. <br>
🔹 Nên kết hợp với Dynamic Atlas để tối ưu Draw Calls. <br> 
🔹 Sử dụng font hợp lý để tránh tràn bộ nhớ GPU.
