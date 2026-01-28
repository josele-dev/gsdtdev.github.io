document.addEventListener("DOMContentLoaded", () => {

    const languages = ["es", "en", "ca"]; 
    let index = 0;

    const langMenu = document.getElementById("lang-menu");
    const langText = langMenu.querySelector("span");


    i18next.init({
        lng: languages[index], 
        debug: true,
        resources: {
            es: {
                translation: {
                    "hero.title": "Un <strong>panel</strong>, todo el control: <strong>contenido</strong> y <strong>datos</strong> al alcance de tu mano.",
                    "hero.subtitle": "PRÓXIMAMENTE. APLICACIÓN WEB EN LA NUBE.",
                    "cta.title": "Stop guessing. Start GSDT.",
                    "cta.description": "Conecta tus assets, prueba tus ideas y domina la lógica de tu juego en minutos. Valida, prototipa y acelera tu desarrollo sin perder un segundo. Tu juego, tu estructura, tu control...ahora a velocidad. <strong>¿Listo para transformar tu concepto en código jugable?</strong>",
                    "cta.btn-dossier": "Dossier",
                    "cta.btn-launch": "Launch Club",
                    "cta.btn-presskit": "Presskit",
                    "target.title": "Apunto solo a los que marcan el ritmo",
                    "target.designers": "DISEÑADORES",
                    "target.programmers": "PROGRAMADORES",
                    "target.educators": "EDUCADORES",
                    "target.modders": "CREADORES DE MODS",
                    "footer.copy": "MIT License Copyright (c) 2025 José Aracil"
                }
            },
            en: {
                translation: {
                    "hero.title": "One <strong>panel</strong>, full control: <strong>content</strong> and <strong>data</strong> at your fingertips.",
                    "hero.subtitle": "COMING SOON. CLOUD WEB APPLICATION.",
                    "cta.title": "Stop guessing. Start GSDT.",
                    "cta.description": "Connect your assets, test your ideas and master your game's logic in minutes. Validate, prototype and accelerate development without wasting a second. Your game, your structure, your control... now at speed. <strong>Ready to turn your concept into playable code?</strong>",
                    "cta.btn-dossier": "Dossier",
                    "cta.btn-launch": "Launch Club",
                    "cta.btn-presskit": "Presskit",
                    "target.title": "Only aiming at those who set the pace",
                    "target.designers": "DESIGNERS",
                    "target.programmers": "PROGRAMMERS",
                    "target.educators": "EDUCATORS",
                    "target.modders": "MODDERS",
                    "footer.copy": "MIT License Copyright (c) 2025 José Aracil"
                }
            },
            ca: {
                translation: {
                    "hero.title": "Un <strong>panell</strong>, tot el control: <strong>contingut</strong> i <strong>dades</strong> a l'abast de la teva mà.",
                    "hero.subtitle": "PRÒXIMAMENT. APLICACIÓ WEB AL NÚVOL.",
                    "cta.title": "Stop guessing. Start GSDT.",
                    "cta.description": "Connecta els teus assets, prova les teves idees i domina la lògica del teu joc en minuts. Valida, prototipa i accelera el desenvolupament sense perdre ni un segon. El teu joc, la teva estructura, el teu control... ara a velocitat. <strong>Llist per transformar el teu concepte en codi jugable?</strong>",
                    "cta.btn-dossier": "Dossier",
                    "cta.btn-launch": "Launch Club",
                    "cta.btn-presskit": "Presskit",
                    "target.title": "Només apunto als que marquen el ritme",
                    "target.designers": "DISSENYADORS",
                    "target.programmers": "PROGRAMADORS",
                    "target.educators": "EDUCADORS",
                    "target.modders": "CREADORS DE MODS",
                    "footer.copy": "MIT License Copyright (c) 2025 José Aracil"
                }
            }
        }
    }, function(err, t) {
        updateContent();
    });


    function updateContent() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.innerHTML = i18next.t(key);
        });
    }


    langMenu.addEventListener("click", () => {
        index = (index + 1) % languages.length;
        const newLang = languages[index];
        langText.textContent = newLang.toUpperCase();
        i18next.changeLanguage(newLang, () => {
            updateContent();
            console.log("Idioma cambiado a:", newLang);
        });
    });
});
