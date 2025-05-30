function getBookFromStorage(bookName) {
    const allCategories = JSON.parse(localStorage.getItem("books")) || [];

    for (const category of allCategories) {
        const book = category.livros.find(livro => livro.name === bookName);
        if (book) return { ...book, categoria: category.categoria };
    }

    return null;
}

document.addEventListener("click", (e) => {
    const target = e.target.closest(".book-to-cart");
    if (!target) return;

    const bookBox = target.closest(".book-box");
    const bookName = bookBox?.getAttribute("data-book-name");

    if (!bookName) return;

    const foundBook = getBookFromStorage(bookName);
    if (!foundBook) {
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(item => item.name === foundBook.name);

    if (existingItem) {
        existingItem.count = (existingItem.count || 1) + 1;
    } else {
        foundBook.count = 1;
        cart.push(foundBook);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
});