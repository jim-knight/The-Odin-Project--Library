const booksList = document.getElementById('books');

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
		const newCard = document.createElement('li');
		newCard.classList.add('card', 'w-full', 'bg-base-100', 'shadow-lg', 'text-base', 'font-normal', 'text-left');
		newCard.innerHTML = `
			
			<div class="card-body">
				<h2 class="card-title">${book.title}</h2>
				<p>${book.author}</p>
				<div class="card-actions justify-start">
					<div class="badge badge-neutral badge-sm">${book.pages} pages</div>
					${book.haveRead ? '<div class="badge badge-primary badge-sm">Read</div>' : '<div class="badge badge-secondary badge-sm">Not read</div>'}

				</div>
			</div>
		`;
		booksList.appendChild(newCard);
	});
}
displayLibrary();
