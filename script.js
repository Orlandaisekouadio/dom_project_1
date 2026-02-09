document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".list-products");
  const totalPriceEl = document.querySelector(".total");

  function updateTotalPrice() {
    let total = 0;

    document.querySelectorAll(".card").forEach((card) => {
      const price = parseFloat(card.querySelector(".unit-price").textContent);
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      total += price * quantity;
    });

    totalPriceEl.textContent = `${total} $`;
  }

  container.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    const quantityEl = card.querySelector(".quantity");
    let quantity = parseInt(quantityEl.textContent);

    // PLUS
    if (e.target.classList.contains("fa-plus-circle")) {
      quantityEl.textContent = quantity + 1;
      updateTotalPrice();
    }

    // MINUS
    if (e.target.classList.contains("fa-minus-circle")) {
      if (quantity > 0) {
        quantityEl.textContent = quantity - 1;
        updateTotalPrice();
      }
    }

    // DELETE
    if (e.target.classList.contains("fa-trash-alt")) {
      card.closest(".card-body").remove();
      updateTotalPrice();
    }

    // LIKE
    if (e.target.classList.contains("fa-heart")) {
      e.target.classList.toggle("text-danger");
    }
  });

  updateTotalPrice();
});
