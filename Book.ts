export class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public quantity: number,
        public status: boolean = true
    ) {}

    displayInfo(): void {
        console.log(`ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Quantity: ${this.quantity}`);
    }

    borrow(): void {
        if (this.quantity > 0) {
            this.quantity--;
            this.status = this.quantity > 0;
            console.log(`You have borrowed: ${this.title}`);
        } else {
            console.log(`Sorry, ${this.title} is currently unavailable.`);
        }
    }

    return(): void {
        this.quantity++;
        this.status = true;
        console.log(`You have returned: ${this.title}`);
    }
}