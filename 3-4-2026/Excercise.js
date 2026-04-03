let books = [];
let users = [];
let nextId = 1;

class Book {
    constructor(id, title, author, quantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

    lend() {
        if (this.quantity > 0)
            this.quantity--;
    }

    return() {
        this.quantity++;
    }
}

function SearchBook(title) {
    let result = [];

    for (let book of books) {
        if (book.title === title) {
            result.push(book);
        }
    }

    return result;
}

function AddBook(title, author, quantity) {
    if (!title || !author) {
        console.log("Nhap thieu thong tin, vui long nhap lai");
        return;
    }

    for (let book of books) {
        if (book.title === title && book.author === author) {
            book.quantity += quantity;
            return;
        }
    }

    const newBook = new Book(nextId, title, author, quantity);
    nextId++;
    books.push(newBook);
}

function DeleteBook(title) {
    if (!title) {
        console.log("Vui long nhap ten sach");
        return;
    }

    for (let i = 0; i < books.length; i++) {
        if (books[i].title === title) {
            books.splice(i, 1);
            console.log("Xoa thanh cong");
            return;
        }
    }

    console.log("Ten sach khong ton tai");
}

function AddUser(name, phoneNumber, address) {
    if (!name || !phoneNumber || !address) {
        console.log("Nhap thieu thong tin vui long nhap lai")
    }

    const newUser = {
        id: nextId,
        name: name,
        phoneNumber: phoneNumber,
        address: address 
    };

    users.push(newUser);
}

const readline = require("readline");
const r1 = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})

function ShowMenu() {
    console.clear();
    console.log("Chon tinh nang ma ban muon");
    console.log("1. Xem danh sach sach hien co");
    console.log("2. Them sach")
    console.log("3. Sua thong tin sach")
    console.log("4. Xoa thong tin sach")

    r1.question("Chon: ", HandleMenu)
}


function HandleMenu(choice) {
    switch(choice) {
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        default:
            ShowMenu();
    }
}
