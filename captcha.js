// Generate a random CAPTCHA string
function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const captchaLength = 6;
    let captcha = "";
    for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters.charAt(randomIndex);
    }
    return captcha;
}
// Display the CAPTCHA in the HTML
function displayCaptcha() {
    const captchaText = generateCaptcha();
    document.getElementById("captcha").innerText = captchaText;
}
// Validate the user's input
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userCaptcha = document.getElementById("captchaInput").value;
    const captchaText = document.getElementById("captcha").innerText;

    if (username === "santosh" && password === "123" && userCaptcha === captchaText) {
        window.location.href = "logout.html";
        // You can redirect to a different page or perform further actions upon successful login.
    } else {
        document.getElementById("loginStatus").innerText = "Login failed. Please check your credentials and CAPTCHA.";
        // You can handle failed login attempts here.
    }

    // Regenerate a new CAPTCHA
    displayCaptcha();
}
// Initialize the CAPTCHA when the page loads
window.onload = function() {
    displayCaptcha();
};
