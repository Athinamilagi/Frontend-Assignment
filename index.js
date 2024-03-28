var element = document.querySelector(".hamburger_button");
var menu = document.querySelector(".hamburger_menu");
var menuItems = document.querySelectorAll(".hamburger_menu ul li");

menuItems.forEach((item) => {
  item.style.transition = "none";
  item.style.transform = "translateY(-1000px)";
});

element.addEventListener("click", function () {
  var currentValue = element.getAttribute("aria-expanded");
  var newValue = currentValue === "true" ? "false" : "true";
  element.setAttribute("aria-expanded", newValue);

  if (newValue === "false") {
    menu.style.display = "block";

    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.transition = `transform .5s ease`;
        item.style.transform = "translateY(0)";
      }, index * 100);
    });
  } else {
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.transition = `transform .5s ease`;
        item.style.transform = "translateY(-1000px)";
      }, index * 100);
    });
    setTimeout(() => {
      menu.style.display = "none";
    }, menuItems.length * 100);
  }
});
