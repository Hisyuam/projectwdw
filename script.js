const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function toggleSearchForm(event) {
  event.preventDefault();
  const searchForm = document.getElementById("SearchForm");

  if (searchForm.style.display === "none" || searchForm.style.display === "") {
    searchForm.style.display = "block";
  } else {
    searchForm.style.display = "none";
  }
}
//js untuk button
//1
function toggleShopItem01(event) {
  event.preventDefault();
  const ShopItem01 = document.getElementById("ShopItem01");

  if (ShopItem01.style.display === "none" || ShopItem01.style.display === "") {
    ShopItem01.style.display = "block";
  } else {
    ShopItem01.style.display = "none";
  }
}
//2
function toggleShopItem02(event) {
  event.preventDefault();
  const ShopItem02 = document.getElementById("ShopItem02");

  if (ShopItem02.style.display === "none" || ShopItem02.style.display === "") {
    ShopItem02.style.display = "block";
  } else {
    ShopItem02.style.display = "none";
  }
}
//3
function toggleShopItem03(event) {
  event.preventDefault();
  const ShopItem03 = document.getElementById("ShopItem03");

  if (ShopItem03.style.display === "none" || ShopItem03.style.display === "") {
    ShopItem03.style.display = "block";
  } else {
    ShopItem03.style.display = "none";
  }
}
//4
function toggleShopItem04(event) {
  event.preventDefault();
  const ShopItem04 = document.getElementById("ShopItem04");

  if (ShopItem04.style.display === "none" || ShopItem04.style.display === "") {
    ShopItem04.style.display = "block";
  } else {
    ShopItem04.style.display = "none";
  }
}
//5
function toggleShopItem05(event) {
  event.preventDefault();
  const ShopItem05 = document.getElementById("ShopItem05");

  if (ShopItem05.style.display === "none" || ShopItem05.style.display === "") {
    ShopItem05.style.display = "block";
  } else {
    ShopItem05.style.display = "none";
  }
}
//6
function toggleShopItem06(event) {
  event.preventDefault();
  const ShopItem06 = document.getElementById("ShopItem06");

  if (ShopItem06.style.display === "none" || ShopItem06.style.display === "") {
    ShopItem06.style.display = "block";
  } else {
    ShopItem06.style.display = "none";
  }
}


