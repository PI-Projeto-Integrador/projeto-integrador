const TipoParte = require('../models/TipoParte');
const controllerParte = require('../controllers/controllerParte');
const controllerSessao = require('../controllers/controllerSessao');

const insertTipoParte = async (payload) => {
  try {
    const results = await TipoParte.insertTipoParte(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};
const selectTipoParte = async () => {
  try {
    const results = await TipoParte.selectTipoParte();
    return results;
  } catch (err) {
    console.error(err);
  }
};
const selectTipoParteById = async (payload) => {
  try {
    const resultsTipoParte = await TipoParte.selectTipoParteById(payload);
    const resultsParte = await controllerParte.selectParteById(
      resultsTipoParte[0].idParteFK
    );
    const resultsSessao = await controllerSessao.selectSessaoById(
      resultsTipoParte[0].idSessaoFK
    );
    return { data: { resultsTipoParte, resultsParte, resultsSessao } };
  } catch (err) {
    console.error(err);
  }
};
const updateTipoParte = async (payload) => {
  try {
    const results = await TipoParte.updateTipoParte(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};
const deleteTipoParte = async (payload) => {
  try {
    const results = await TipoParte.deleteTipoParte(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  insertTipoParte,
  selectTipoParte,
  selectTipoParteById,
  updateTipoParte,
  deleteTipoParte,
};
