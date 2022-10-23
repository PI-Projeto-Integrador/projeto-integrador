const express = require('express');

const router = express.Router();

router.post('/adicionar', (req, res) => {
    const results = funcionarioController.insertFuncionario(req.body);
    res.json({ message: 'insert funcionou!'}, JSON.parse(results));
});

router.get('/buscar', async (req, res) => {
    try {
        const results = await livroController.buscarLivro();

        res.json(results);
    } catch (err) {
        console.error(err);
    }
});

router.get('/buscarId/:id', async (req, res) => {
    try {
        const results = await livroController.buscarIdLivro(req.params.id);
        res.json(results);
    } catch (err) {
        console.error(err);
    }
});

router.put('/atualizar', async (req, res) => {
    try {
        const data = await livroController.atualizarLivro(req.body);
        res.json(data);
    } catch (err) {
        console.error(err);
    }
});

router.delete('/deletar/:id', async (req, res) => {
    try {
        const data = await livroController.deleteLivro(req.params.id);
        res.json(data);
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;