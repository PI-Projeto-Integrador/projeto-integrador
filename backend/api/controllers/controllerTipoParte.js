const TipoParte = require('../models/TipoParte');

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
    const results = await TipoParte.selectTipoParteById(payload);
    return results;
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
