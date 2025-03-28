document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner l'élément qui contiendra les ateliers
    const container = document.getElementById("ateliers-list");

    // Importer les ateliers depuis le fichier ateliers.js
    ateliers.forEach(atelier => {
        const atelierHTML = `
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                <div class="course-item">
                    <a href="atelier-details.html" onclick="saveAtelier(${atelier.id})">
                        <img src="${atelier.image}" class="img-fluid" alt="Image de ${atelier.title}">
                    </a>
                    <div class="course-content">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4>${atelier.title}</h4>
                            <p class="price">${atelier.duration}</p>
                        </div>
                        
                        <p>${atelier.description}</p>
                        <div class="trainer d-flex justify-content-between align-items-center">
                            <div class="trainer-profile d-flex align-items-center">
                                <img src="${atelier.trainerImage}" class="img-fluid rounded-circle" alt="Photo de ${atelier.trainer}">
                                <span>${atelier.trainer}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += atelierHTML;
    });
});

function saveAtelier(atelierId) {
    const atelier = ateliers.find(a => a.id === atelierId);
    localStorage.setItem("selectedAtelier", JSON.stringify(atelier));
}