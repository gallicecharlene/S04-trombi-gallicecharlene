const promos = require('../../data/promos.json');

const promoController = {
  // Index s'occupera d'afficher la liste des promos
  promosList(req, res) {
    // On passe à notre vue les données json de notre fichier promos.json
    res.render('promos/list', {
      promos,
    });
  },

  // Affiche le détail d'une promo...
  promosDetail(req, res, next) {
    // Je vais aller cherche dans ma liste de promo celle
    // possédant l'id correspondant à celui passé dans l'url
    // const promoId = req.params.promoId;
    // C'est identique à :
    const { promoId } = req.params;

    // On va chercher dans notre liste de promos celle qui a l'id
    // Les paramètres d'url sont toujours des chaînes de caractères
    // L'id est censé être un nombre, je convertis donc en nombre mon paramètre
    const promoFound = promos.find((promo) => promo.id === Number(promoId));

    if (promoFound) {
      res.render('promos/detail', {
        // Je passe à ma vue l'information sur ma promo
        promo: promoFound,
      });
    } else {
      // Si la promo n'est pas trouver, on appel le middleware suivant
      next();
    }
  },
};

module.exports = promoController;
