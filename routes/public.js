const express = require('express');
const router = express.Router();
const publicController = require('../controllers/publicController');

router.get('/', publicController.home);
router.get('/sobre', publicController.sobre);
router.get('/dicas', publicController.formDicas);
router.post('/dicas', publicController.enviarDica);

module.exports = router;
