const Sessao = require('../models/Sessao');

const insertSessao = async (payload) => {
  try {
    const results = await Sessao.insertSessao(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const selectSessao = async () => {
  try {
    const results = await Sessao.selectSessao();
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const selectSessaoById = async (payload) => {
  try {
    const results = await Sessao.selectSessaoById(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const updateSessao = async (payload) => {
  try {
    const results = await Sessao.updateSessao(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const deleteSessao = async (payload) => {
  try {
    const results = await Sessao.deleteSessao(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  insertSessao,
  selectSessao,
  selectSessaoById,
  updateSessao,
  deleteSessao,
};
