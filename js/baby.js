const products = [
    // Items
    {  url: "product/03_baby/001.html", imageURL: "https://m.media-amazon.com/images/I/61dkCqZsinL._AC_SX679_PIbundle-4,TopRight,0,0_SH20_.jpg", name: "Similac NeoSure", category: "milk" },
    { url: "product/03_baby/002.html", imageURL: "https://m.media-amazon.com/images/I/81mrnsJVNlL._SL1500_.jpg", name: "Enfamil NeuroPro", category: "Milk" },
    { url: "product/03_baby/003.html", imageURL: "https://m.media-amazon.com/images/I/51YKFuf3bZL._SY300_SX300_QL70_FMwebp_.jpg", name: "ICC CAT6 Feed", category: "Port" },
    { url: "product/03_baby/004.html", imageURL: "https://m.media-amazon.com/images/I/712QkYL25PL._AC_SY300_SX300_QL70_FMwebp_.jpg", name: "Auto Baby Food Maker, Glass Baby Food Mill, Baby Blender", category: "Blender" },
    // { url: "product/03_baby/007.html", imageURL: "", name: "", category: "",  price: 320 },
    
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