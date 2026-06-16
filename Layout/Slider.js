function sliderbaracess() {
    const logoutbtn = document.getElementById("logoutbtn");
    const username = localStorage.getItem("username");
    document.getElementById("name").textContent = username;

    const closingbar = document.getElementById("closingbar");

    closingbar.addEventListener("click", () => {
        document.getElementById("sidebar").classList.add("translate-x-full");
        });
         logoutbtn.addEventListener("click", () => {
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("username");
                    window.location.href = "index.html";
                
    });
}