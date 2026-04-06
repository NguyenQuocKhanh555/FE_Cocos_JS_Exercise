import * as readline from 'node:readline';
import * as fs from 'node:fs';
import { Library } from './Library';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const library = new Library();
const BOOK_DATA_FILE = 'Book_data.json';
const USER_DATA_FILE = 'User_data.json';

function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

function loadData() {
    if (fs.existsSync(BOOK_DATA_FILE)) {
        const bookData = fs.readFileSync(BOOK_DATA_FILE, 'utf-8');
        const parsedData = JSON.parse(bookData);
        parsedData.books.forEach((book: any) => {
            library.addBook(book.title, book.author, book.quantity);
        });
        library.setNextBookId();
    }

    if (fs.existsSync(USER_DATA_FILE)) {
        const userData = fs.readFileSync(USER_DATA_FILE, 'utf-8');
        const parsedData = JSON.parse(userData);
        parsedData.users.forEach((user: any) => {
            library.addUser(user.name, user.email, user.borrowedBooks);
        });
        library.setNextUserId();
    }
}

function saveData() {
    const bookData = {
        books: library.getBooks()
    }

    const userData = {
        users: library.getUsers()
    }

    fs.writeFileSync(BOOK_DATA_FILE, JSON.stringify(bookData, null, 2), 'utf-8');
    fs.writeFileSync(USER_DATA_FILE, JSON.stringify(userData, null, 2), 'utf-8');
}

async function menu() {
    library.displayUsers();
    while (true) {
        console.log('\nLibrary Management System');
        console.log('1. Add Book');
        console.log('2. Add User');
        console.log('3. Display Books');
        console.log('4. Borrow Book');
        console.log('5. Return Book');
        console.log('6. Remove Book');
        console.log('7. Exit');

        const choice = await askQuestion('Enter your choice: ');

        switch (choice) {
            case '1': {
                const title = await askQuestion('Enter book title: ');
                const author = await askQuestion('Enter book author: ');
                const quantityStr = await askQuestion('Enter book quantity: ');
                const quantity = Number.parseInt(quantityStr);
                library.addBook(title, author, quantity);
                break;
            }
            case '2': {
                const name = await askQuestion('Enter user name: ');
                const email = await askQuestion('Enter user email: ');
                library.addUser(name, email);
                break;
            }
            case '3':
                library.displayBooks();
                break;
            case '4': {
                const userIdStr = await askQuestion('Enter user ID: ');
                const bookIdStr = await askQuestion('Enter book ID: ');
                library.borrowBook(Number.parseInt(userIdStr), Number.parseInt(bookIdStr));
                break;
            }
            case '5': {
                const returnUserIdStr = await askQuestion('Enter user ID: ');
                const returnBookIdStr = await askQuestion('Enter book ID: ');
                library.returnBook(Number.parseInt(returnUserIdStr), Number.parseInt(returnBookIdStr));
                break;
            }    
            case '6': {
                const removeBookIdStr = await askQuestion('Enter book ID to remove: ');
                library.removeBook(Number.parseInt(removeBookIdStr));
                break;
            }
            case '7':
                saveData();
                console.log('Exiting the system. Goodbye!');
                rl.close();
                return;
            default:
                console.log('Invalid choice. Please try again.');
        }
    }
}

async function main() {
    loadData();
    await menu();
}

main();