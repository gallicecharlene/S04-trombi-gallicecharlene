// Importer le datamapper contenant les méthodes d'accès à la base de données
const datamapper = require('../models/datamapper');

// Contrôleur pour gérer les requêtes liées aux promotions
const promoController = {

  // Action pour afficher la liste de toutes les promotions
  async promosList(req, res, next) {
    // Récupérer toutes les promotions depuis la base de données
    const promos = await datamapper.findAllPromo();

    // Vérifier si des promotions ont été trouvées dans la base de données
    if (promos) {
      // Rendre la vue avec la liste des promotions
      res.render('promos/promos', {
        promos,
      });
    } else {
      // Passer à la gestion d'erreur si aucune promotion n'est trouvée
      next();
    }
  },

  // Action pour afficher les détails d'une promotion
  async promosDetail(req, res, next) {
    // Récupérer l'ID de la promotion depuis les paramètres de la requête
    const promoId = Number(req.params.promoId);

    // Récupérer les détails de la promotion par son ID
    const promo = await datamapper.findPromoById(promoId);

    // Vérifier si les détails de la promotion ont été trouvés dans la base de données
    if (promo) {
      // Rendre la vue avec les détails de la promotion
      res.render('promos/promo', {
        // Je passe à ma vue l'information sur ma promo
        promo,
      });
    } else {
      // Passer à la gestion d'erreur si aucune donnée de promotion n'est trouvée
      next();
    }
  },
};

// Exporter le contrôleur pour qu'il puisse être utilisé dans d'autres modules
module.exports = promoController;
