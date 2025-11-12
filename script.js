let formToggle = document.getElementById("contact-form-toggle");
let formSection = document.getElementById("contact-form");
let form = document.getElementById("form-content");
let submitButton = document.getElementById("contact-submit");
let thankYouNote = document.getElementById("thank-you-note");
let heroImage = document.getElementById("hero-image");
let hamburgerMenu = document.getElementById("hamburger-menu");
let mobileNavItems = document.getElementById("mobile-nav-items");

function toggleComponents(component) {
  component.classList.toggle("flex");
  component.classList.toggle("hidden");
}

formToggle.addEventListener("click", () => toggleComponents(formSection));
hamburgerMenu.addEventListener("click", () => toggleComponents(mobileNavItems));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitForm();
});

function submitForm() {
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  if (thankYouNote.firstChild !== null) {
    thankYouNote.removeChild(thankYouNote.firstChild);
  }
  let text = document.createElement("h2");
  text.textContent = `Thank you, ${name}! We have received your message and will get back to you at ${email} soon.`;
  thankYouNote.appendChild(text);
  form.reset();
}

function updateHeroImage() {
  if (window.innerWidth < 768) {
    heroImage.src = "./assets/Iphone.png";
    heroImage.alt = "Iphone";
  } else {
    heroImage.src = "./assets/Ipad.png";
    heroImage.alt = "Ipad";
  }
}

window.addEventListener("resize", () => {
  updateHeroImage();
});

window.addEventListener("load", () => {
  updateHeroImage();
});
