function showSection(id) {
    document.querySelectorAll('.section, .home').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function openModal(level) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const gallery = document.getElementById('modal-gallery');

    gallery.innerHTML = "";

    const images = {
        level1: ["images/project1.jpg", "images/project1-2.jpg"],
        level2: ["images/project2.jpg"],
        level3: ["images/project3.jpg"]
    };

    title.innerText = level.toUpperCase();

    images[level].forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        gallery.appendChild(img);
    });

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}