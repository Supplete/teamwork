let cart = [];
let totalPrice = 0;

function orderNow(item, price) {
    let existingItem = cart.find(cartItem => cartItem.name === item);

    if (existingItem) {
        alert("Item already in cart!");
        return;
    }

    cart.push({ name: item, price: price });
    totalPrice += price;

    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

function toggleCart() {
    const cartDetails = document.getElementById("cart-details");
    if (cartDetails.style.display === "block") {
        cartDetails.style.display = "none";
    } else {
        cartDetails.style.display = "block";
        updateCartDetails();
    }
}

function updateCartDetails() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceContainer = document.getElementById("total-price");

    cartItemsContainer.innerHTML = "";
    cart.forEach((cartItem, index) => {
        let itemElement = document.createElement("p");
        itemElement.innerHTML = `${cartItem.name} - Ksh ${cartItem.price} 
        <span class="remove-item" onclick="removeFromCart(${index})">x</span>`;
        cartItemsContainer.appendChild(itemElement);
    });

    totalPriceContainer.textContent = "Total: Ksh " + totalPrice;
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCartCount();
    updateCartDetails();
}

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = (sidebar.style.left === "0px" ? "-250px" : "0px");
}

function setActive(element, url) {
    const links = document.querySelectorAll(".sidebar a");
    links.forEach(link => link.classList.remove("active"));
    element.classList.add("active");

    if (url !== 'index.html') {
        window.location.href = url;
    }
}
