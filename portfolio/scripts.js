// ================= TEST =================

console.log("Portfolio JavaScript loaded!");


// ================= MOBILE MENU =================

const menuButton = document.querySelector("#menu-btn");

const navLinks = document.querySelector("#nav-links");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ================= CLOSE MOBILE MENU =================

const navItems = document.querySelectorAll("#nav-links a");


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================= HERO BUTTON =================

const projectButton = document.querySelector("#project-btn");


if (projectButton) {

    projectButton.addEventListener("click", function () {

        console.log("View My Work clicked!");

    });

}


// ================= CONTACT FORM =================

const form = document.querySelector("#contact-form");

const formMessage = document.querySelector("#form-message");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.querySelector("#name").value.trim();


    const email =
        document.querySelector("#email").value.trim();


    const subject =
        document.querySelector("#subject").value.trim();


    const message =
        document.querySelector("#message").value.trim();


    // Check empty fields

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;

    }


    // Check email

    if (!email.includes("@")) {

        formMessage.textContent =
            "Please enter a valid email.";

        return;

    }


    // Success

    formMessage.textContent =
        "Thank you! Your message is ready to send.";


    form.reset();

});