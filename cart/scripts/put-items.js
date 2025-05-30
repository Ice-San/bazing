const cartItemsContainer = document.querySelector(".cart-items");
const summaryContainer = document.querySelector(".cart-sumary-calcs");
const totalContainer = document.querySelector(".cart-sumary-total p:last-child");
const totalMobileContainer = document.querySelector(".cart-sumary-mobile span");

let cart = [];

const saveCart = () => localStorage.setItem("cart", JSON.stringify(cart));

const createElementWithClass = (tag, className) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    return el;
};

const formatName = (name) => name.replace(/-/g, " ");

const renderCart = () => {
    cartItemsContainer.innerHTML = "";
    summaryContainer.innerHTML = "";

    if (!cart.length) {
        const emptyMsg = createElementWithClass("p", "empty-cart");
        emptyMsg.textContent = "Your cart is empty.";
        cartItemsContainer.appendChild(emptyMsg);
        totalContainer.textContent = "EUR 0.00";
        totalMobileContainer.textContent = "EUR 0.00";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * (item.count || 1);
        total += itemTotal;

        const cartProduct = createElementWithClass("div", "cart-product");
        cartProduct.dataset.index = index;

        const left = createElementWithClass("div", "cart-product-left");
        const img = createElementWithClass("div", "cart-product-img");
        img.appendChild(createElementWithClass("div", "img-container"));

        const info = createElementWithClass("div", "cart-product-info");
        const name = document.createElement("h2");
        name.textContent = formatName(item.name);
        const price = document.createElement("p");
        price.textContent = `EUR ${item.price.toFixed(2)}`;
        info.appendChild(name);
        info.appendChild(price);

        left.appendChild(img);
        left.appendChild(info);

        const edit = createElementWithClass("div", "cart-product-edit");

        const del = createElementWithClass("div", "cart-product-delete");
        del.appendChild(createElementWithClass("div", "cart-product-delete-container img-container"));

        const options = createElementWithClass("div", "cart-product-options");

        const minus = document.createElement("p");
        minus.classList.add("decrement");
        minus.textContent = "-";

        const count = document.createElement("p");
        count.classList.add("count");
        count.textContent = item.count;

        const plus = document.createElement("p");
        plus.classList.add("increment");
        plus.textContent = "+";

        options.appendChild(minus);
        options.appendChild(count);
        options.appendChild(plus);

        edit.appendChild(del);
        edit.appendChild(options);

        cartProduct.appendChild(left);
        cartProduct.appendChild(edit);
        cartItemsContainer.appendChild(cartProduct);

        const summaryItem = createElementWithClass("div", "cart-sumary-item");

        const itemName = createElementWithClass("div", "cart-sumary-item-name");
        const nameP = document.createElement("p");
        nameP.textContent = formatName(item.name);
        const countP = document.createElement("p");
        countP.textContent = `${item.count}x`;

        itemName.appendChild(nameP);
        itemName.appendChild(countP);

        const itemTotalP = document.createElement("p");
        itemTotalP.textContent = `EUR ${(item.price * item.count).toFixed(2)}`;

        summaryItem.appendChild(itemName);
        summaryItem.appendChild(itemTotalP);

        summaryContainer.appendChild(summaryItem);
    });

    totalContainer.textContent = `EUR ${total.toFixed(2)}`;
    totalMobileContainer.textContent = `EUR ${total.toFixed(2)}`;
};

const updateCartItem = (index, delta) => {
    if (cart[index]) {
        cart[index].count += delta;
        if (cart[index].count < 1) cart.splice(index, 1);
        saveCart();
        renderCart();
    }
};

const removeCartItem = (index) => {
    if (cart[index]) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }
};

if(localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

renderCart();

cartItemsContainer.addEventListener("click", (e) => {
    const productEl = e.target.closest(".cart-product");

    if (!productEl) return;

    const index = parseInt(productEl.dataset.index);

    if (e.target.classList.contains("increment")) updateCartItem(index, 1);
    if (e.target.classList.contains("decrement")) updateCartItem(index, -1);
    
    if (e.target.classList.contains("cart-product-delete") || e.target.closest(".cart-product-delete-container")) {
        removeCartItem(index);
    }
});