// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navbar Links
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Add background color to navbar on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-light", "shadow-sm");
        } else {
            navbar.classList.remove("bg-light", "shadow-sm");
        }
    });
});

// Function to Open the Modal
function openModal(title, image, description, price) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('menuModal').style.display = 'flex';
}

// Function to Close the Modal
function closeModal() {
    document.getElementById('menuModal').style.display = 'none';
}

// Event Listener to Close Modal When Clicking Outside
window.onclick = function(event) {
    let modal = document.getElementById('menuModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Search Menu Items
function searchMenu() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        let itemName = item.getAttribute('data-name');
        if (itemName.includes(input)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}
