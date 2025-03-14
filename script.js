function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = (sidebar.style.left === "0px" ? "-250px" : "0px");
}

function setActive(element, url) {
    const links = document.querySelectorAll(".sidebar a");
    links.forEach(link => link.classList.remove("active"));
    element.classList.add("active");
    
    if (url !== 'home.html') {
        window.location.href = url;
    }
}