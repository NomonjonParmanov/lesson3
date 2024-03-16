let API_URL = "https://dummyjson.com/products";
let h = document.querySelector(".h");
let product__image = document.querySelector(".product__image");
async function fetchSingleProduct(api) {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  let response = await fetch(`${api}/${id}`);

  let productData = await response.json();
  console.log(productData);

  displayProduct(productData);
}

function displayProduct(product) {
  h.textContent = product.title;
  product__image.src = product.images[0];
}
fetchSingleProduct(API_URL);
