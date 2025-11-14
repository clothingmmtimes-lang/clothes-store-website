async function submitOrder() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    const name = prompt("Enter your name:");
    const phone = prompt("Enter your phone number:");

    if (!name || !phone) {
        alert("Please enter all details");
        return;
    }

    const apiURL = "https://script.google.com/macros/s/AKfycbw2JFvVFP6CaSEKnKNWbTrPg5q2e1JiZyqitiQniVNawHdKTADDb0Go8g78q078CuoUcQ/exec";

    const body = {
        name,
        phone,
        product: cart[0].name,
        price: cart[0].price,
        cart: cart
    };

    let res = await fetch(apiURL, {
        method: "POST",
        body: JSON.stringify(body)
    });

    let json = await res.json();

    if (json.status === "success") {
        alert("Order placed! Order ID: " + json.order_id);
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    } else {
        alert("Failed to submit order");
    }
}
