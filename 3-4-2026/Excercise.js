let books = [];
let nextId = 1;

const readline = require("readline");
const r1 = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

const fs = require("fs");
const FILE_NAME = "books.json";

function LoadData() {
    if (fs.existsSync(FILE_NAME)) {
        const data = fs.readFileSync(FILE_NAME, "utf8");
        books = JSON.parse(data);

        if (books.length > 0) {
            nextId = Math.max(...books.map(b => b.id)) + 1;
        }
    }
}

function SaveData() {
    fs.writeFileSync(FILE_NAME, JSON.stringify(books, null, 2));
}

function ShowBooks() {
    console.log("Danh sách sách hiện có");

    if (books.length === 0) {
        console.log("Hiện không có sách nào");
    }
    else {
        books.forEach(b => {
            console.log(`ID: ${b.id}. ${b.title} - ${b.author}`);
        });
    }

    ShowMenu();
}

function AddBook() {
    r1.question("Nhập tên sách: ", (title) => {
        r1.question("Nhập tên tác giả: ", (author) => {
            const book = {
                id: nextId++,
                title,
                author
            };
            
            books.push(book);
            SaveData();
            console.log("Thêm thành công");
            ShowMenu();
        });
    });
}

function UpdateBook() {
    r1.question("Nhập ID sách bạn muốn sửa: ", (id) => {
        id = parseInt(id);

        const book = books.find(b => b.id === id);

        if (!book) {
            console.log("Sách bạn muốn sửa không tồn tại");
            return ShowMenu();
        }

        r1.question("Nhập tên sách mới: ", (title) => {
            r1.question("Nhập tên tác giả mới: ", (author) => {
                book.title = title;
                book.author = author;

                SaveData();
                console.log("Cập nhật thành công");
                ShowMenu();
            });
        });
    });
}

function DeleteBook(title) {
    r1.question("Nhập ID sách bạn muốn xóa: ", (id) => {
        id = parseInt(id);

        const index = books.findIndex(b => b.id === id);

        if (index === -1) {
            console.log("Sách bạn muốn xóa không tồn tại")
        }
        else {
            books.splice(index, 1);
            SaveData();
            console.log("Xóa thành công");
        }

        ShowMenu();
    });
}

function ShowMenu() {
    console.log("Chọn tính năng mà bạn muốn");
    console.log("1. Hiển thị danh sách sách hiện có");
    console.log("2. Thêm sách")
    console.log("3. Sửa thông tin sách")
    console.log("4. Xóa sách")
    console.log("0. Thoát")

    r1.question("Chọn: ", HandleMenu)
}

function HandleMenu(choice) {
    switch(choice) {
        case "1":
            ShowBooks();
            break;
        case "2":
            AddBook();
            break;
        case "3":
            UpdateBook();
            break;
        case "4":
            DeleteBook();
            break;
        case "0":
            console.log("Thoát thành công");
            r1.close();
            break
        default:
            console.log("Lựa chọn của bạn không hợp lệ");
            ShowMenu();
    }
}

LoadData();
ShowMenu();
