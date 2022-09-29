const booksList = document.getElementById('books');

// Form
const modalTrigger = document.getElementById('modal-newBook');
const form = document.getElementById('form-newBook');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const formPages = document.getElementById('pages');
const formReadStatus = document.getElementById('readStatus');
const formSubmit = document.getElementById('addBook');

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

// Add a new book to the library
function addBookToLibrary() {
	let title = formTitle.value;
	let author = formAuthor.value;
	let pages = formPages.value;
	let readStatus = formReadStatus.checked ? true : false;

	const newBook = new Book(title, author, pages, readStatus);
	myLibrary.push(newBook);
	modalTrigger.checked = false;
	form.reset();
	booksList.innerHTML = '';
	displayLibrary();
}

// Clear form
function clearForm() {
	formTitle.value = '';
	formAuthor.value = '';
	formPages.value = '';
	formReadStatus.checked ? (formReadStatus.value = '') : (formReadStatus.value = '');
}

// Displays books on the front end
function displayLibrary() {
	myLibrary.forEach((book, i) => {
		const newCard = document.createElement('li');
		newCard.classList.add('card', 'w-full', 'bg-base-100', 'shadow-lg', 'text-base', 'font-normal', 'text-left');
		newCard.innerHTML = `
			<div class="card-body">
				<label for="book-delete" class="btn btn-xs btn-circle absolute right-2 top-2 hover:bg-primary">✕</label>
				<h2 class="card-title">${book.title}</h2>
				<p>${book.author}</p>

				<button class="btn gap-2 justify-start cursor-default">
				${book.pages} pages
				${book.haveRead ? '<div class="badge badge-primary badge-md cursor-pointer">Read</div>' : '<div class="badge badge-secondary badge-md cursor-pointer">Not read</div>'}
				</button>
			</div>
		`;
		newCard.dataset.id = i;
		booksList.appendChild(newCard);
	});
}
displayLibrary();

// Event listeners
formSubmit.addEventListener('click', addBookToLibrary);
