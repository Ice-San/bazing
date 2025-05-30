const addToCartBtn = document.querySelector(".info-btn");

addToCartBtn.addEventListener("click", () => {
    const bookInfoAddCart = JSON.parse(localStorage.getItem("bookInfo"));

    if (!localStorage.getItem("bookInfo")) {
        console.warn("Nenhum livro disponível no localStorage");
        return;
    }

    const cartBookPage = JSON.parse(localStorage.getItem("cart"));

    const existing = cartBookPage.find(item => item.name === bookInfoAddCart.name);

    if (existing) {
        existing.count = (existing.count || 1) + 1;
    } 
    
    if (!existing) {
        cartBookPage.push({
            ...bookInfoAddCart,
            count: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cartBookPage));
});