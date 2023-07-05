// Sample data
const availableIngredients = [
    { name: 'Lettuce', price: 0.5 },
    { name: 'Tomato', price: 0.8 },
    { name: 'Cheese', price: 1.0 },
    { name: 'Bacon', price: 1.5 },
    // Add more ingredients as needed
  ];
  
  let selectedIngredients = [];
  
  // Function to render the available ingredients
  function renderIngredients() {
    const ingredientsContainer = document.getElementById('ingredients-container');
    ingredientsContainer.innerHTML = '';
  
    availableIngredients.forEach((ingredient) => {
      const ingredientItem = document.createElement('div');
      ingredientItem.innerHTML = `
        <span>${ingredient.name}</span>
        <button class="add-button" data-name="${ingredient.name}" data-price="${ingredient.price}">Add</button>
      `;
      ingredientsContainer.appendChild(ingredientItem);
    });
  
    const addButtons = document.querySelectorAll('.add-button');
    addButtons.forEach((button) => {
      button.addEventListener('click', handleAddIngredient);
    });
  }
  
  // Function to handle ingredient addition
  function handleAddIngredient(event) {
    const ingredientName = event.target.dataset.name;
    const ingredientPrice = parseFloat(event.target.dataset.price);
  
    const existingIngredient = selectedIngredients.find((ingredient) => ingredient.name === ingredientName);
  
    if (existingIngredient) {
      existingIngredient.quantity++;
    } else {
      selectedIngredients.push({ name: ingredientName, price: ingredientPrice, quantity: 1 });
    }
  
    renderSelectedIngredients();
    updateTotalPrice();
  }
  
  // Function to render the selected ingredients
  function renderSelectedIngredients() {
    const selectedIngredientsContainer = document.getElementById('selected-ingredients-container');
    selectedIngredientsContainer.innerHTML = '';
  
    selectedIngredients.forEach((ingredient) => {
      const ingredientItem = document.createElement('div');
      ingredientItem.innerHTML = `
        <span>${ingredient.name} x ${ingredient.quantity}</span>
        <button class="remove-button" data-name="${ingredient.name}">Remove</button>
      `;
      selectedIngredientsContainer.appendChild(ingredientItem);
    });
  
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((button) => {
      button.addEventListener('click', handleRemoveIngredient);
    });
  }
  
  // Function to handle ingredient removal
  function handleRemoveIngredient(event) {
    const ingredientName = event.target.dataset.name;
  
    selectedIngredients = selectedIngredients.filter((ingredient) => ingredient.name !== ingredientName);
  
    renderSelectedIngredients();
    updateTotalPrice();
  }
  
  // Function to calculate the total price of selected ingredients
  function calculateTotalPrice() {
    const totalPrice = selectedIngredients.reduce((total, ingredient) => {
      return total + ingredient.price * ingredient.quantity;
    }, 0);
  
    return totalPrice.toFixed(2);
  }
  
  // Function to update the total price in the HTML document
  function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = calculateTotalPrice();
  }
  
  // Function to initialize the application
  function initializeApp() {
    renderIngredients();
    updateTotalPrice();
  }
  
  // Call the initializeApp function when the DOM is ready
  document.addEventListener('DOMContentLoaded', initializeApp);
  