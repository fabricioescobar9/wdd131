const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `©${today.getFullYear()}`;

let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModified}`;