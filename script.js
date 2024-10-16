let changeColor = function (icon) {
  icon.classList.toggle("fa-heart-crack");
};

const cart = document.querySelector(".fa-shopping-cart");
function swapText(obj, n) {
  if (obj.oldText) {
    obj.innerHTML = obj.oldText;
    obj.oldText = null;
    if (cart.innerHTML > 1) {
      cart.innerHTML = Number(cart.innerHTML) - 1;
    } else {
      cart.innerHTML = null;
    }
  } else {
    obj.oldText = obj.innerHTML;
    obj.innerHTML = n;
    cart.innerHTML = Number(cart.innerHTML) + 1;
  }
}
