const searchElement = document.querySelector("#product-search");
const searchResult = document.querySelector("#search-result");
const clearButton = document.querySelector("#clear-button");
const products = document.querySelectorAll(".product");

let productsCount = 0;

function onSearch(e) {
    const value = e.target.value.toLowerCase().trim();


    if (value.length === 0 || !value) {
        clearButton.classList.add("hidden");
        searchResult.classList.add("hidden");
        searchElement.value = "";
        productsCount = 0;
        products.forEach(product => product.classList.add("hidden"));
    }

    clearButton.classList.remove("hidden");
    searchResult.classList.remove("hidden");

    productsCount = 0;
    searchResult.textContent = "0 результатів";

    products.forEach((product) => {
        const productName = product.getAttribute("data-name");

        if (productName.includes(value)) {
            product.classList.remove("hidden");
            
            if (productsCount === 1 || productsCount.toString()[productsCount.lenght - 1] === "1") {
                productsCount++;
                searchResult.textContent = productsCount + " результат"
            } else {
                searchResult.textContent = productsCount + " результати"
                productsCount++;
            }
        } else {
            product.classList.add("hidden");
        }
    })
}


searchElement.addEventListener("input", onSearch)

clearButton.addEventListener("click", () => {
    clearButton.classList.add("hidden");
    searchResult.classList.add("hidden");
    searchElement.value = "";
    productsCount = 0;
    searchResult.textContent = "0 результатів";
    products.forEach(product => product.classList.add("hidden"));
})
