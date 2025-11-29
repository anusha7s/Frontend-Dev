
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) return false;
        this.isIssued = true;
        return true;
    }

    returnBook() {
        this.isIssued = false;
    }

    info() {
        return `${this.title} by ${this.author} [${this.isIssued ? "Issued" : "Available"}]`;
    }
}

const library = [
    new Book("The Alchemist", "Paulo Coelho", "9780062315007"),
    new Book("Atomic Habits", "James Clear", "9780735211292"),
    new Book("1984", "George Orwell", "9780451524935")
];

console.log("Available Books:");
library.filter(b => !b.isIssued).forEach(b => console.log("→", b.info()));

// Issue a book
const isbnToIssue = "9780735211292";
const book = library.find(b => b.isbn === isbnToIssue);
if (book && book.issueBook()) {
    console.log(`\n"${book.title}" issued successfully!`);
} else {
    console.log("\nBook not available or already issued.");
}