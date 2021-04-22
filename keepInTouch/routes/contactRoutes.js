const contactController = require('../controllers/contactController');
const { Router } = require('express');
const router = Router();

router.get('/api/contact', contactController.contact_get);
router.post('/api/contact', contactController.contact_post);
router.post('/api/contact/response' ,contactController.responce_post);

module.exports = router;