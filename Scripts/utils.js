function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

function getUsername() {
  return localStorage.getItem("username") || "";
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  window.location.href = "/";
}

function showToast(icon, title, timer = 3000) {
  Swal.fire({
    icon,
    title,
    timer,
    showConfirmButton: false,
    toast: true,
    position: "top-end",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
}

function fireConfetti() {
  if (typeof confetti === "undefined") return;
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#16a34a", "#22c55e", "#ed6618", "#fbbf24", "#3b82f6"]
  });
  setTimeout(() => {
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  }, 200);
}

function setupNavAuth(headerSelector = "header") {
  const header = document.querySelector(headerSelector);
  if (!header) return;

  const nav = header.querySelector("nav") || header;
  const userSection = nav.querySelector("#userSection") || document.getElementById("userSection");
  if (!userSection) return;

  const loggedIn = isLoggedIn();
  const username = getUsername();

  if (loggedIn && username) {
    userSection.innerHTML = `
      <div class="relative flex items-center gap-3 px-4 py-2">
        <i class="fa-solid fa-bell p-2 text-xl cursor-pointer hover:scale-110 transition-transform duration-300"></i>
        <p class="leading-10 text-gray-300">|</p>
        <i class="fa-solid fa-circle-user text-2xl cursor-pointer hover:scale-110 transition-transform duration-300"></i>
        <span id="profilebtn" class="text-sm cursor-pointer font-medium hover:text-green-300 transition-colors duration-300">${username}</span>
      </div>
    `;

    document.getElementById("profilebtn")?.addEventListener("click", () => {
      const existing = document.getElementById("logoutDropdown");
      if (existing) {
        existing.remove();
        return;
      }
      const dropdown = document.createElement("div");
      dropdown.id = "logoutDropdown";
      dropdown.className = "absolute top-16 right-4 bg-white text-red-500 rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-scale-in";
      dropdown.style.minWidth = "140px";
      dropdown.innerHTML = `
        <div class="px-4 py-2 text-xs text-gray-400 border-b border-gray-100">${username}</div>
        <button id="logoutBtn" class="w-full text-left px-4 py-2.5 text-sm hover:bg-red-50 transition-colors duration-200 flex items-center gap-2">
          <i class="fa-solid fa-right-from-bracket"></i> Log out
        </button>
      `;
      nav.appendChild(dropdown);
      document.getElementById("logoutBtn")?.addEventListener("click", logout);

      document.addEventListener("click", function closeDropdown(e) {
        if (!dropdown.contains(e.target) && e.target.id !== "profilebtn") {
          dropdown.remove();
          document.removeEventListener("click", closeDropdown);
        }
      });
    });
  }
}

function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  revealElements.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", setupScrollReveal);
