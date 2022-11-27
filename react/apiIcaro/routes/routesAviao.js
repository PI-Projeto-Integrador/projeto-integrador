const express = require('express');

const router = express.Router();

const controllerAviao = require('../controllers/controllerAviaoIcaro');

router.post('/criar/', async (req, res) => {
  try {
    const results = await controllerAviao.insertAviao(req.body);
    res.status(results.status).send(results.data);
  } catch (err) {
    console.error(err);
  }
});
router.get('/buscar', async (req, res) => {
  try {
    const results = await controllerAviao.selectAviao();
    res.status(results.status).send(results.data);
  } catch (err) {
    console.error(err);
  }
});
router.get('/buscar/:id', async (req, res) => {
  try {
    const results = await controllerAviao.selectAviaoById(req.params.id);
    res.status(results.status).send(results.data);
  } catch (err) {
    console.error(err);
  }
});
router.put('/atualizar/', async (req, res) => {
  try {
    const results = await controllerAviao.updateAviao(req.body);
    res.status(results.status).send(results.data);
  } catch (err) {
    console.error(err);
  }
});
router.delete('/deletar/:id', async (req, res) => {
  try {
    const results = await controllerAviao.deleteAviao(req.params.id);
    res.status(results.status).send(results.data);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
