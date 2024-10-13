// This get the current year (In this case 2024)

const currentyear = document.querySelector("#currentyear");

const today = new Date();

// This get the last modification in the code

currentyear.innerHTML = `©${today.getFullYear()}`;

let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModified}`;

const barMenu = document.querySelector(".navigation");
const hamburgerButton = document.querySelector("#menu");
const mainTitle = document.querySelector("maintitle");

hamburgerButton.addEventListener("click", () => {
    barMenu.classList.toggle("show");
    hamburgerButton.classList.toggle("show");
    mainTitle.classList.toogle("maintitle");
});