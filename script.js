document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const year = document.getElementById("year");
  const form = document.getElementById("contactForm");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-theme");
    updateThemeIcon(true);
  } else {
    updateThemeIcon(false);
  }

  function updateThemeIcon(isLight) {
    const icon = themeToggle?.querySelector(".theme-toggle-icon");
    if (!icon) return;
    icon.textContent = isLight ? "☀" : "☾";
  }

  themeToggle?.addEventListener("click", () => {
    const isLight = body.classList.toggle("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    updateThemeIcon(isLight);
  });

  navToggle?.addEventListener("click", () => {
    const isOpen = navMenu?.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealItems.forEach((item) => observer.observe(item));

  const validateField = (input) => {
    const field = input.closest(".form-field");
    const error = field?.querySelector(".error-message");
    let message = "";

    if (!input.value.trim()) {
      message = "Este campo é obrigatório.";
    } else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      message = "Introduz um email válido.";
    }

    if (error) {
      error.textContent = message;
    }

    input.setAttribute("aria-invalid", message ? "true" : "false");
    return !message;
  };

  form?.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      if (input.value.trim()) {
        validateField(input);
      }
    });
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = form.querySelectorAll("input, textarea");
    let isValid = true;

    fields.forEach((field) => {
      const fieldIsValid = validateField(field);
      if (!fieldIsValid) isValid = false;
    });

    if (isValid) {
      const name = form.querySelector("#name").value.trim();
      alert(`Obrigado, ${name}! A tua mensagem foi enviada com sucesso.`);
      form.reset();
    }
  });

  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
