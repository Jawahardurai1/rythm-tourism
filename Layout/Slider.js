function sliderbaracess() {
    const logoutbtn = document.getElementById("logoutbtn");
    const username = localStorage.getItem("username");
    const sidebar = document.getElementById("sidebar");
    const closingbar = document.getElementById("closingbar");
    document.getElementById("name").textContent = username;

 if (closingbar && sidebar) {   
    closingbar.addEventListener("click", () => {
        document.getElementById("sidebar").classList.add("translate-x-full");
        });
    }
         if (logoutbtn) {
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