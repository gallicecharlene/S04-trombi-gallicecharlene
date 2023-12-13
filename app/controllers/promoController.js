// const promos = require('../../data/promos.json');
const client = require('../dbClient');

const promoController = {
  // Index s'occupera d'afficher la liste des promos
  async promosList(req, res) {
    const promos = await client.query('SELECT * FROM "promo" ORDER BY name;');

    // On passe à notre vue les données json de notre fichier promos.json
    res.render('promos/list', {
      promos: promos.rows,
    });
  },

  // Affiche le détail d'une promo...
  async promosDetail(req, res, next) {
    const promoId = parseInt(req.params.promoId, 10);

    const promoByid = await client.query(`SELECT * FROM "promo" WHERE id = ${promoId};`);

    if (promoByid.rows.length > 0) {
      res.render('promos/detail', {
        // Je passe à ma vue l'information sur ma promo
        promo: promoByid.rows[0],
      });
    } else {
      // Si la promo n'est pas trouver, on appel le middleware suivant
      next();
    }
  },
};

module.exports = promoController;
