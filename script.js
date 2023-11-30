document.querySelector('.deer-pixel-art').addEventListener('click', function() {
    this.classList.add('clicked');
});

document.querySelector('.deer-pixel-art').addEventListener('click', function() {
    this.classList.add('clicked');
    document.body.innerHTML = `
        <header>
            Welcome to our online shop
        </header>
        <div class="product">
            <img src="product.jpg" alt="Product Image">
            <h2>Product Name</h2>
            <p>Product Description</p>
            <button>Add to Cart</button>
        </div>
    `;
});