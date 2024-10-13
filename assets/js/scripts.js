const originalProducts = Array.from(document.querySelectorAll(".product"));

document.getElementById("filterPriceRating").addEventListener("change", function () {
  let filterValue = this.value;
  const products = document.querySelectorAll(".product");

  let sortedProducts = Array.from(products);

  if (filterValue === "default") {
    sortedProducts = originalProducts;
  } else {
    sortedProducts.sort(function (a, b) {
      let priceA = parseInt(a.getAttribute("data-harga"));
      let priceB = parseInt(b.getAttribute("data-harga"));
      let ratingA = parseInt(a.getAttribute("data-rating"));
      let ratingB = parseInt(b.getAttribute("data-rating"));

      if (filterValue === "price-low-high") {
        return priceA - priceB;
      } else if (filterValue === "price-high-low") {
        return priceB - priceA;
      } else if (filterValue === "rating-high-low") {
        return ratingB - ratingA;
      } else if (filterValue === "rating-low-high") {
        return ratingA - ratingB;
      }
      return 0;
    });
  }

  const container = document.querySelector(".product-items");
  container.innerHTML = "";

  sortedProducts.forEach((product) => {
    container.appendChild(product);
  });
});

document.getElementById("filterCategory").addEventListener("change", function () {
  let categoryValue = this.value;
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    if (categoryValue === "all" || product.getAttribute("data-category") === categoryValue) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
