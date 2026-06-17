document.addEventListener("DOMContentLoaded", () => {
 fetch("../Layout/Slider.html")
.then(res => res.text())
.then(data => {
      document.getElementById("slide-container").innerHTML = data;
      sliderbaracess();
      setupHeader();
});
});
function sliderbaracess() {
    const logoutbtn = document.getElementById("logoutbtn");
    const username = localStorage.getItem("username");
    const sidebar = document.getElementById("sidebar");
    const closingbar = document.getElementById("closingbar");
    const nameEl = document.getElementById("name");
if (nameEl) {
   nameEl.textContent = username;
}document.getElementById("name").textContent = username;
console.log(closingbar,sidebar)
 if (closingbar && sidebar) {   
    closingbar.addEventListener("click", () => {
        document.getElementById("sidebar").classList.add("translate-x-full");
        });
    }if (logoutbtn) {
    logoutbtn.addEventListener("click", () => {
        Swal.fire({
            title: "Logout?",
            text: "Are you sure you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#16a34a",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Yes, Logout",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("username");
                Swal.fire({
                    title: "Logged Out!",
                    text: "You have been logged out successfully.",
                    icon: "success",
                    confirmButtonColor: "#16a34a",
                    timer: 1500,         
                    showConfirmButton: false
                }).then(() => {
                    window.location.href = "/index.html";
                });
            }
        });
    });
}
}
function setupHeader() {
    const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}
const themeBtn = document.getElementById("themeToggle");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }
 let btn = document.getElementById("btn");
 let started = document.getElementById("start");
 let username = localStorage.getItem("username");
 let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
 let userSection = document.getElementById("userSection");
 if (btn) {
   btn.addEventListener("click", () => {
     window.location.href = "signup.html";
   });
 }
 if (started) {
   started.addEventListener("click", () => {
     window.location.href = "login.html";
   });
 }
 if (isLoggedIn) {
   if (btn) btn.style.display = "none";
   if (started) started.style.display = "none";
 }

 if (isLoggedIn && userSection) {
   userSection.innerHTML = `
      <span id="profilebtn" class="flex items-center gap-3 px-4 py-2">
        <i id="userbtn" class="fa-solid fa-circle-user text-2xl cursor-pointer"></i> 
        <span class="text-sm cursor-pointer">${username}</span>
      </span>
   `;
const userbtn = document.getElementById("userbtn");
if (userbtn) {
  userbtn.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) sidebar.classList.remove("translate-x-full"); 
  });
}

  //  const profilebutton = document.getElementById("profilebtn");
  //  profilebutton.addEventListener("click", () => {
  //    if (document.getElementById("logoutBtn")) return;

  //    const logoutbtn = document.createElement("div");
  //    logoutbtn.innerHTML = `
  //       <button id="logoutBtn"
  //       class="absolute top-15 text-sm bg-white text-red-500 hover:bg-gray-100 cursor-pointer rounded-lg p-2 z-10 font-sans right-8">
  //       Log out
  //       </button>
  //    `;

  //    userSection.append(logoutbtn);

  //    document.getElementById("logoutBtn")
  //      .addEventListener("click", () => {
  //        localStorage.removeItem("isLoggedIn");
  //        localStorage.removeItem("username");
  //        window.location.href = "index.html";
  //      });
  //  });
 }
 const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
});
}