
console.log("theme loaded");
document.addEventListener("DOMContentLoaded", () => {
    applyTheme();

    const btn = document.getElementById("themeToggle");
    if (btn) {
        btn.addEventListener("click", toggleTheme);
    }
});

function applyTheme() {
    const theme = localStorage.getItem("theme") || "light";

    if (theme === "dark") {
        document.body.classList.add("bg-gray-900", "text-white");
    } else {
        document.body.classList.remove("bg-gray-900", "text-white");
    }

    document.querySelectorAll(".theme-nav").forEach(nav => {
        if (theme === "dark") {
            nav.classList.remove("from-green-600", "to-green-900");
            nav.classList.add("from-gray-800", "to-black");
        } else {
            nav.classList.remove("from-gray-800", "to-black");
            nav.classList.add("from-green-600", "to-green-900");
        }
    });

   document.querySelectorAll(".theme-card").forEach(card => {
    const title = card.querySelector("h2");
    const para = card.querySelector("p");

    if (theme === "dark") {
        card.classList.remove("bg-white");
        card.classList.add("bg-gray-800", "text-white");

        if (title) {
            title.classList.remove("text-gray-800");
            title.classList.add("text-white");
        }

        if (para) {
            para.classList.remove("text-gray-600");
            para.classList.add("text-gray-300");
        }

    } else {
        card.classList.remove("bg-gray-800", "text-white");
        card.classList.add("bg-white");

        if (title) {
            title.classList.remove("text-white");
            title.classList.add("text-gray-800");
        }

        if (para) {
            para.classList.remove("text-gray-300");
            para.classList.add("text-gray-600");
        }
    }
});
document.querySelectorAll(".theme-title").forEach(title => {
    if (theme === "dark") {
        title.classList.remove("text-gray-800");
        title.classList.add("text-white");
    } else {
        title.classList.remove("text-white");
        title.classList.add("text-gray-800");
    }
});
}

function toggleTheme() {
    let current = localStorage.getItem("theme") || "light";
    localStorage.setItem("theme", current === "light" ? "dark" : "light");
    applyTheme();
}