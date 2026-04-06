export class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public borrowedBooks: number[] = []
    ) {}

    displayInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Borrowed Books: ${this.borrowedBooks}`);
    }

    borrowBook(bookId: number): void {
        if (this.borrowedBooks.includes(bookId)) {
            console.log(`You have already borrowed book with ID: ${bookId}`);
        } else {
            this.borrowedBooks.push(bookId);
            console.log(`You have borrowed book with ID: ${bookId}`);
        }
    }

    returnBook(bookId: number): void {
        const index = this.borrowedBooks.indexOf(bookId);
        if (index > -1) {
            this.borrowedBooks.splice(index, 1);
            console.log(`You have returned book with ID: ${bookId}`);
        } else {
            console.log(`You did not borrow book with ID: ${bookId}`);
        }
    }
}