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

// Add product to cart
// const productName = document.querySelector(".products__element-name");
// const productPrice = document.querySelector(".products__element-price");
// const productImg = document.querySelector(".products__img");
// const btnAdd = document.querySelectorAll(".products__element-add");

// const productNameAdded = document.querySelector(".modal-cart__bought-name");
// const productPriceAdded = document.querySelector(".modal-cart__bought-price");
// const productImgAdded = document.querySelector(".modal-cart__bought-img");

// const productAdded = {
//   name: productName.textContent,
//   price: productPrice.textContent,
//   img: productImg.src,
// };

// const addToCart = function () {
//   productNameAdded.textContent = productAdded.name;
//   productPriceAdded.textContent = productAdded.price;
//   productImgAdded.src = productAdded.img;
// };

// btnAdd.forEach((btn) => {
//   btn.addEventListener("click", addToCart);
// });

// Filter by categories
const catAll = document.querySelector(".search__all");
const catBooks = document.querySelector(".search__books");
const catAccessories = document.querySelector(".search__accessories");

const books = document.querySelectorAll(".products__books");
const accessories = document.querySelectorAll(".products__accessories");

const filterByCateogries = function (e) {
  e.preventDefault();

  if (e.target === catBooks) {
    books.forEach((book) => {
      book.classList.remove("products__element--active");
    });

    accessories.forEach((access) => {
      access.classList.add("products__element--active");
    });
  } else if (e.target === catAccessories) {
    accessories.forEach((access) => {
      access.classList.remove("products__element--active");
    });

    books.forEach((book) => {
      book.classList.add("products__element--active");
    });
  } else {
    accessories.forEach((access) => {
      access.classList.remove("products__element--active");
    });

    books.forEach((book) => {
      book.classList.remove("products__element--active");
    });
  }
};

catBooks.addEventListener("click", filterByCateogries);
catAccessories.addEventListener("click", filterByCateogries);
catAll.addEventListener("click", filterByCateogries);
