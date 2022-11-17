const Funcionario = require('../models/Funcionario');

const insertFuncionario = async (payload) => {
  try {
    const results = await Funcionario.insertFuncionario(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};
const selectFuncionario = async () => {
  try {
    const results = await Funcionario.selectFuncionario();
    return results;
  } catch (err) {
    console.error(err);
  }
};
const selectFuncionarioById = async (payload) => {
  try {
    const results = await Funcionario.selectFuncionarioById(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};
const updateFuncionario = async (payload) => {
  try {
    const results = await Funcionario.updateFuncionario(payload);
    return results;
  } catch (err) {
    console.error(err);
  }
};
const deleteFuncionario = async (payload) => {
  try {
    const results = await Funcionario.deleteFuncionario(payload);
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
  deleteFuncionario,
};
