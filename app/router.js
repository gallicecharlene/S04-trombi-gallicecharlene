const { Router } = require('express');
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const studentController = require('./controllers/studentController');

const router = Router();

router.get('/', mainController.home);
router.get('/promos', promoController.promosList);
router.get('/promos/:promoId', promoController.promosDetail);
router.get('/promos/:id/students', studentController.studentsList);

module.exports = router;
