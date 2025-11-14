function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let box = document.getElementById("cart-items");

    box.innerHTML = "";
    cart.forEach((item) => {
        box.innerHTML += `
            <div class="cart-item">
                ${item.name} - ₹${item.price}
            </div>
        `;
    });
}

if (document.getElementById("cart-items")) {
    loadCart();
}

