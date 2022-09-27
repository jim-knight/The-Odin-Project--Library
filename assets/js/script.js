let myLibrary = [
	{
		title: `The Hobbit`,
		author: `J.R.R. Tolkien`,
		pages: 295,
		haveRead: true,
	},
	{
		title: `A Game of Thrones`,
		author: `George R.R. Martin`,
		pages: 694,
		haveRead: true,
	},
	{
		title: `The Dark Tower`,
		author: `Stephen King`,
		pages: 224,
		haveRead: true,
	},
	{
		title: `Harry Potter and the Philosopher's Stone`,
		author: `J. K. Rowling`,
		pages: 223,
		haveRead: false,
	},
];
// Add a new book to the library
function addBookToLibrary(title, author, pages) {
	const newBook = new Book(title, author, pages);
	myLibrary.push(newBook);
	console.log(myLibrary);
}

// Book properties
function Book(title, author, pages, haveRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = haveRead;

	this.info = () => {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead ? 'have read' : 'not read yet'}.`;
	};
}

// Displays books on the front end
function displayLibrary() {
	myLibrary.forEach((book) => {
		return `
		${book.title}, ${book.author}
		`;
	});
}
displayLibrary();

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
console.log(myLibrary);
addBookToLibrary('Test title', 'Some guy', 666);
