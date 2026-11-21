// Contact Form
let contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.querySelector("#contact-name").value.trim();

    let oldMessage = document.querySelector(".form-success");

    if (oldMessage) {
      oldMessage.remove();
    }

    let successMessage = document.createElement("div");

    successMessage.classList.add("form-success");

    successMessage.textContent = `ممنون ${name} عزیز! پیام شما با موفقیت ثبت شد.`;

    contactForm.insertAdjacentElement("afterend", successMessage);

    contactForm.reset();
  });
}

// Scroll Reveal Animation
let revealElements = document.querySelectorAll(
  ".section-heading, .service-card, .about-content, .about-visual, .portfolio-card, .testimonial-card, .contact-info, .contact-form-wrapper",
);

let revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach(function (element) {
  element.classList.add("reveal");
  revealObserver.observe(element);
});

// Active Navigation Link
let sections = document.querySelectorAll("main section[id]");
let navLinks = document.querySelectorAll(".nav-links a");

let activeSectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.classList.remove("active-link");

          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active-link");
          }
        });
      }
    });
  },
  {
    threshold: 0.3,
  },
);

sections.forEach(function (section) {
  activeSectionObserver.observe(section);
});
// Mobile Navigation
// Mobile Navigation
let menuToggle = document.querySelector("#menu-toggle");
let mobileNav = document.querySelector(".nav-links");
let menuOverlay = document.querySelector("#menu-overlay");

if (menuToggle && mobileNav && menuOverlay) {
  function closeMenu() {
    mobileNav.classList.remove("active");
    menuOverlay.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

  menuToggle.addEventListener("click", function () {
    let isOpen = mobileNav.classList.toggle("active");

    menuOverlay.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  menuOverlay.addEventListener("click", closeMenu);

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
// 3D Service Cards
let serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(function (card) {
  card.addEventListener("mousemove", function (event) {
    let rect = card.getBoundingClientRect();

    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    let centerX = rect.width / 2;
    let centerY = rect.height / 2;

    let rotateX = (centerY - mouseY) / 18;
    let rotateY = (mouseX - centerX) / 18;

    card.style.setProperty("--mouse-x", mouseX + "px");
    card.style.setProperty("--mouse-y", mouseY + "px");

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "";
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  });
});
// Animated Statistics Counter

let statNumbers = document.querySelectorAll(".stat-number");

let statsObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        let number = entry.target;
        let target = Number(number.dataset.target);
        let duration = 2000;
        let startTime = null;

        function updateCounter(timestamp) {
          if (!startTime) {
            startTime = timestamp;
          }

          let progress = Math.min((timestamp - startTime) / duration, 1);

          let currentNumber = Math.floor(progress * target);

          number.textContent = currentNumber.toLocaleString("fa-IR");

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            number.textContent = target.toLocaleString("fa-IR");
          }
        }

        requestAnimationFrame(updateCounter);

        statsObserver.unobserve(number);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

statNumbers.forEach(function (number) {
  statsObserver.observe(number);
});
// Statistics Cards Animation

let statCards = document.querySelectorAll(".stat-card");

let statCardsObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        statCardsObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

statCards.forEach(function (card) {
  statCardsObserver.observe(card);
});
// Statistics Cards Mouse Glow

statCards.forEach(function (card) {
  card.addEventListener("mousemove", function (event) {
    let rect = card.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", x + "px");
    card.style.setProperty("--mouse-y", y + "px");
  });

  card.addEventListener("mouseleave", function () {
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  });
});

// Process Steps Scroll Animation

let processSteps = document.querySelectorAll(".process-step");

let processObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        processObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

processSteps.forEach(function (step) {
  processObserver.observe(step);
});

// Process Cards Spotlight Effect

processSteps.forEach(function (card) {
  card.addEventListener("mousemove", function (event) {
    let rect = card.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", x + "px");
    card.style.setProperty("--mouse-y", y + "px");
  });

  card.addEventListener("mouseleave", function () {
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  });
});

/* Process Active Step on Scroll */

let processFocusObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-focus");
      } else {
        entry.target.classList.remove("in-focus");
      }
    });
  },
  {
    threshold: 0.65,
  },
);

processSteps.forEach(function (step) {
  processFocusObserver.observe(step);
});

// Process 3D Tilt Effect

processSteps.forEach(function (card) {
  card.addEventListener("mousemove", function (event) {
    let rect = card.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    let centerX = rect.width / 2;
    let centerY = rect.height / 2;

    let rotateX = (centerY - y) / 18;
    let rotateY = (x - centerX) / 18;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "";
  });
});

// Portfolio Filter

let filterButtons = document.querySelectorAll(".filter-btn");
let portfolioCards = document.querySelectorAll(".portfolio-card");
let portfolioEmpty = document.querySelector(".portfolio-empty");

// Update Portfolio Filter

function updatePortfolio(filter) {
  let visibleCount = 0;

  portfolioCards.forEach(function (card) {
    let shouldShow = filter === "all" || card.dataset.category === filter;

    card.classList.remove("filter-show");

    if (shouldShow) {
      visibleCount++;
      card.style.display = "block";

      requestAnimationFrame(function () {
        card.classList.remove("filter-hidden");
        card.classList.add("filter-show");
      });
    } else {
      card.classList.add("filter-hidden");

      setTimeout(function () {
        if (card.classList.contains("filter-hidden")) {
          card.style.display = "none";
        }
      }, 350);
    }
  });

  if (portfolioEmpty) {
    portfolioEmpty.style.display = visibleCount === 0 ? "flex" : "none";
  }

  return visibleCount;
}

// Filter Buttons

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let selectedFilter = button.dataset.filter;

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    updatePortfolio(selectedFilter);
  });
});

// Update Filter Counts

filterButtons.forEach(function (button) {
  let filter = button.dataset.filter;
  let count = updatePortfolioCount(filter);

  let countElement = button.querySelector(".filter-count");

  if (countElement) {
    countElement.textContent = String(count).padStart(2, "0");
  }
});

function updatePortfolioCount(filter) {
  return Array.from(portfolioCards).filter(function (card) {
    return filter === "all" || card.dataset.category === filter;
  }).length;
}
// Update Portfolio Filter Counts

filterButtons.forEach(function (button) {
  let filter = button.dataset.filter;
  let count = 0;

  portfolioCards.forEach(function (card) {
    if (filter === "all" || card.dataset.category === filter) {
      count++;
    }
  });

  let countElement = button.querySelector(".filter-count");

  if (countElement) {
    countElement.textContent = String(count).padStart(2, "0");
  }
});
// Portfolio Mouse Spotlight

portfolioCards.forEach(function (card) {
  card.addEventListener("mousemove", function (event) {
    let rect = card.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", x + "px");
    card.style.setProperty("--mouse-y", y + "px");
  });

  card.addEventListener("mouseleave", function () {
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  });
});
// Portfolio Modal

let portfolioModal = document.querySelector("#portfolio-modal");
let backgroundElements = document.querySelectorAll("header, main, footer");
let modalClose = document.querySelector("#modal-close");

let modalTitle = document.querySelector("#modal-title");
let modalCategory = document.querySelector("#modal-category");
let modalDescription = document.querySelector("#modal-description");
let modalTech = document.querySelector("#modal-tech");

let portfolioViews = document.querySelectorAll(".portfolio-view");
let lastFocusedView = null;
portfolioViews.forEach(function (view) {
  view.addEventListener("click", function () {
    let title = view.dataset.title;
    let category = view.dataset.category;
    let description = view.dataset.description;
    let technologies = view.dataset.tech.split(",");

    modalTitle.textContent = title;
    modalCategory.textContent = category;
    modalDescription.textContent = description;

    modalTech.innerHTML = "";

    technologies.forEach(function (tech) {
      let techItem = document.createElement("span");
      techItem.textContent = tech.trim();
      modalTech.appendChild(techItem);
    });
    lastFocusedView = view;

    document.body.classList.add("modal-open");
    portfolioModal.classList.add("active");
    backgroundElements.forEach(function (element) {
      element.inert = true;
    });

    setTimeout(function () {
      modalClose.focus();
    }, 100);
  });
  // Open Modal with Keyboard

  view.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      view.click();
    }
  });
});
// Reusable Close Modal Function

function closePortfolioModal() {
  portfolioModal.classList.remove("active");
  document.body.classList.remove("modal-open");
  backgroundElements.forEach(function (element) {
    element.inert = false;
  });

  if (lastFocusedView) {
    lastFocusedView.focus();
  }
}
// Close Modal

modalClose.addEventListener("click", function () {
  closePortfolioModal();
});

// Close Modal by Clicking Outside

portfolioModal.addEventListener("click", function (event) {
  if (event.target === portfolioModal) {
    closePortfolioModal();
  }
});

// Keep Keyboard Focus Inside Modal

portfolioModal.addEventListener("keydown", function (event) {
  if (event.key !== "Tab") return;

  let focusableElements = portfolioModal.querySelectorAll(
    'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])',
  );

  let firstElement = focusableElements[0];
  let lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
});

// Keep Keyboard Focus Inside Modal

portfolioModal.addEventListener("keydown", function (event) {
  if (event.key !== "Tab") return;

  let focusableElements = portfolioModal.querySelectorAll(
    'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])',
  );

  let firstElement = focusableElements[0];
  let lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
});

// Close Modal with Escape Key

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && portfolioModal.classList.contains("active")) {
    closePortfolioModal();
  }
});
