const menuButton =
    document.getElementById("menuButton");

const closeButton =
    document.getElementById("closeButton");

const menuOverlay =
    document.getElementById("menuOverlay");


function closeMenu() {

    if (menuOverlay) {
        menuOverlay.classList.remove("active");
    }

    document.body.style.overflow = "";

}


if (menuButton && menuOverlay) {

    menuButton.addEventListener(
        "click",
        function () {

            menuOverlay.classList.add("active");

            document.body.style.overflow =
                "hidden";

        }
    );

}


if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeMenu
    );

}


if (menuOverlay) {

    menuOverlay.addEventListener(
        "click",
        function (event) {

            if (event.target === menuOverlay) {
                closeMenu();
            }

        }
    );

}


document
    .querySelectorAll(".menu-link")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeMenu();
        }

    }
);


/* LANGUAGE */

const grBtn =
    document.getElementById("grBtn");

const enBtn =
    document.getElementById("enBtn");


let currentLanguage =
    localStorage.getItem("siteLanguage") || "en";


/* IDEA */

const ideaOptions =
    document.querySelectorAll(".idea-option");

const ideaTitle =
    document.getElementById("ideaTitle");

const ideaText =
    document.getElementById("ideaText");

const ideaTags =
    document.getElementById("ideaTags");


const ideas = {

    app: {

        en: {
            title: "Build an App.",
            text: "From a simple concept to a working application, we turn ideas into something people can actually use.",
            tags: [
                "UX / UI",
                "DEVELOPMENT",
                "WEB / MOBILE"
            ]
        },

        el: {
            title: "Δημιούργησε ένα App.",
            text: "Από μια απλή ιδέα μέχρι μια λειτουργική εφαρμογή, μετατρέπουμε τις ιδέες σε κάτι που οι άνθρωποι μπορούν πραγματικά να χρησιμοποιήσουν.",
            tags: [
                "UX / UI",
                "DEVELOPMENT",
                "WEB / MOBILE"
            ]
        }

    },


    website: {

        en: {
            title: "Build a Website.",
            text: "From a simple page to a complete digital presence, we create modern websites built around your idea.",
            tags: [
                "DESIGN",
                "DEVELOPMENT",
                "RESPONSIVE"
            ]
        },

        el: {
            title: "Δημιούργησε ένα Website.",
            text: "Από μια απλή σελίδα μέχρι μια ολοκληρωμένη digital παρουσία, δημιουργούμε σύγχρονα websites γύρω από την ιδέα σου.",
            tags: [
                "DESIGN",
                "DEVELOPMENT",
                "RESPONSIVE"
            ]
        }

    },


    tool: {

        en: {
            title: "Build a Digital Tool.",
            text: "Small tools can solve specific problems. We turn useful ideas into simple digital experiences.",
            tags: [
                "UX / UI",
                "FUNCTIONALITY",
                "WEB"
            ]
        },

        el: {
            title: "Δημιούργησε ένα Digital Tool.",
            text: "Μικρά εργαλεία μπορούν να λύσουν συγκεκριμένα προβλήματα. Μετατρέπουμε χρήσιμες ιδέες σε απλές digital εμπειρίες.",
            tags: [
                "UX / UI",
                "FUNCTIONALITY",
                "WEB"
            ]
        }

    },


    creative: {

        en: {
            title: "Build Something Different.",
            text: "Have an idea that does not fit into a category? Tell us about it and let's see where it goes.",
            tags: [
                "IDEA",
                "DESIGN",
                "CREATIVE"
            ]
        },

        el: {
            title: "Δημιούργησε κάτι διαφορετικό.",
            text: "Έχεις μια ιδέα που δεν ταιριάζει σε κάποια κατηγορία; Πες μας γι' αυτήν και ας δούμε πού μπορεί να οδηγήσει.",
            tags: [
                "IDEA",
                "DESIGN",
                "CREATIVE"
            ]
        }

    }

};


function updateIdea(type) {

    if (
        !ideaTitle ||
        !ideaText ||
        !ideaTags
    ) {
        return;
    }


    const selectedIdea =
        ideas[type];


    if (!selectedIdea) {
        return;
    }


    const content =
        selectedIdea[currentLanguage];


    ideaTitle.textContent =
        content.title;


    ideaText.textContent =
        content.text;


    ideaTags.innerHTML = "";


    content.tags.forEach(
        function (tag) {

            const span =
                document.createElement("span");

            span.textContent = tag;

            ideaTags.appendChild(span);

        }
    );

}


function updateActiveIdea() {

    const activeIdea =
        document.querySelector(
            ".idea-option.active"
        );


    if (activeIdea) {

        updateIdea(
            activeIdea.dataset.type
        );

    }

}


ideaOptions.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function () {

                ideaOptions.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                option.classList.add(
                    "active"
                );


                updateIdea(
                    option.dataset.type
                );

            }
        );

    }
);


/* CHANGE LANGUAGE */

function changeLanguage(language) {

    if (
        language !== "el" &&
        language !== "en"
    ) {

        language = "en";

    }


    currentLanguage = language;


    document.documentElement.lang =
        language;


    document
        .querySelectorAll("[data-en][data-el]")
        .forEach(
            function (element) {

                if (language === "el") {

                    element.textContent =
                        element.dataset.el;

                } else {

                    element.textContent =
                        element.dataset.en;

                }

            }
        );


    if (grBtn) {

        grBtn.classList.toggle(
            "active",
            language === "el"
        );

    }


    if (enBtn) {

        enBtn.classList.toggle(
            "active",
            language === "en"
        );

    }


    localStorage.setItem(
        "siteLanguage",
        language
    );


    updateActiveIdea();

}


if (grBtn) {

    grBtn.addEventListener(
        "click",
        function () {

            changeLanguage("el");

        }
    );

}


if (enBtn) {

    enBtn.addEventListener(
        "click",
        function () {

            changeLanguage("en");

        }
    );

}


/* CONTACT */

const contactChoices =
    document.querySelectorAll(
        ".contact-choice"
    );


const gmailButton =
    document.getElementById(
        "gmailButton"
    );


let selectedProject =
    "Website";


contactChoices.forEach(
    function (choice) {

        choice.addEventListener(
            "click",
            function () {

                contactChoices.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                choice.classList.add(
                    "active"
                );


                selectedProject =
                    choice.dataset.project;

            }
        );

    }
);


if (gmailButton) {

    gmailButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const subject =
                encodeURIComponent(

                    "3POINT STUDIO - " +
                    selectedProject +
                    " Project"

                );


            const gmailURL =

                "https://mail.google.com/mail/u/0/?fs=1" +

                "&to=threepointstudioath@gmail.com" +

                "&su=" +
                subject +

                "&tf=cm";


            window.open(
                gmailURL,
                "_blank"
            );

        }
    );

}


changeLanguage(
    currentLanguage
);