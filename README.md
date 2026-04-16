## Lable là gì ?
Trong Cocos Creator, Label là một component dùng để hiển thị văn bản trong game hoặc ứng dụng. Nó được sử dụng rộng rãi trong các thành phần giao diện người dùng như:

Thường được được sử dụng rộng rãi trong các thành phần giao diện người dùng như:
🔹 Điểm số (Score)
🔹 Thời gian đếm ngược
🔹 Hộp thoại và hướng dẫn

## Cache Mode là gì ?
Cache Mode xác định cách Cocos xử lý và lưu trữ dữ liệu văn bản trước khi hiển thị lên màn hình, giúp kiểm soát cách văn bản được render và lưu trữ trong bộ nhớ.

Lợi ích của Cache Mode:
🔹 Giảm số lượng Draw Calls
🔹 Tăng hiệu năng render
🔹 Tối ưu bộ nhớ GPU và CPU
🔹 Cải thiện tốc độ hiển thị văn bản

## Các chế độ Cache Mode
**NONE - Không sử dụng cache**

Mô tả
Ở chế độ này, văn bản được render trực tiếp mỗi khi hiển thị hoặc thay đổi. Không có dữ liệu nào được lưu trữ để tái sử dụng.

Đặc điểm
🔹 Không chiếm thêm bộ nhớ cache.
🔹 Phù hợp với văn bản thay đổi liên tục.
🔹 Hiệu năng thấp hơn so với các chế độ khác khi render nhiều.

Ưu điểm
🔹 Linh hoạt và chính xác.
🔹 Không tiêu tốn bộ nhớ để lưu cache.
🔹 Phù hợp với text động.

Nhược điểm
🔹 Tăng số lượng Draw Calls.
🔹 Giảm hiệu năng khi có nhiều Label.

**BITMAP - Cache dưới dạng ảnh bitmap**

Mô tả
Ở chế độ này, toàn bộ nội dung của Label được render thành một hình ảnh (texture) và lưu vào bộ nhớ. Khi hiển thị lại, hệ thống chỉ cần vẽ lại texture đó.

Đặc điểm
🔹 Tăng hiệu năng render đáng kể.
🔹 Giảm Draw Calls.
🔹 Không phù hợp với text thay đổi thường xuyên.

Ưu điểm
🔹 Hiệu suất cao đối với văn bản tĩnh.
🔹 Tối ưu GPU.
🔹 Giảm tải CPU.

Nhược điểm
🔹 Tốn bộ nhớ nếu có nhiều Label.
🔹 Cần tạo lại texture khi nội dung thay đổi.

**CHAR - Cache từng ký tự**

Mô tả
Chế độ này cache từng ký tự riêng lẻ vào một texture atlas. Khi hiển thị, các ký tự sẽ được ghép lại để tạo thành chuỗi văn bản.

Đặc điểm
🔹 Tối ưu cho văn bản thay đổi thường xuyên.
🔹 Giảm việc tạo texture mới.
🔹 Phù hợp với các chuỗi số hoặc ký tự lặp lại.

Ưu điểm
🔹 Hiệu năng cao với text động.
🔹 Giảm chi phí render khi cập nhật nội dung.
🔹 Tối ưu Draw Calls.

Nhược điểm
🔹 Tốn bộ nhớ nếu sử dụng nhiều ký tự khác nhau.
🔹 Không phù hợp với văn bản dài và đa dạng.

## Lưu ý khi sử dụng
🔹 Tránh lạm dụng BITMAP khi văn bản thay đổi liên tục vì sẽ gây tiêu tốn bộ nhớ và giảm hiệu năng.
🔹 CHAR Mode có giới hạn số lượng ký tự, nên hạn chế sử dụng với văn bản dài hoặc đa ngôn ngữ.
🔹 NONE Mode phù hợp cho nội dung động, nhưng không nên dùng quá nhiều Label cùng lúc.
🔹 Nên kết hợp với Dynamic Atlas để tối ưu Draw Calls.
🔹 Sử dụng font hợp lý để tránh tràn bộ nhớ GPU.
