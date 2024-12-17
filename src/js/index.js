document.addEventListener("DOMContentLoaded", () => {
    const sizeButtons = document.querySelectorAll(".sizes button");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const quantityElement = document.getElementById("quantity");
    const addToCartBtn = document.querySelector(".btn-add");
    const cartIcon = document.querySelector(".fa-cart-shopping");
    const cartButton = document.getElementById("btn-cart");
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCartBtn = document.getElementById("close-cart");
    const cartItemsContainer = document.getElementById("cart-items");
  
    let cartItems = []; 
  
    function toggleCartSidebar() {
      cartSidebar.classList.toggle("hidden");
      console.log(cartSidebar.classList);
    }

    function updateCartSidebar() {
      cartItemsContainer.innerHTML = ""; 
      if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = "<li>O carrinho está vazio!</li>";
        return;
      }
      cartItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `Item ${index + 1}: Tamanho ${item.size}, Quantidade ${item.quantity}`;
        cartItemsContainer.appendChild(li);
      });
    }
  
    increaseBtn.addEventListener("click", () => {
      let quantity = parseInt(quantityElement.textContent, 10);
      quantity += 1;
      quantityElement.textContent = quantity;
    });
  
    decreaseBtn.addEventListener("click", () => {
      let quantity = parseInt(quantityElement.textContent, 10);
      if (quantity > 0) {
        quantity -= 1;
        quantityElement.textContent = quantity;
      }
    });
  
    addToCartBtn.addEventListener("click", () => {
      const selectedSize = document.querySelector(".sizes button.selected");
      const quantity = parseInt(quantityElement.textContent, 10);
  
      if (!selectedSize) {
        alert("Por favor, selecione um tamanho antes de adicionar ao carrinho!");
        return;
      }
  
      if (quantity <= 0) {
        alert("Por favor, adicione pelo menos 1 item ao carrinho!");
        return;
      }
  
      cartItems.push({ size: selectedSize.textContent, quantity });
  
      cartIcon.textContent = ` (${cartItems.length})`;
  
      quantityElement.textContent = "0";
  
      alert("Item adicionado ao carrinho!");
    });
  
    cartButton.addEventListener("click", () => {
      updateCartSidebar();
      toggleCartSidebar();
    });
  
    closeCartBtn.addEventListener("click", () => {
      toggleCartSidebar();
    });
  
    sizeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        sizeButtons.forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });
  
    console.log(cartButton, cartIcon, cartSidebar, closeCartBtn);
  });