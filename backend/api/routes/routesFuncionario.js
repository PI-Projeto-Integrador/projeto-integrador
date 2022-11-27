const express = require('express');

const router = express.Router();

const controllerFuncionario = require('../controllers/controllerFuncionarioIcaro');

router.post('/criar/', async (req, res) => {
  try {
    const results = await controllerFuncionario.insertFuncionario(req.body);
    res.status(results.status).send(results.data);
  } catch (err) {
    console.error(err);
  }
});
router.get('/buscar', async (req, res) => {
  try {
    const results = await controllerFuncionario.selectFuncionario();
    res.status(results.status).send(results.data);
  } catch (err) {
    console.error(err);
  }
});
router.get('/buscar/:id', async (req, res) => {
  try {
    const results = await controllerFuncionario.selectFuncionarioById(
      req.params.id
    );
    res.status(results.status).send(results.data);
  } catch (err) {
    console.error(err);
  }
});
router.put('/atualizar/', async (req, res) => {
  try {
    const results = await controllerFuncionario.updateFuncionario(req.body);
    res.status(results.status).send(results.data);
  } catch (err) {
    console.error(err);
  }
});
router.delete('/deletar/:id', async (req, res) => {
  try {
    const results = await controllerFuncionario.deleteFuncionario(
      req.params.id
    );
    res.status(results.status).send(results.data);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
