const Aviao = require('../models/Aviao');
const controllerHangar = require('../controllers/controllerHangar');
const controllerTipoParte = require('../controllers/controllerTipoParte');

const insertAviao = async (payload) => {
  try {
    const results = await Aviao.insertAviao(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};
const selectAviao = async () => {
  try {
    const results = await Aviao.selectAviao();
    return results;
  } catch (err) {
    console.error(err);
  }
};
const selectAviaoById = async (payload) => {
  try {
    const resultsAviao = await Aviao.selectAviaoById(payload);
    const resultsHangar = await controllerHangar.selectHangarById(
      resultsAviao[0].idHangarFK
    );
    const resultsTipoParte = await controllerTipoParte.selectTipoParteById(
      resultsAviao[0].idTipoParteFK
    );
    console.log(resultsAviao);
    console.log(resultsHangar);
    return {
      data: { resultsAviao, resultsHangar, resultsTipoParte },
    };
  } catch (err) {
    console.error(err);
  }
};
const updateAviao = async (payload) => {
  try {
    const results = await Aviao.updateAviao(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};
const deleteAviao = async (payload) => {
  try {
    const results = await Aviao.deleteAviao(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  insertAviao,
  selectAviao,
  selectAviaoById,
  updateAviao,
  deleteAviao,
};
