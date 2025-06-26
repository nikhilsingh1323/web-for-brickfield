// Smooth scroll for links
function toggleSidebar() {
  document.getElementById('side-bar').classList.toggle('hidden');
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
function openForm() {
  document.getElementById("popupForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submit

  // Collect form data
  document.getElementById('placeOrder').addEventListener('click', function () {
    // Sample data collection — replace with your actual input values
    const data = {
      product: document.getElementById('product').value,
      quantity: document.getElementById('quantity').value,
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      location: document.getElementById('location').value
    };

    sendOrderToOutlook(data);
  });



  function sendOrderToOutlook(data) {
    const subject = "New Order Request";
    const body =
      "Order Details:\n\n" +
      "🧱 Product: " + data.product + "\n" +
      "📦 Quantity: " + data.quantity + "\n" +
      "👤 Name: " + data.name + "\n" +
      "📞 Phone: " + data.phone + "\n" +
      "📍 Location: " + data.location;

    const mailtoLink =
      "mailto:nikkisinghtomar@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
  }

  // Optional: send email or store to server here

  // Reset and close
  document.getElementById("orderForm").reset();
  closeForm();
});