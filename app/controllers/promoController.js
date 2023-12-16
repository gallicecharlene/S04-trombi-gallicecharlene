const datamapper = require('../models/datamapper');

const promoController = {
  async promosList(req, res, next) {
    const promos = await datamapper.findAllPromo();

    if (promos) {
      res.render('promos/promos', {
        promos,
      });
    } else {
      next();
    }
  },

  // Affiche le détail d'une promo...
  async promosDetail(req, res, next) {
    const promoId = Number(req.params.promoId);
    const promo = await datamapper.findPromoById(promoId);

    if (promo) {
      res.render('promos/promo', {
        // Je passe à ma vue l'information sur ma promo
        promo,
      });
    } else {
      // Si la promo n'est pas trouver, on appel le middleware suivant
      next();
    }
  },
};

module.exports = promoController;
