// En utilisant document.addEventListener("DOMContentLoaded", ...), le code JavaScript attend que toute la structure HTML soit chargée avant de procéder à l’ajout des événements.

// Nous avons ajouté une vérification pour s’assurer que les éléments sont bien présents dans le DOM. Si l’un d’eux manque, le code affiche un message d’erreur dans la console et arrête l’exécution de la fonction pour éviter toute erreur.

// Dans closePopup, nous avons ajouté popupImg.src = "";, ce qui réinitialise la source d’image à chaque fermeture de pop-up.

// Le code initial était redondant, car il répétait des blocs presque identiques pour chaque galerie.
// Correction : La fonction initializePopup permet d’utiliser une logique commune, en prenant les identifiants (id et class) et les chemins spécifiques comme paramètres. Cela facilite l’ajout de nouvelles galeries et simplifie le code, rendant sa maintenance plus simple et plus fiable.

document.addEventListener("DOMContentLoaded", () => {
  // Initialisation pour la galerie illustrateur
  initializePopup("grid-item", "popup-bg", "popup-img", "./pictures/galleryillust", "active");
  
  // Initialisation pour la galerie graphiste
  initializePopup("grid-item2", "popup-bg2", "popup-img2", "./pictures/gallerygraph", "active2");

  // Initialisation pour la galerie photographies
  initializePopup("grid-item3", "popup-bg3", "popup-img3", "./pictures/galleryphoto", "active3");
});

// Fonction générique d'initialisation des pop-ups
const initializePopup = (gridClass, popupBgId, popupImgId, folderPath, activeClass) => {
  let gridItems = [...document.getElementsByClassName(gridClass)];
  let popupBg = document.getElementById(popupBgId);
  let popupImg = document.getElementById(popupImgId);

  // Vérification de l'existence des éléments
  if (!popupBg || !popupImg) {
      console.error(`Element(s) with ID ${popupBgId} or ${popupImgId} not found in the DOM.`);
      return;
  }

  // Ouvrir le popup avec l'image correspondante
  const openPopup = (e) => {
      let gridItemClicked = e.target.closest(`.${gridClass}`);
      if (gridItemClicked) {
          let clickedImageName = gridItemClicked.id;
          popupBg.classList.add(activeClass);
          popupImg.src = `${folderPath}/${clickedImageName}.jpg`;
      }
  };

  // Fermer le popup
  const closePopup = () => {
      popupBg.classList.remove(activeClass);
      popupImg.src = ""; // Réinitialiser la source pour éviter le cache
  };

  // Ajouter les écouteurs d'événements
  gridItems.forEach((el) => el.addEventListener("click", openPopup));
  popupImg.addEventListener("click", (e) => e.stopImmediatePropagation());
  popupBg.addEventListener("click", closePopup);
  
};

