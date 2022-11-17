const Aviao = require('../models/Aviao');

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
    const results = await Aviao.selectAviaoById(payload);
    return results;
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
