const booksList = document.getElementById('books');

// Form
const modalTrigger = document.getElementById('modal-newBook');
const deleteTriggers = document.querySelectorAll('.bookDelete');

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
let Book = function (title, author, pages, haveRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = haveRead;
};

// Add a new book to the library
let addBookToLibrary = function () {
	let title = formTitle.value;
	let author = formAuthor.value;
	let pages = formPages.value;
	let readStatus = formReadStatus.checked ? true : false;

	const newBook = new Book(title, author, pages, readStatus);
	myLibrary.push(newBook);

	// Hide modal and reset the form
	modalTrigger.checked = false;
	form.reset();
	refreshLibrary();
};

// Refresh library
let refreshLibrary = function () {
	booksList.innerHTML = '';
	displayLibrary();
};

// Delete book
function deleteBook(e) {
	curIndex = e.path[2].attributes['data-id'].value;
	// console.log(e);
	console.log('Current index:', curIndex);
}

// Clear form
let clearForm = function () {
	formTitle.value = '';
	formAuthor.value = '';
	formPages.value = '';
	formReadStatus.checked ? (formReadStatus.value = '') : (formReadStatus.value = '');
};

// Change read status
let changeReadStatus = function (Book) {
	console.log(Book.haveRead);
};

// Displays books on the front end
let displayLibrary = function () {
	myLibrary.forEach((book, i) => {
		const newCard = document.createElement('li');
		newCard.classList.add('card', 'w-full', 'bg-base-100', 'shadow-lg', 'text-base', 'font-normal', 'text-left');
		newCard.innerHTML = `
			<div class="card-body pt-10 pb-6">
				<label for="book-delete" class="btn btn-xs btn-circle absolute right-2 top-2 hover:bg-primary bookDelete">✕</label>
				<h2 class="card-title">${book.title}</h2>
				<p>${book.author}</p>

				<button class="btn gap-2 justify-start cursor-default mt-4 no-animation">
				${book.pages} pages
				${book.haveRead ? '<div class="badge badge-primary badge-md cursor-pointer readStatus">Read</div>' : '<div class="badge badge-secondary badge-md cursor-pointer readStatus">Not read</div>'}
				</button>
			</div>
		`;

		const deleteBTN = newCard.querySelector('.bookDelete');
		deleteBTN.addEventListener('click', () => {
			myLibrary.splice(i, 1);
			refreshLibrary();
		});

		let readStatus = myLibrary[i].haveRead;
		const readBTN = newCard.querySelector('.readStatus');
		readBTN.addEventListener('click', () => {
			if (readStatus) {
				readStatus = false;
				readBTN.classList.remove('badge-primary');
				readBTN.classList.add('badge-secondary');
				readBTN.textContent = 'Not read';
			} else {
				readStatus = true;
				readBTN.classList.add('badge-primary');
				readBTN.classList.remove('badge-secondary');
				readBTN.textContent = 'Read';
			}
		});

		newCard.dataset.id = i;
		booksList.appendChild(newCard);
	});
};

// Event listeners
formSubmit.addEventListener('click', addBookToLibrary);

window.onload = displayLibrary();
