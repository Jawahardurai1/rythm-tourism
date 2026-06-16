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
        <i class="fa-solid fa-circle-user text-2xl cursor-pointer"></i> 
        <span class="text-sm cursor-pointer">${username}</span>
      </span>
   `;

   const profilebutton = document.getElementById("profilebtn");
   profilebutton.addEventListener("click", () => {
     if (document.getElementById("logoutBtn")) return;

     const logoutbtn = document.createElement("div");
     logoutbtn.innerHTML = `
        <button id="logoutBtn"
        class="absolute top-15 text-sm bg-white text-red-500 hover:bg-gray-100 cursor-pointer rounded-lg p-2 z-10 font-sans right-8">
        Log out
        </button>
     `;

     userSection.append(logoutbtn);

     document.getElementById("logoutBtn")
       .addEventListener("click", () => {
         localStorage.removeItem("isLoggedIn");
         localStorage.removeItem("username");
         window.location.href = "index.html";
       });
   });
 }
 const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
});
}