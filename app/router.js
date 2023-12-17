// Importer le module Router d'Express
const { Router } = require('express');

// Importer les contrôleurs nécessaires
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const studentController = require('./controllers/studentController');
const adminController = require('./controllers/adminController');

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

// Routes liée à l'ajout d'étudiants
router.get('/admin/addStudent', adminController.addStudent);

// Exporter le module router pour qu'il puisse être utilisé dans d'autres modules
module.exports = router;
