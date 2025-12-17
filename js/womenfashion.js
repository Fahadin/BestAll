const products = [
    // Items
    {  url: "product/04_womenfashion/001.html", imageURL: "https://m.media-amazon.com/images/I/71Y4R3uqmvL._AC_SY500_.jpg", name: "Heart Pendant", category: "Necklace" },
    { url: "product/04_womenfashion/002.html", imageURL: "https://m.media-amazon.com/images/I/61RK7cWgY4L._AC_SY535_.jpg", name: "Swarovski Infinity Heart Jewelry", category: "Necklace" },
    { url: "product/04_womenfashion/003.html", imageURL: "https://m.media-amazon.com/images/I/71qQalWK6ML._AC_SY625_.jpg", name: "Swarovski Gema Crystal Bracelet", category: "Necklace" },
    { url: "product/04_womenfashion/004.html", imageURL: "https://m.media-amazon.com/images/I/61OO+-S9boL._AC_SY500_.jpg", name: "Swarovski Matrix Tennis Soft Bracelet", category: "Necklace" },
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