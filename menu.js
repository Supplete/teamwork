// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Initialize an empty cart array
    let cart = [];

    // Get all "Order Now" buttons
    const orderButtons = document.querySelectorAll('.order-btn');

    // Add event listeners to each "Order Now" button
    orderButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            // Prevent the default behavior of the button (e.g., form submission)
            event.preventDefault();

            // Get the menu item details
            const menuItem = button.closest('.menu-item');
            const itemName = menuItem.querySelector('h3').textContent;
            const itemPrice = menuItem.querySelector('.price').textContent;


            // Optional: Update a cart counter or display the cart items
            updateCartDisplay();
        });
    });

    // Function to update the cart display (optional)
    function updateCartDisplay() {
        const cartDisplay = document.getElementById('cart-display');
        if (cartDisplay) {
            cartDisplay.innerHTML = `<h3>Cart (${cart.length} items)</h3>`;
            cart.forEach(item => {
                cartDisplay.innerHTML += `<p>${item.name} - ${item.price}</p>`;
            });
        }
    }



    // Append the "View Cart" button to the menu container
    const menuContainer = document.querySelector('.menu-container');
    if (menuContainer) {
        menuContainer.appendChild(viewCartButton);
    }
});