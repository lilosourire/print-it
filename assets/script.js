console.log("hello world");
// Définition des diapositives
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];


// Récupération des éléments HTML pour les flèches gauche et droite
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

// Gestionnaire d'événement pour la flèche gauche
arrowLeft.addEventListener("click", function () {
  // Décrémente l'index actuel et appelle la fonction pour mettre à jour le carousel
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Gestionnaire d'événement pour la flèche droite
arrowRight.addEventListener("click", function () {
  // Incrémente l'index actuel et appelle la fonction pour mettre à jour le carousel
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

// Calcul du nombre total de diapositives
const nombreDeSlides = slides.length;

// Récupération du conteneur des points (dots)
const DotsContainer = document.getElementById("DotsContainer");

// Création des points (dots) et ajout au conteneur
for (let i = 0; i < nombreDeSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");

  // Ajout de la classe "dot_selected" au premier dot
  if (i === 0) {
    dot.classList.add("dot_selected");
  }

  DotsContainer.appendChild(dot);
}

// Sélection de tous les points (dots) créés
const dots = document.querySelectorAll(".dot");

// Gestionnaire d'événement pour chaque point (dot)
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // Met à jour l'index actuel avec celui du point cliqué et appelle la fonction pour mettre à jour le carousel
    currentIndex = index;
    updateCarousel();
  });
});

// Initialisation de l'index courant
let currentIndex = 0;

// Récupération des éléments image et tagline
const imageElement = document.getElementById("img_banner");
const tagLineElement = document.querySelector("#tagline");

// Fonction pour mettre à jour le carousel
function updateCarousel() {
  // Mise à jour de l'image et du tagline en fonction de l'index courant
  imageElement.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  tagLineElement.innerHTML = slides[currentIndex].tagLine;

  // Mise à jour des classes des points (dots) en fonction de l'index courant
  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
}

// Appel initial de la fonction pour afficher la première diapositive
updateCarousel();




// ajout de ma part pour que les points dots soient cliquables

// // créaion d'un évènement pour que les points dots soient cliquables
// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     currentIndex = index;
//     // Appel de la fonction pour mettre à jour le carousel
//     updateCarousel();
//   });
// })