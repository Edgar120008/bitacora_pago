const { Router } = require('express');
const { registroContrato,
        registrarIntentoPago,
        registroPagoAprovado,
        registroPagoRechazado
 } = require('../controllers/admin.controller');

const router = Router();

router.post('/registroContrato', registroContrato);
router.post('/registrarIntentoPago', registrarIntentoPago);
router.post('/registroPagoAprovado', registroPagoAprovado);
router.post('/registroPagoRechazado', registroPagoRechazado);

module.exports = router;