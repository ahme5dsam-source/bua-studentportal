document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "ahmed.2024017716@bua.edu.eg" && password === "@Hme5d555") {

        window.location.href = "dashboard.html";

    } else {

        alert("❌ Wrong Username or Password");

    }

});

function togglePassword() {

    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

}