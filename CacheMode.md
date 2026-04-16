## Lable là gì ?
Trong Cocos Creator, Label là một component dùng để hiển thị văn bản trong game hoặc ứng dụng.

Thường được được sử dụng rộng rãi trong các thành phần giao diện người dùng như: <br>
&nbsp;&nbsp;&nbsp;- Điểm số (Score)<br>
&nbsp;&nbsp;&nbsp;- Thời gian đếm ngược <br>
&nbsp;&nbsp;&nbsp;- Hộp thoại và hướng dẫn <br>

## Cache Mode là gì ?
Cache Mode trong Cocos Creator là cơ chế tối ưu hóa hiển thị văn bản của component Label bằng cách lưu trữ dữ liệu render vào bộ nhớ đệm (cache). Thay vì phải tính toán và vẽ lại văn bản ở mỗi khung hình, engine sẽ tái sử dụng dữ liệu đã được xử lý trước đó.

Cache Mode giúp: <br>
&nbsp;&nbsp;&nbsp;- Giảm số lần xử lý lại văn bản.<br>
&nbsp;&nbsp;&nbsp;- Tăng hiệu suất hiển thị.<br>
&nbsp;&nbsp;&nbsp;- Tối ưu tài nguyên hệ thống.

Trong Cocos Creator, Label cung cấp ba chế độ cache chính:<br>
&nbsp;&nbsp;&nbsp;- NONE – Không sử dụng bộ nhớ đệm.<br>
&nbsp;&nbsp;&nbsp;- BITMAP – Lưu toàn bộ chuỗi văn bản thành hình ảnh.<br>
&nbsp;&nbsp;&nbsp;- CHAR – Lưu từng ký tự để tái sử dụng.

## Các chế độ Cache Mode
**NONE - Không sử dụng cache**

NONE là chế độ không sử dụng bộ nhớ đệm. Trong chế độ này, văn bản của Label được render trực tiếp mỗi khi có sự thay đổi. Engine phải thực hiện lại toàn bộ quá trình tính toán bố cục, raster hóa và hiển thị mà không tái sử dụng dữ liệu đã xử lý trước đó.

Đặc điểm: <br>
&nbsp;&nbsp;&nbsp;- Không sử dụng cơ chế cache.<br>
&nbsp;&nbsp;&nbsp;- Mỗi lần thay đổi nội dung đều tạo lại bitmap.<br>
&nbsp;&nbsp;&nbsp;- Không tái sử dụng texture.<br>
&nbsp;&nbsp;&nbsp;- Không tối ưu cho Dynamic Atlas.<br>
&nbsp;&nbsp;&nbsp;- Tăng số lượng Draw Calls.<br>
&nbsp;&nbsp;&nbsp;- Tốn tài nguyên CPU và GPU khi cập nhật thường xuyên.<br>
&nbsp;&nbsp;&nbsp;- Phù hợp với nội dung thay đổi liên tục.<br>
&nbsp;&nbsp;&nbsp;- Không bị giới hạn bởi Character Atlas.

Trường hợp sử dụng: <br>
&nbsp;&nbsp;&nbsp;- Chat trong game.<br>
&nbsp;&nbsp;&nbsp;- Văn bản debug.<br>
&nbsp;&nbsp;&nbsp;- Nội dung thay đổi liên tục và không lặp lại.

**BITMAP - Cache dưới dạng ảnh bitmap**

BITMAP là chế độ chuyển toàn bộ nội dung của Label thành một hình ảnh (bitmap texture). Texture này có thể tham gia vào Dynamic Atlas để giảm Draw Calls và tối ưu hiệu suất hiển thị.

Đặc điểm: <br>
&nbsp;&nbsp;&nbsp;- Toàn bộ văn bản được raster hóa thành một texture duy nhất.<br>
&nbsp;&nbsp;&nbsp;- Mỗi Label tạo ra một bitmap riêng, ngay cả khi nội dung giống nhau.<br>
&nbsp;&nbsp;&nbsp;- Có khả năng tham gia vào Dynamic Atlas.<br>
&nbsp;&nbsp;&nbsp;- Cho phép gộp Draw Calls với Sprite và Label khác.<br>
&nbsp;&nbsp;&nbsp;- Texture sẽ được tạo lại khi nội dung thay đổi.<br>
&nbsp;&nbsp;&nbsp;- Tiêu tốn bộ nhớ GPU nhiều hơn so với NONE.<br>
&nbsp;&nbsp;&nbsp;- Phù hợp với văn bản ít thay đổi.<br>
&nbsp;&nbsp;&nbsp;- Không tái sử dụng bộ nhớ giữa các Label giống nhau.<br>
&nbsp;&nbsp;&nbsp;- Phụ thuộc vào dung lượng của Dynamic Atlas.

Trường hợp sử dụng: <br>
&nbsp;&nbsp;&nbsp;- Tiêu đề game.<br>
&nbsp;&nbsp;&nbsp;- Menu và nút bấm.<br>
&nbsp;&nbsp;&nbsp;- Hướng dẫn trong game.<br>
&nbsp;&nbsp;&nbsp;- Văn bản tĩnh trong giao diện UI.

**CHAR - Cache từng ký tự**

CHAR là chế độ cache từng ký tự. Mỗi glyph được lưu trữ trong một Character Atlas dùng chung. Khi hiển thị văn bản, engine sẽ ghép các ký tự đã cache để tạo thành chuỗi hoàn chỉnh.

Đặc điểm: <br>
&nbsp;&nbsp;&nbsp;- Cache từng ký tự thay vì toàn bộ chuỗi.<br>
&nbsp;&nbsp;&nbsp;- Sử dụng Character Atlas dùng chung.<br>
&nbsp;&nbsp;&nbsp;- Chỉ raster hóa khi xuất hiện ký tự mới.<br>
&nbsp;&nbsp;&nbsp;- Tái sử dụng glyph giữa nhiều Label.<br>
&nbsp;&nbsp;&nbsp;- Giảm số lần tạo texture và tải lên GPU.<br>
&nbsp;&nbsp;&nbsp;- Hỗ trợ batching hiệu quả, giảm Draw Calls.<br>
&nbsp;&nbsp;&nbsp;- Phù hợp với văn bản động và lặp lại.<br>
&nbsp;&nbsp;&nbsp;- Bị giới hạn bởi kích thước của Character Atlas.<br>
&nbsp;&nbsp;&nbsp;- Phụ thuộc vào font, kích thước và màu sắc của ký tự.<br>
&nbsp;&nbsp;&nbsp;- Không phù hợp với văn bản dài hoặc đa ngôn ngữ phức tạp.

## Lưu ý khi sử dụng

&nbsp;&nbsp;&nbsp;- Tránh lạm dụng BITMAP khi văn bản thay đổi liên tục vì sẽ gây tiêu tốn bộ nhớ và giảm hiệu năng.<br>
&nbsp;&nbsp;&nbsp;- CHAR Mode có giới hạn số lượng ký tự, nên hạn chế sử dụng với văn bản dài hoặc đa ngôn ngữ. <br>
&nbsp;&nbsp;&nbsp;- NONE Mode phù hợp cho nội dung động, nhưng không nên dùng quá nhiều Label cùng lúc. <br>
&nbsp;&nbsp;&nbsp;- Nên kết hợp với Dynamic Atlas để tối ưu Draw Calls. <br> 
&nbsp;&nbsp;&nbsp;- Sử dụng font hợp lý để tránh tràn bộ nhớ GPU.
