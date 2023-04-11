const products = [1, 2, 3, 4, 5, 6, 7, 8]

// addButtons.addEventListener('click', () => )❌

const productsContainer = document.querySelector('.productsContainer')

products.forEach(product => {
  const productCard = document.createElement('div')
  productCard.className = 'col-3 mb-3'
  productCard.innerHTML = `
    <div class="card">
      <img src="./assets/placeholder.jpg" class="card-img-top" alt="some iphone photo">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="btn btn-dark add-btn">Add to cart</button>
      </div>
    </div>
  `
  productsContainer.append(productCard)
})

const addButtons = document.querySelectorAll('.add-btn')

for (const addBtn of addButtons) {
  addBtn.addEventListener('click', () => {
    Toastify({
      text: "Tu producto se agrego al carrito",
      duration: 3000
    }).showToast()
  })
}
