const button = document.getElementById("menu__toggler");
const menu = document.getElementById("menu_list_label");

let change = false;

button.addEventListener("click", () => {
  if (!change) {
    menu.style.display = "flex";
    change = true;
  } else {
    menu.style.display = "none";
    change = false;
  }
});
