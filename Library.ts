import {Book} from './Book';
import {User} from './User';

export class Library {
    private readonly books: Book[] = [];
    private readonly users: User[] = [];
    private nextBookId = 1;
    private nextUserId = 1;

    getBooks(): Book[] {
        return this.books;
    }

    getUsers(): User[] {
        return this.users;
    }

    setNextBookId(): void {
        if (this.books.length === 0) {
            this.nextBookId = 1;
            return;
        }

        const maxId = Math.max(...this.books.map(b => b.id));
        this.nextBookId = maxId + 1;
    }

    setNextUserId(): void {
        if (this.users.length === 0) {
            this.nextUserId = 1;
            return;
        }

        const maxId = Math.max(...this.users.map(u => u.id));
        this.nextUserId = maxId + 1;
    }

    addBook(title: string, author: string, quantity: number): void {
        const book = new Book(this.nextBookId++, title, author, quantity);
        this.books.push(book);
        console.log(`Added book: ${book.title} by ${book.author}`);
    }

    addUser(name: string, email: string, borrowedBooks: number[] = []): void {
        const user = new User(this.nextUserId++, name, email, borrowedBooks);
        this.users.push(user);
        console.log(`Added user: ${user.name} with email: ${user.email}`);
    }

    displayBooks(): void {
        console.log('Library Books:');
        this.books.forEach(book => {
            book.displayInfo();
        });
    }

    displayUsers(): void {
        console.log('Library Users:');
        this.users.forEach(user => {
            user.displayInfo();
        });
    }

    findBookById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    findUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    borrowBook(userId: number, bookId: number): void {
        const user = this.findUserById(userId);
        const book = this.findBookById(bookId);

        if (!user) {
            console.log(`User not found.`);
            return;
        }

        if (!book) {
            console.log(`Book not found in the library.`);
            return;
        }

        book.borrow();
        user.borrowBook(bookId);
    }

    returnBook(userId: number, bookId: number): void {
        const user = this.findUserById(userId);
        const book = this.findBookById(bookId);

        if (!user) {
            console.log(`User not found.`);
            return;
        }

        if (!book) {
            console.log(`Book not found in the library.`);
            return;
        }

        book.return();
        user.returnBook(bookId);
    }

    removeBook(id: number): void {
        const index = this.books.findIndex(book => book.id === id);
        if (index > -1) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log(`Removed book: ${removedBook?.title} by ${removedBook?.author}`);
        } else {
            console.log(`Book not found in the library.`);
        }
    }
}