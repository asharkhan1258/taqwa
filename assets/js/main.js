// Simple frontend interactions only.
document.addEventListener("DOMContentLoaded", function () {
  setupQuoteForms();
  setActiveMenuLink();
});

function setupQuoteForms() {
  const forms = document.querySelectorAll(".quote-form");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const button = form.querySelector('button[type="submit"]');
      const originalText = button.innerHTML;

      button.innerHTML = '<i class="fa-solid fa-circle-check me-2"></i>Request Received';
      button.disabled = true;

      setTimeout(function () {
        button.innerHTML = originalText;
        button.disabled = false;
        form.reset();
      }, 2600);
    });
  });
}

function setActiveMenuLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}
