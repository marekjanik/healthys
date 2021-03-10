"use strict";

// Display modal-product
const modalProduct = document.querySelector(".modal-product");
const modalProductImg = document.querySelector(".modal-product__img");
const productsImg = document.querySelectorAll(".products__img");

const toggleClassModalProduct = function () {
  modalProduct.classList.toggle("modal-product--active");
};

productsImg.forEach((product) =>
  product.addEventListener("click", () => {
    modalProductImg.src = product.src;
    toggleClassModalProduct();
  })
);

modalProduct.addEventListener("click", toggleClassModalProduct);

// Display modal-cart
const iconCart = document.querySelector(".search__cart");
const modalCart = document.querySelector(".modal-cart");

const toggleClassModalCart = function () {
  modalCart.classList.toggle("modal-cart--active");
};

iconCart.addEventListener("click", toggleClassModalCart);
modalCart.addEventListener("click", toggleClassModalCart);
