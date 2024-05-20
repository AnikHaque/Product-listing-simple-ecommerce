document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".product-item button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Product added to cart!");
    });
  });
});
