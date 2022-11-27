const Hangar = require('../models/Hangar');
const controllerLogradouro = require('../controllers/controllerLogradouro');
const controllerFuncionario = require('../controllers/controllerFuncionario');

const insertHangar = async (payload) => {
  try {
    const results = await Hangar.insertHangar(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};
const selectHangar = async () => {
  try {
    const results = await Hangar.selectHangar();
    return results;
  } catch (err) {
    console.error(err);
  }
};
const selectHangarById = async (payload) => {
  try {
    const resultsHangar = await Hangar.selectHangarById(payload);
    const resultsLogradouro = await controllerLogradouro.selectLogradouroById(
      resultsHangar[0].idLogradouroFK
    );
    const resultsGerente = await controllerFuncionario.selectFuncionarioById(
      resultsHangar[0].idGerenteHangarFK
    );
    return { data: { resultsHangar, resultsLogradouro, resultsGerente } };
  } catch (err) {
    console.error(err);
  }
};
const updateHangar = async (payload) => {
  try {
    const results = await Hangar.updateHangar(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};
const deleteHangar = async (payload) => {
  try {
    const results = await Hangar.deleteHangar(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  insertHangar,
  selectHangar,
  selectHangarById,
  updateHangar,
  deleteHangar,
};
