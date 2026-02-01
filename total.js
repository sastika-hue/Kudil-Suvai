// totals.js (ONLY for calculation purpose)

function money(n){
  return "₹" + Number(n).toFixed(0);
}

function calculate(){
  const items = document.querySelectorAll(".cartItem");
  let subtotal = 0;

  items.forEach(item => {
    const price = Number(item.dataset.price);
    const qty = Number(item.querySelector(".qty span").textContent);
    subtotal += price * qty;
  });

  const gst = Math.round(subtotal * 0.05);
  const delivery = subtotal >= 300 ? 0 : 25;
  const total = subtotal + gst + delivery;

  document.getElementById("subtotal").textContent = money(subtotal);
  document.getElementById("gst").textContent = money(gst);
  document.getElementById("delivery").textContent = money(delivery);
  document.getElementById("total").textContent = money(total);
}

function setupCart(){
  document.querySelectorAll(".cartItem").forEach(item => {
    const minus = item.querySelector(".minus");
    const plus = item.querySelector(".plus");
    const qtyEl = item.querySelector(".qty span");
    const removeBtn = item.querySelector(".removeBtn");

    minus.addEventListener("click", () => {
      let qty = Number(qtyEl.textContent);
      if(qty > 1) qty--;
      qtyEl.textContent = qty;
      calculate();
    });

    plus.addEventListener("click", () => {
      let qty = Number(qtyEl.textContent);
      qty++;
      qtyEl.textContent = qty;
      calculate();
    });

    removeBtn.addEventListener("click", () => {
      item.remove();
      calculate();
    });
  });

  calculate();
}

document.addEventListener("DOMContentLoaded", setupCart);
