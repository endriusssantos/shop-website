document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos do carrinho
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
  
    let cartItems = []; // Array para armazenar os itens do carrinho
  
    // Função para abrir/fechar o carrinho
    function toggleCartSidebar() {
      cartSidebar.classList.toggle("hidden");  // Alterna a classe hidden
      console.log(cartSidebar.classList); // Depuração: para verificar se a classe foi alternada
    }
  
    // Atualiza o conteúdo da sidebar com os itens do carrinho
    function updateCartSidebar() {
      cartItemsContainer.innerHTML = ""; // Limpa a lista
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
  
    // Botões de aumentar e diminuir quantidade
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
  
    // Adiciona itens ao carrinho
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
  
      // Adiciona o item ao array do carrinho
      cartItems.push({ size: selectedSize.textContent, quantity });
  
      // Atualiza o contador no ícone do carrinho
      cartIcon.textContent = ` (${cartItems.length})`;
  
      // Limpa a quantidade para o próximo item
      quantityElement.textContent = "0";
  
      alert("Item adicionado ao carrinho!");
    });
  
    // Abrir o carrinho ao clicar no ícone
    cartButton.addEventListener("click", () => {
      updateCartSidebar();
      toggleCartSidebar(); // Chama a função para alternar a visibilidade
    });
  
    // Fechar o carrinho
    closeCartBtn.addEventListener("click", () => {
      toggleCartSidebar(); // Alterna a visibilidade para fechar o carrinho
    });
  
    // Selecionar o tamanho
    sizeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        sizeButtons.forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });
  
    // Depuração dos elementos
    console.log(cartButton, cartIcon, cartSidebar, closeCartBtn);
  });