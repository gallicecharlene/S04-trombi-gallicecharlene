// Importer le datamapper contenant les méthodes d'accès à la base de données
const datamapper = require('../models/datamapper');

// Contrôleur pour gérer les requêtes liées aux étudiants
const studentController = {

  // Action pour afficher la liste des étudiants d'une promotion
  async studentsList(req, res, next) {
    // Récupérer l'ID de la promotion depuis les paramètres de la requête
    const id = Number(req.params.id);

    // Récupérer la promotion par son ID
    const promoByid = await datamapper.findPromoById(id);
    // et les étudiants de cette promotion
    const studentsPromoFound = await datamapper.findStudentsByPromoId(id);

    // Vérifier si les données ont été trouvées dans la base de données
    if (studentsPromoFound && promoByid) {
      // Rendre la vue avec la liste des étudiants et les détails de la promotion
      res.render('students/students', {
        students: studentsPromoFound,
        promoByid,
      });
    } else {
      // Passer à la gestion d'erreur si aucune donnée n'est trouvée
      next();
    }
  },

  // Action pour afficher les détails d'un étudiant
  async studentsDetail(req, res, next) {
    // Récupérer les ID de la promotion et de l'étudiant depuis les paramètres de la requête
    const promoId = Number(req.params.id);
    const studentId = Number(req.params.studentId);

    // Récupérer la promotion par son ID
    const promoByid = await datamapper.findPromoById(promoId);
    // et l'étudiant par son ID
    const studentByid = await datamapper.findStudentById(studentId);

    // Vérifier si les données ont été trouvées dans la base de données
    if (studentByid && promoByid) {
      // Rendre la vue avec les détails de l'étudiant et de la promotion
      res.render('students/student', {
        promoByid,
        studentByid,
      });
    } else {
      // Passer à la gestion d'erreur si aucune donnée n'est trouvée
      next();
    }
  },
};

// Exporter le contrôleur pour qu'il puisse être utilisé dans d'autres modules
module.exports = studentController;
