const { Router } = require('express');
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');

const router = Router();

router.get('/', mainController.home);
router.get('/promos', promoController.promosList);
router.get('/promos/:promoId', promoController.promosDetail);

module.exports = router;
