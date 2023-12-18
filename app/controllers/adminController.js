// Importer le datamapper contenant les méthodes d'accès à la base de données
const datamapper = require('../models/datamapper');

const adminController = {

  // addStudent(req, res) {
  //   res.render('students/addStudent');
  // },

  async adminAddStudent(req, res, next) {
    // Récupérer toutes les promotions depuis la base de données
    const promos = await datamapper.findAllPromo();
    // console.table(promos);

    // Vérifier si des promotions ont été trouvées dans la base de données
    if (promos) {
      // Rendre la vue avec les détails de la promotion
      res.render('admin/addStudent', {
        // Je passe à ma vue l'information sur ma promo
        promos,
      });
    } else {
      // Passer à la gestion d'erreur si aucune donnée de promotion n'est trouvée
      next();
    }
  },
  async formDataAddStudent(req, res, next) {
    const resultForm = req.body;
    console.table(resultForm);

    const addStudentInfo = await datamapper.addStudent(resultForm);
    // Récupérer les détails de la promotion par son ID
    const promo = await datamapper.findPromoById(resultForm.promo);

    if (addStudentInfo) {
      res.render('promos/promo', {
        // Je passe à ma vue l'information sur ma promo
        promo,
      });
    } else {
      next();
    }
  },

};

// Exporter le contrôleur pour qu'il puisse être utilisé dans d'autres modules
module.exports = adminController;
