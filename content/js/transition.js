// Fonction pour faire apparaître le texte en fondu latéral
function fadeIn() {
  // Définissez la transparence initiale du texte sur 0 (invisible)
  text.style.opacity = 0;

  // Augmentez la transparence du texte à 1 (visible) sur la durée spécifiée
  setTimeout(function() {
    text.style.opacity = 1;
  }, duration);
}

// Appelez la fonction pour lancer l'animation
fadeIn();