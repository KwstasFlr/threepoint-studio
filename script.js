/* =========================
   MENU
========================= */

const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const menuOverlay = document.getElementById("menuOverlay");
const menuLinks = document.querySelectorAll(".menu-link");

function openMenu() {
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

menuButton.addEventListener("click", openMenu);

closeButton.addEventListener("click", closeMenu);

menuOverlay.addEventListener("click", function(event) {
    if (event.target === menuOverlay) {
        closeMenu();
    }
});

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        closeMenu();
    });
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});


/* =========================
   INTERACTIVE IDEA
========================= */

const ideaOptions = document.querySelectorAll(".idea-option");

const ideaTitle = document.getElementById("ideaTitle");
const ideaText = document.getElementById("ideaText");
const ideaTags = document.getElementById("ideaTags");

const ideaData = {

    app: {
        title: "Build an App.",
        text: "From a simple concept to a working application, we turn ideas into something people can actually use.",
        tags: [
            "UX / UI",
            "DEVELOPMENT",
            "WEB / MOBILE"
        ]
    },

    website: {
        title: "Build a Website.",
        text: "A modern digital presence designed around your idea, your audience and the way people actually use the web.",
        tags: [
            "DESIGN",
            "DEVELOPMENT",
            "RESPONSIVE"
        ]
    },

    tool: {
        title: "Build a Digital Tool.",
        text: "Small, focused digital tools that make a specific task easier, faster or simply better.",
        tags: [
            "FUNCTIONAL",
            "WEB APP",
            "AUTOMATION"
        ]
    },

    creative: {
        title: "Build Something Different.",
        text: "Not every idea fits into a category. Some projects start simply because we want to see what we can create.",
        tags: [
            "CREATIVE",
            "EXPERIMENTAL",
            "DIGITAL"
        ]
    }

};

ideaOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        const type = this.dataset.type;
        const data = ideaData[type];

        if (!data) {
            return;
        }

        ideaOptions.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

        ideaTitle.textContent = data.title;

        ideaText.textContent = data.text;

        ideaTags.innerHTML = "";

        data.tags.forEach(function(tag) {

            const span = document.createElement("span");

            span.textContent = tag;

            ideaTags.appendChild(span);

        });

    });

});