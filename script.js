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
    
});

function openModal(title, imageName, description, price) {
    const modalImage = document.getElementById("modalImage");
    
    // Ensure the correct path for images
    modalImage.src = `assets/${imageName}`;  // ✅ Ensure image loads correctly
    modalImage.alt = title; // ✅ Add proper alt text

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("modalPrice").innerText = price;

    document.getElementById("menuModal").style.display = "flex";
}

/* Close Modal */
function closeModal() {
    document.getElementById("menuModal").style.display = "none";
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
