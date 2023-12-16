// Importer le module Router d'Express
const { Router } = require('express');

// Importer les contrôleurs nécessaires
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const studentController = require('./controllers/studentController');

// Créer une instance de Router
const router = Router();

// Définir les routes de l'application
router.get('/', mainController.home); // Route pour la page d'accueil

// Routes liées aux promotions
router.get('/promos', promoController.promosList); // Route pour la liste des promotions
router.get('/promos/:promoId', promoController.promosDetail); // Route pour les détails d'une promotion

// Routes liées aux étudiants
router.get('/promos/:id/students', studentController.studentsList); // Route pour la liste des étudiants d'une promotion
router.get('/promos/:id/students/:studentId', studentController.studentsDetail); // Route pour les détails d'un étudiant

// Exporter le module router pour qu'il puisse être utilisé dans d'autres modules
module.exports = router;
