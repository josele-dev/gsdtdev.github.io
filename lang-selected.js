document.addEventListener("DOMContentLoaded", () => {
    const languages = ["ES", "GB", "CA"];
    let index = 0;

    const langMenu = document.getElementById("lang-menu");
    const langText = langMenu.querySelector("span");

    langMenu.addEventListener("click", () => {
        index = (index + 1) % languages.length;
        langText.textContent = languages[index];

        console.log("Idioma actual:", languages[index]);
    });
});