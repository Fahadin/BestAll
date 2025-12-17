const products = [
    // cat Items
    { url: "product/01_electronics/001.html", imageURL: "https://m.media-amazon.com/images/I/612bn+1zfJL._AC_SY300_SX300_QL70_FMwebp_.jpg", name: "GoPro LIT Hero", category: "Camera",  price: 229.00 },
    { url: "product/01_electronics/002.html", imageURL: "https://m.media-amazon.com/images/I/61IBvuFnuzL._AC_SX425_.jpg", name: "Fujifilm Instax Mini 12", category: "StreamDeck",  price: 125.95 },
    { url: "product/01_electronics/003.html", imageURL: "https://m.media-amazon.com/images/I/41+DTZGtlML._AC_SX425_.jpg", name: "Ooma WP825", category: "Phone",  price: 199.99 },
    // { url: "dress.html", imageURL: "assets/cat/04.webp", name: "Jungle Adult (chicken & fish) 500gm", category: "cat-food",  price: 320 },
    
];

const productsContainer = document.querySelector('.products');
const searchInput = document.getElementById('searchProduct');
const sortOrderSelect = document.getElementById('sortOrder');
const filterButtons = document.querySelectorAll('.filters button');

function displayProducts(productsArray) {
    productsContainer.innerHTML = "";
    productsArray.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.imageURL}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <a href="${product.url}">view full details<a/>
            
        `;
        productsContainer.appendChild(productElement);
    });
}

// function filterProducts(category) {
//     let filteredProducts = products;
//     if (category !== 'all') {
//         filteredProducts = products.filter(product => product.category === category);
//     }
//     filteredProducts = searchProducts(filteredProducts);
//     filteredProducts = sortProducts(filteredProducts);
//     displayProducts(filteredProducts);
// }

// function searchProducts(productsArray) {
//     const searchText = searchInput.value.toLowerCase();
//     return productsArray.filter(product => product.name.toLowerCase().includes(searchText));
// }

// function sortProducts(productsArray) {
//     const sortOrder = sortOrderSelect.value;
//     if (sortOrder === 'lowest') {
//         return productsArray.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === 'highest') {
//         return productsArray.sort((a, b) => b.price - a.price);
//     }
//     return productsArray;
// }

// filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         filterProducts(button.dataset.category);
//     });
// });

// searchInput.addEventListener('input', () => {
//     filterProducts(document.querySelector('.filters button.active')?.dataset.category || 'all');
// });

// sortOrderSelect.addEventListener('change', () => {
//     filterProducts(document.querySelector('.filters button.active')?.dataset.category || 'all');
// });

displayProducts(products);