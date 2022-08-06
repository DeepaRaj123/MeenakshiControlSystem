let inputBox = document.querySelector(".input-box"),
  searchIcon = document.querySelector(".icon"),
  closeIcon = document.querySelector(".fa-close");

searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));
