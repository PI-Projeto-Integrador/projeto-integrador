const express = require('express');
const funcionarioController = require('../controller/funcionarioController');

const router = express.Router();

router.post('/adicionar', async (req, res) => {
  try {
    const results = await funcionarioController.insertFuncionario(req.body);
    res.json({ message: 'Inserido com sucesso!' });
  } catch (err) {
    console.error(err);
  }
});

router.get('/buscar', async (req, res) => {
  try {
    const results = await funcionarioController.selectFuncionario();
    res.json(results);
  } catch (err) {
    console.error(err);
  }
});

router.get('/buscarId/:id', async (req, res) => {
  try {
    const results = await funcionarioController.selectFuncionarioById(
      req.params.id
    );
    res.json(results);
  } catch (err) {
    console.error(err);
  }
});

router.put('/atualizar/:id', async (req, res) => {
  try {
    const data = await funcionarioController.updateFuncionario(
      req.body,
      req.params.id
    );
    res.json({ message: 'Atualizado com sucesso!' });
  } catch (err) {
    console.error(err);
  }
});

router.delete('/deletar/:id', async (req, res) => {
  try {
    const data = await funcionarioController.deleteFuncionario(req.params.id);
    res.json({ message: 'Deletado com sucesso!' });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
