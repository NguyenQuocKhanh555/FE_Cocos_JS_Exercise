## Lable là gì ?
Trong Cocos Creator, Label là một component dùng để hiển thị văn bản trong game hoặc ứng dụng.

Thường được được sử dụng rộng rãi trong các thành phần giao diện người dùng như: <br>
&nbsp;&nbsp;&nbsp;🔹 Điểm số (Score)<br>
&nbsp;&nbsp;&nbsp;🔹 Thời gian đếm ngược <br>
&nbsp;&nbsp;&nbsp;🔹 Hộp thoại và hướng dẫn <br>

## Cache Mode là gì ?
Cache Mode xác định cách Cocos xử lý và lưu trữ dữ liệu văn bản trước khi hiển thị lên màn hình, giúp kiểm soát cách văn bản được render và lưu trữ trong bộ nhớ.

Lợi ích của Cache Mode:<br>
&nbsp;&nbsp;&nbsp;🔹 Giảm số lượng Draw Calls <br>
&nbsp;&nbsp;&nbsp;🔹 Tăng hiệu năng render <br>
&nbsp;&nbsp;&nbsp;🔹 Tối ưu bộ nhớ GPU và CPU <br>
&nbsp;&nbsp;&nbsp;🔹 Cải thiện tốc độ hiển thị văn bản

## Các chế độ Cache Mode
**NONE - Không sử dụng cache**

Mô tả <br>
Ở chế độ này, văn bản được render trực tiếp mỗi khi hiển thị hoặc thay đổi. Không có dữ liệu nào được lưu trữ để tái sử dụng.

Đặc điểm <br>
&nbsp;&nbsp;&nbsp;🔹 Không chiếm thêm bộ nhớ cache. <br>
&nbsp;&nbsp;&nbsp;🔹 Phù hợp với văn bản thay đổi liên tục. <br>
&nbsp;&nbsp;&nbsp;🔹 Hiệu năng thấp hơn so với các chế độ khác khi render nhiều.

Ưu điểm <br>
&nbsp;&nbsp;&nbsp;🔹 Linh hoạt và chính xác. <br>
&nbsp;&nbsp;&nbsp;🔹 Không tiêu tốn bộ nhớ để lưu cache. <br>
&nbsp;&nbsp;&nbsp;🔹 Phù hợp với text động.

Nhược điểm <br>
&nbsp;&nbsp;&nbsp;🔹 Tăng số lượng Draw Calls. <br>
&nbsp;&nbsp;&nbsp;🔹 Giảm hiệu năng khi có nhiều Label.

**BITMAP - Cache dưới dạng ảnh bitmap**

Mô tả <br>
Ở chế độ này, toàn bộ nội dung của Label được render thành một hình ảnh (texture) và lưu vào bộ nhớ. Khi hiển thị lại, hệ thống chỉ cần vẽ lại texture đó.

Đặc điểm <br>
&nbsp;&nbsp;&nbsp;🔹 Tăng hiệu năng render đáng kể. <br>
&nbsp;&nbsp;&nbsp;🔹 Giảm Draw Calls.<br>
&nbsp;&nbsp;&nbsp;🔹 Không phù hợp với text thay đổi thường xuyên.

Ưu điểm <br>
&nbsp;&nbsp;&nbsp;🔹 Hiệu suất cao đối với văn bản tĩnh. <br>
&nbsp;&nbsp;&nbsp;🔹 Tối ưu GPU. <br>
&nbsp;&nbsp;&nbsp;🔹 Giảm tải CPU.

Nhược điểm <br>
&nbsp;&nbsp;&nbsp;🔹 Tốn bộ nhớ nếu có nhiều Label. <br>
&nbsp;&nbsp;&nbsp;🔹 Cần tạo lại texture khi nội dung thay đổi.

**CHAR - Cache từng ký tự**

Mô tả <br>
Chế độ này cache từng ký tự riêng lẻ vào một texture atlas. Khi hiển thị, các ký tự sẽ được ghép lại để tạo thành chuỗi văn bản.

Đặc điểm <br>
&nbsp;&nbsp;&nbsp;🔹 Tối ưu cho văn bản thay đổi thường xuyên. <br>
&nbsp;&nbsp;&nbsp;🔹 Giảm việc tạo texture mới. <br>
&nbsp;&nbsp;&nbsp;🔹 Phù hợp với các chuỗi số hoặc ký tự lặp lại.

Ưu điểm <br>
&nbsp;&nbsp;&nbsp;🔹 Hiệu năng cao với text động. <br>
&nbsp;&nbsp;&nbsp;🔹 Giảm chi phí render khi cập nhật nội dung. <br>
&nbsp;&nbsp;&nbsp;🔹 Tối ưu Draw Calls.

Nhược điểm <br>
&nbsp;&nbsp;&nbsp;🔹 Tốn bộ nhớ nếu sử dụng nhiều ký tự khác nhau. <br>
&nbsp;&nbsp;&nbsp;🔹 Không phù hợp với văn bản dài và đa dạng.

## Lưu ý khi sử dụng

&nbsp;&nbsp;&nbsp;🔹 Tránh lạm dụng BITMAP khi văn bản thay đổi liên tục vì sẽ gây tiêu tốn bộ nhớ và giảm hiệu năng.<br>
&nbsp;&nbsp;&nbsp;🔹 CHAR Mode có giới hạn số lượng ký tự, nên hạn chế sử dụng với văn bản dài hoặc đa ngôn ngữ. <br>
&nbsp;&nbsp;&nbsp;🔹 NONE Mode phù hợp cho nội dung động, nhưng không nên dùng quá nhiều Label cùng lúc. <br>
&nbsp;&nbsp;&nbsp;🔹 Nên kết hợp với Dynamic Atlas để tối ưu Draw Calls. <br> 
&nbsp;&nbsp;&nbsp;🔹 Sử dụng font hợp lý để tránh tràn bộ nhớ GPU.
