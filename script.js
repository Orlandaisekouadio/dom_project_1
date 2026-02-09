
document.addEventListener("DOMContentLoaded", () => {

  const totalPriceEl = document.querySelector(".total");

  function getUnitPrice(card) {
    // "100 $" -> 100
    return parseFloat(card.querySelector(".unit-price").textContent);
  }

  function getQuantity(card) {
    return parseInt(card.querySelector(".quantity").textContent);
  }

  function setQuantity(card, value) {
    card.querySelector(".quantity").textContent = value;
  }

  function updateTotalPrice() {
    let total = 0;

    document.querySelectorAll(".card").forEach(card => {
      const price = getUnitPrice(card);
      const quantity = getQuantity(card);
      total += price * quantity;
    });

    totalPriceEl.textContent = `${total} $`;
  }

  // PLUS BUTTON
  document.querySelectorAll(".fa-plus-circle").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const quantity = getQuantity(card);
      setQuantity(card, quantity + 1);
      updateTotalPrice();
    });
  });

  // MINUS BUTTON
  document.querySelectorAll(".fa-minus-circle").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const quantity = getQuantity(card);

      if (quantity > 0) {
        setQuantity(card, quantity - 1);
        updateTotalPrice();
      }
    });
  });

  // DELETE PRODUCT
  document.querySelectorAll(".fa-trash-alt").forEach(btn => {
    btn.addEventListener("click", () => {
      const cardBody = btn.closest(".card-body");
      cardBody.remove();
      updateTotalPrice();
    });
  });

  // LIKE (HEART)
  document.querySelectorAll(".fa-heart").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("text-danger");
    });
  });

  updateTotalPrice();
});
