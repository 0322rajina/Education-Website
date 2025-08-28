document.addEventListener("DOMContentLoaded", function () {
  // Payment method selection
  const paymentMethods = document.querySelectorAll(".payment-method");

  paymentMethods.forEach((method) => {
    method.addEventListener("click", function () {
      paymentMethods.forEach((m) => m.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Form validation and submission
  const paymentForm = document.getElementById("payment-form");

  paymentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple validation
    const cardName = document.getElementById("card-name").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    if (!cardName || !cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all payment details");
      return;
    }

    // Simulate payment processing
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = "Processing...";
    btn.disabled = true;

    setTimeout(() => {
      alert("Payment successful! Thank you for your purchase.");
      btn.textContent = originalText;
      btn.disabled = false;
      paymentForm.reset();
    }, 2000);
  });

  // Format card number input
  const cardNumberInput = document.getElementById("card-number");

  cardNumberInput.addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 0) {
      value = value.match(new RegExp(".{1,4}", "g")).join(" ");
    }

    this.value = value;
  });

  // Format expiry date input
  const expiryDateInput = document.getElementById("expiry-date");

  expiryDateInput.addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }

    this.value = value;
  });
});
