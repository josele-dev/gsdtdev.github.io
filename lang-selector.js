document.addEventListener('DOMContentLoaded', () => {
    const resources = {
        es: {
            translation: {
                "hero": {
                    "title": "Un <strong>panel</strong>, todo el control: <strong>contenido</strong> y <strong>datos</strong> al alcance de tu mano.",
                    "subtitle": "PRÓXIMAMENTE. APLICACIÓN WEB EN LA NUBE."
                },
                "cta": {
                    "title": "Stop guessing. Start GSDT.",
                    "description": "Conecta tus assets, prueba tus ideas y domina la lógica de tu juego en minutos. Valida, prototipa y acelera tu desarrollo sin perder un segundo. Tu juego, tu estructura, tu control...ahora a velocidad. <strong>¿Listo para transformar tu concepto en código jugable?</strong>",
                    "btn-dossier": "<i class='fa-solid fa-file-pdf'></i> Dossier",
                    "btn-launch": "<i class='fa-solid fa-rocket'></i> Launch Club",
                    "btn-presskit": "<i class='fa-solid fa-box-archive'></i> Presskit"
                },
                "target": {
                    "title": "Apunto solo a los que marcan el ritmo",
                    "designers": "DISEÑADORES",
                    "programmers": "PROGRAMADORES",
                    "educators": "EDUCADORES",
                    "modders": "CREADORES DE MODS"
                },
                "footer": {
                    "copy": "MIT License Copyright (c) 2025 José Aracil"
                }
            }
        },
        gb: {
            translation: {
                "hero": {
                    "title": "One <strong>panel</strong>, all the control: <strong>content</strong> and <strong>data</strong> at your fingertips.",
                    "subtitle": "COMING SOON. CLOUD WEB APPLICATION."
                },
                "cta": {
                    "title": "Stop guessing. Start GSDT.",
                    "description": "Connect your assets, test your ideas, and master your game logic in minutes. Validate, prototype, and speed up your development without losing a second. Your game, your structure, your control... now at speed. <strong>Ready to transform your concept into playable code?</strong>",
                    "btn-dossier": "<i class='fa-solid fa-file-pdf'></i> Dossier",
                    "btn-launch": "<i class='fa-solid fa-rocket'></i> Launch Club",
                    "btn-presskit": "<i class='fa-solid fa-box-archive'></i> Presskit"
                },
                "target": {
                    "title": "I go after the ones who set the pace",
                    "designers": "DESIGNERS",
                    "programmers": "PROGRAMMERS",
                    "educators": "EDUCATORS",
                    "modders": "MOD CREATORS"
                },
                "footer": {
                    "copy": "MIT License Copyright (c) 2025 José Aracil"
                }
            }
        },
        ca: {
            translation: {
                "hero": {
                    "title": "Un <strong>panell</strong>, tot el control: <strong>contingut</strong> i <strong>dades</strong> al teu abast.",
                    "subtitle": "PROPERAMENT. APLICACIÓ WEB AL NÚVOL."
                },
                "cta": {
                    "title": "Stop guessing. Start GSDT.",
                    "description": "Connecta els teus assets, prova les teves idees i domina la lògica del teu joc en minuts. Valida, prototipa i accelera el teu desenvolupament sense perdre un segon. El teu joc, la teva estructura, el teu control... ara a velocitat. <strong>Llest per transformar el teu concepte en codi jugable?</strong>",
                    "btn-dossier": "<i class='fa-solid fa-file-pdf'></i> Dossier",
                    "btn-launch": "<i class='fa-solid fa-rocket'></i> Launch Club",
                    "btn-presskit": "<i class='fa-solid fa-box-archive'></i> Presskit"
                },
                "target": {
                    "title": "Apunto només als que marquen el ritme",
                    "designers": "DISSENYADORS",
                    "programmers": "PROGRAMADORS",
                    "educators": "EDUCADORS",
                    "modders": "CREADORS DE MODS"
                },
                "footer": {
                    "copy": "MIT License Copyright (c) 2025 José Aracil"
                }
            }
        }
    };
	
    const savedLang = localStorage.getItem('gsdt_lang');
    const browserLang = navigator.language.split('-')[0]; 
    const defaultLang = savedLang || (resources[browserLang] ? browserLang : 'es');

    const langMenu = document.getElementById('lang-menu');
    const selectedText = langMenu.querySelector('.lang-selected span');
    const options = langMenu.querySelectorAll('.lang-dropdown li');

    i18next.init({
        lng: defaultLang,
        resources
    }, function(err, t) {
        updateContent();
        updateActiveUI(defaultLang);
    });

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.innerHTML = i18next.t(key);
        });
    }

    function updateActiveUI(langCode) {
        selectedText.innerText = langCode.toUpperCase();
        options.forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-value') === langCode);
        });
    }

    langMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('open');
    });

    options.forEach(option => {
        option.addEventListener('click', (e) => {
            const newLang = e.target.getAttribute('data-value');
            
            i18next.changeLanguage(newLang, (err, t) => {
                if (err) return console.error(err);
                
                updateContent();
                updateActiveUI(newLang);
                localStorage.setItem('gsdt_lang', newLang);
            });
        });
    });

    window.addEventListener('click', () => langMenu.classList.remove('open'));
});