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
const productName = document.querySelectorAll(".products__element-name");
const productPrice = document.querySelectorAll(".products__element-price");
const productImg = document.querySelectorAll(".products__img");
const btnAdd = document.querySelectorAll(".products__element-add");

const productNameAdded = document.querySelector(".modal-cart__bought-name");
const productPriceAdded = document.querySelector(".modal-cart__bought-price");
const productImgAdded = document.querySelector(".modal-cart__bought-img");

const productAdded = {
  name: productName.textContent,
  price: productPrice.textContent,
  img: productImg.src,
};

const addToCart = function () {
  const boughtList = document.querySelector(".modal-cart__bought-list");
  const boughtItem = document.createElement("li");
  const boughtInfo = document.createElement("div");
  const boughtName = document.createElement("p");
  const boughtPrice = document.createElement("p");

  boughtItem.classList.add("modal-cart__bought-item");
  boughtInfo.classList.add("modal-cart__bought-info");
  boughtName.classList.add("modal-cart__bought-name");
  boughtPrice.classList.add("modal-cart__bought-price");

  boughtList.appendChild(boughtItem);
  boughtItem.appendChild(boughtInfo);
  boughtInfo.appendChild(boughtName);
  boughtInfo.appendChild(boughtPrice);

  const priceAdded = this.previousElementSibling;
  const nameAdded = priceAdded.previousElementSibling;

  boughtName.textContent = nameAdded.innerHTML;
  boughtPrice.textContent = priceAdded.innerHTML;

  const cartItems = document.querySelector(".search__cart-items");
  cartItems.textContent++;
};

btnAdd.forEach((btn) => {
  btn.addEventListener("click", addToCart);
});

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

// Filter by search bar
const input = document.querySelector(".search__input");
const productsList = document.querySelector(".products__list");
const productsElement = document.querySelectorAll(".products__element");
const iconSearch = document.querySelector(".search__search-icon");

const searchElement = function () {
  const searchText = input.value.toLowerCase();
  let elements = [...productsElement];
  elements = elements.filter((element) =>
    element.textContent.toLowerCase().includes(searchText)
  );
  productsList.textContent = "";
  elements.forEach((element) => productsList.appendChild(element));
};

iconSearch.addEventListener("click", searchElement);
