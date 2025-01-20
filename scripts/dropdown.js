const btnMenu = document.querySelector('.btn-dropdown');
const menuItems = document.querySelector('.menu-items');

btnMenu.addEventListener("click", () => {
  menuItems.classList.toggle('hidden');
  console.log("oi")
});
