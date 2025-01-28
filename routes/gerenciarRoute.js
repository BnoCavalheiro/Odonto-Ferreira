const express = require('express');
const GerenciarController = require('../controllers/gerenciarController');
const AuthMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

let auth = new AuthMiddleware();
let ctrl = new GerenciarController();
router.get('/',auth.verificarUsuarioLogado, ctrl.gerenciarView);

router.get('/consultas', ctrl.gerenciarConsultas);

router.get('/cargos', ctrl.gerenciarCargos);

router.get('/exames', ctrl.gerenciarExames);
router.post('/exames', ctrl.listarComBuscaExame);

router.get('/pacientes', ctrl.gerenciarPacientes);
router.post('/pacientes', ctrl.listarComBuscaPaciente);

router.get('/medicos', ctrl.gerenciarMedicos);
router.post('/medicos', ctrl.listarComBuscaMedicos);

router.get('/funcionarios',ctrl.gerenciarFuncionarios);
router.post('/funcionarios', ctrl.listarComBusca);


module.exports = router;