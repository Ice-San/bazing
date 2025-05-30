const storedData = JSON.parse(localStorage.getItem("books")) || [];
const booksContent = document.querySelector(".page-content");

// Create Categorys
storedData.forEach(category => {
    createCategory(category.categoria, category.livros);
});

function createCategory(categoryTitle, booksArray) {
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('trending-books');

    // Title first letter in UpperCase
    const categoryName = categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1);
    const title = document.createElement('h2');
    title.textContent = categoryName;
    categoryContainer.appendChild(title);

    // Books Container
    const booksList = document.createElement('div');
    booksList.classList.add('books-list');

    booksArray.forEach(book => {
        booksList.appendChild(createBook(categoryTitle, book));
    });

    categoryContainer.appendChild(booksList);
    booksContent.appendChild(categoryContainer);
}

function createBook(category, bookObj) {
    const bookBox = document.createElement('div');
    bookBox.classList.add('book-box');

    bookBox.setAttribute('data-book-name', bookObj.name);

    const book = document.createElement('div');
    book.classList.add('book');

    const bookContainer = document.createElement('div');
    bookContainer.style.backgroundImage = `url("../src/img/books/${category}/${bookObj.name}.jpg")`;
    bookContainer.classList.add('img-container');

    book.appendChild(bookContainer);

    const bookContent = document.createElement('div');
    bookContent.classList.add('book-content');

    const bookPrice = document.createElement('div');
    bookPrice.classList.add('book-price');

    const price = document.createElement('p');
    price.textContent = `EUR ${bookObj.price.toFixed(2)}`;

    const emptyPrice = document.createElement('p');

    bookPrice.appendChild(price);
    bookPrice.appendChild(emptyPrice);

    const bookSells = document.createElement('div');
    bookSells.classList.add('book-sells');

    const sells = document.createElement('p');
    sells.textContent = `${bookObj.sells} vendidos`;

    bookSells.appendChild(sells);

    const bookOptions = document.createElement('div');
    bookOptions.classList.add('book-options');

    const bookToCart = document.createElement('div');
    bookToCart.classList.add('book-to-cart');

    const addCart = document.createElement('div');
    addCart.classList.add('add-cart');

    const addCartContainer = document.createElement('div');
    addCartContainer.classList.add('add-cart-container', 'img-container');

    addCart.appendChild(addCartContainer);
    bookToCart.appendChild(addCart);

    const bookMore = document.createElement('div');
    bookMore.classList.add('book-more');

    const viewMore = document.createElement('p');
    viewMore.textContent = 'View More';

    bookMore.appendChild(viewMore);

    bookOptions.appendChild(bookToCart);
    bookOptions.appendChild(bookMore);

    bookContent.appendChild(bookPrice);
    bookContent.appendChild(bookSells);
    bookContent.appendChild(bookOptions);

    bookBox.appendChild(book);
    bookBox.appendChild(bookContent);

    return bookBox;
}