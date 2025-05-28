// Trending Books

const trendingBooks = [
    "less.jpg",
    "stop-overthining.jpg",
    "steve-jobs.jpg",
    "dirty-job.jpg",
    "gene-egoista.jpg"
]

const trendingBooksFolders = [
    "comedy",
    "psychology",
    "technology",
    "comedy",
    "biology"
]

// Books Available

const booksAvailable = [
    [
        "a-falsa-medida-do-homem.jpg",
        "comporte-se.jpg",
        "determined.jpg",
        "gene-egoista.jpg",
        "the-gut-brain-paradox.jpg"
    ],
    [
        "cade-voce-bernadette.jpg",
        "dirty-job.jpg",
        "is-this-anything.jpg",
        "less.jpg",
        "lucky-jim.jpg"
    ],
    [
        "cold-blood.jpg",
        "good-girl-bad-girl.jpg",
        "murdle.jpg",
        "the-house-maid.jpg"
    ],
    [
        "america.jpg",
        "snafu.jpg"
    ],
    [
       "the-shining.jpg" 
    ],
    [
        "fantastic-four.jpg",
        "miles-morales.jpg",
        "secret-wars.jpg",
        "spider-man.jpg"
    ],
    [
        "dragon-ball.jpg",
        "my-hero-academia.jpg",
        "naruto.jpg"
    ],
    [
        "read-people-like-a-book.jpg",
        "stop-overthining.jpg"
    ],
    [
        "how-to-end-a-love-story.jpg",
        "mr-wrong-number.jpg"
    ],
    [
        "metal-storm.jpg"
    ],
    [
        "clean-code.jpg",
        "design-patterns.jpg",
        "steve-jobs.jpg"
    ],
    [
        "the-resurrectionist.jpg"
    ]
]

// Categories Available

const categoriesAvailable = [
        'biology',
        'comedy',
        'criminal',
        'history',
        'horror',
        'hq',
        'manga',
        'psychology',
        'romance',
        'sci-fi',
        'technology',
        'terror'
];

// Main Container
const booksContent = document.querySelector(".page-content");

createCategory("Trending Books", trendingBooks);

for(let i = 0; i < categoriesAvailable.length; i++) {
    createCategory(categoriesAvailable[i]);
}

function createCategory(categoryTitle, booksArray) {
    // Category Container
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('trending-books');

    // Title
    const categoryName = categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1);
    const title = document.createElement('h2');
    title.textContent = categoryName;
    categoryContainer.appendChild(title);

    // Books Lists
    const booksList = document.createElement('div');
    booksList.classList.add('books-list');

    if(categoryTitle === "Trending Books") {
        for(let i = 0; i < booksArray.length; i++) {
            booksList.appendChild(createBook(trendingBooksFolders[i], trendingBooks[i]));
        }

        categoryContainer.appendChild(booksList);
        booksContent.appendChild(categoryContainer);

        return;
    }

    // Create 5 Books
    const categoryArrayIndex = categoriesAvailable.indexOf(categoryTitle);
    const booksLength = booksAvailable[categoryArrayIndex].length;

    for(let i = 0; i < booksLength; i++) {
        booksList.appendChild(createBook(categoryTitle, booksAvailable[categoryArrayIndex][i]));
    }

    categoryContainer.appendChild(booksList);
    booksContent.appendChild(categoryContainer);
}

// Function to Create an Book

function createBook(category, bookName) {
    const bookBox = document.createElement('div');
    bookBox.classList.add('book-box');

    const bookNameWithoutJpg = bookName.replace(/\.jpg$/, "");
    bookBox.setAttribute('data-book-name', bookNameWithoutJpg);

    const book = document.createElement('div');
    book.classList.add('book');

    const bookContainer = document.createElement('div');
    bookContainer.style.backgroundImage = `url("../src/img/books/${category}/${bookName}")`;
    bookContainer.classList.add('img-container');

    book.appendChild(bookContainer);

    const bookContent = document.createElement('div');
    bookContent.classList.add('book-content');

    const bookPrice = document.createElement('div');
    bookPrice.classList.add('book-price');

    const price = document.createElement('p');
    price.textContent = 'EUR 10.99';

    const emptyPrice = document.createElement('p');

    bookPrice.appendChild(price);
    bookPrice.appendChild(emptyPrice);

    const bookSells = document.createElement('div');
    bookSells.classList.add('book-sells');

    const sells = document.createElement('p');
    sells.textContent = '100 vendidos';

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