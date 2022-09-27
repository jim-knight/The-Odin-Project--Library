// Exercise: Write a constructor for making "Book" objects.
function Book(title, author, pages, haveRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = haveRead;

	this.info = () => {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead ? 'have read' : 'not read yet'}.`;
	};
}
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
