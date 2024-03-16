let API_URL = "https://dummyjson.com/products";
let cards = document.querySelector(".cards");
fetch(API_URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let datas = data.products;
    console.log(datas);
    datas.forEach((product) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${product.images[0]}" alt="">
        <img class="star" src="../images/star.svg" alt="">
        <p>An apple mobile which is nothing like apple</p>
        <p class="price">$${product.price} <span>$20</span></p>
        `;
      card.addEventListener("click", () => singleRoute(product.id));
      cards.appendChild(card);
    });
  });
function singleRoute(id) {
  window.open(`./pages/product.html?id=${id}`, "_self");
}
