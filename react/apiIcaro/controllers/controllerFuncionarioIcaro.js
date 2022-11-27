const Funcionario = require('../models/Funcionario');

const insertFuncionario = async (payload) => {
  try {
    const results = await Funcionario.insertFuncionario(payload);
    return { data: results, status: 200 };
  } catch (err) {
    console.error(err);
  }
};
const selectFuncionario = async () => {
  try {
    const results = await Funcionario.selectFuncionario();
    return { data: results, status: 200 };
  } catch (err) {
    console.error(err);
  }
};
const selectFuncionarioById = async (payload) => {
  try {
    const results = await Funcionario.selectFuncionarioById(payload);
    return { data: results, status: 200 };
  } catch (err) {
    console.error(err);
  }
};
const updateFuncionario = async (payload) => {
  try {
    const results = await Funcionario.updateFuncionario(payload);
    return { data: results, status: 200 };
  } catch (err) {
    console.error(err);
  }
};
const deleteFuncionario = async (payload) => {
  try {
    const results = await Funcionario.deleteFuncionario(payload);
    return { data: results, status: 200 };
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
