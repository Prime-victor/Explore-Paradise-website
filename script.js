document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.style.color = "red";
            formMessage.textContent = "All fields are required!";
            return;
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            formMessage.style.color = "red";
            formMessage.textContent = "Please enter a valid email address!";
            return;
        }
        formMessage.style.color = "green";
        formMessage.textContent = "Your message has been sent successfully!";

        contactForm.reset();

        setTimeout(() => {
            formMessage.textContent = "";
        }, 3000);
    });
});
