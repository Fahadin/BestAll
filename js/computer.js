const products = [
    // cat Items
    {  url: "product/02_computer/001.html", imageURL: "https://m.media-amazon.com/images/I/71V786Mv6YL._AC_SX425_.jpg", name: "HP Original 962", category: "Ink" },
    { url: "product/02_computer/002.html", imageURL: "https://m.media-amazon.com/images/I/61gtdFnK+UL._AC_SY300_SX300_QL70_FMwebp_.jpg", name: "Elgato", category: "StreamDeck", },
    { url: "product/02_computer/003.html", imageURL: "https://m.media-amazon.com/images/I/51Y-pJ7D0kL._AC_SX425_.jpg", name: "ICC CAT6 Feed", category: "Port", },
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