window.hasFired = false;
function toggleTheme() {

    if (window.hasFired !== true) {
        window.hasFired = true;
    }

    let currentTheme = document.body.getAttribute("current-theme");
    document.body.setAttribute("current-theme", ((currentTheme) == "Light" ? "Dark" : "Light"));
    let newTheme = document.body.getAttribute("current-theme");
    document.getElementById('modeLabel').textContent = newTheme + " Mode"

    let navBarParent = document.querySelector(".navbar")

    let projectsParent = document.getElementById("projects")
    let projectsCards = document.querySelectorAll(".project-card")

    let experienceParent = document.getElementById("experience")
    let experienceCards = document.querySelectorAll(".experience-card")

    let contactParent = document.getElementById("contact")

    if (newTheme == "Dark") {
        navBarParent.classList.remove("bg-light", "navbar-light")
        navBarParent.classList.add("bg-dark", "navbar-dark")

        projectsParent.classList.remove("bg-light")
        projectsParent.classList.add("bg-dark", "text-light")
        projectsCards.forEach(element => {
            element.classList.add("bg-dark")
        })

        experienceParent.classList.add("bg-dark", "text-white")
        experienceCards.forEach(element => {
            element.classList.add("bg-dark", "border", "border-white", "rounded-2")
        })

        contactParent.classList.remove("bg-light");
        contactParent.classList.add("bg-dark", "text-light");

    }
    else {
        navBarParent.classList.remove("bg-dark", "navbar-dark")
        navBarParent.classList.add("bg-light", "navbar-light")

        projectsParent.classList.remove("bg-dark", "text-light")
        projectsParent.classList.add("bg-light")
        projectsCards.forEach(element => {
            element.classList.remove("bg-dark")
        })

        experienceParent.classList.remove("bg-dark", "text-white")
        experienceCards.forEach(element => {
            element.classList.remove("bg-dark", "border", "border-white", "rounded-2")
        })

        contactParent.classList.remove("bg-dark", "text-light");
        contactParent.classList.add("bg-light");
        
    }
}
window.addEventListener("scroll", () => {

    if (window.scrollY >= 600 && !hasFired) {
        window.hasFired = true;
        console.log("passed limit - should only occur once")
        // Get the modal element
        const modal = new bootstrap.Modal(document.getElementById('themeAlertModal'));

        // Show the modal
        modal.show();
    }
})