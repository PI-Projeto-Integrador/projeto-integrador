const Parte = require('../models/Parte');

const insertParte = async (payload) => {
  try {
    const results = await Parte.insertParte(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};
const selectParte = async () => {
  try {
    const results = await Parte.selectParte();
    return results;
  } catch (err) {
    console.error(err);
  }
};
const selectParteById = async (payload) => {
  try {
    const results = await Parte.selectParteById(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};
const updateParte = async (payload) => {
  try {
    const results = await Parte.updateParte(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};
const deleteParte = async (payload) => {
  try {
    const results = await Parte.deleteParte(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  insertParte,
  selectParte,
  selectParteById,
  updateParte,
  deleteParte,
};
