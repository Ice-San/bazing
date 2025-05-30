function getBookFromStorage(bookName) {
    const allCategories = JSON.parse(localStorage.getItem("books")) || [];

    for (const category of allCategories) {
        const book = category.livros.find(livro => livro.name === bookName);
        if (book) return { ...book, categoria: category.categoria };
    }

    return null;
}

document.addEventListener("click", (e) => {
    const infoTarget = e.target.closest(".book-more");
    if (!infoTarget) return;

    const bookBox = infoTarget.closest(".book-box");
    const bookName = bookBox?.getAttribute("data-book-name");

    if (!bookName) return;

    const foundBook = getBookFromStorage(bookName);
    if (!foundBook) return;

    localStorage.setItem("bookInfo", JSON.stringify(foundBook));
    window.location.href = "../book";
});
