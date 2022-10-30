const funcionarioModel = require('../models/funcionarioModel');

const insertFuncionario = async (payload) => {
  try {
    const results = await funcionarioModel.insertFuncionario(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};

const selectFuncionario = async () => {
  try {
    const results = await funcionarioModel.selectFuncionario();
    return results;
  } catch (err) {
    console.error(err);
  }
};

const selectFuncionarioById = async (payload) => {
  try {
    const results = await funcionarioModel.selectFuncionarioById(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};

const updateFuncionario = async (payload, payloadId) => {
  try {
    const results = await funcionarioModel.updateFuncionario(
      payload,
      payloadId
    );
    return results;
  } catch (err) {
    console.error(err);
  }
};

const deleteFuncionario = async (payload) => {
  try {
    const results = await funcionarioModel.deleteFuncionario(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  insertFuncionario,
  selectFuncionario,
  selectFuncionarioById,
  updateFuncionario,
  deleteFuncionario
};
