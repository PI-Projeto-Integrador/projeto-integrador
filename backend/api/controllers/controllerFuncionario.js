const Funcionario = require('../models/Funcionario');
const Logradouro = require('../models/Logradouro');

const insertFuncionario = async (payload) => {
  try {
    const results = await Funcionario.insertFuncionario(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const selectFuncionario = async () => {
  try {
    const results = await Funcionario.selectFuncionario();
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const selectFuncionarioById = async (payload) => {
  try {
    const resultsFuncionario = await Funcionario.selectFuncionarioById(payload);
    const resultsLogradouro = await Logradouro.selectLogradouroById(
      resultsFuncionario[0].idLogradouroFK
    );
    return { data: { resultsFuncionario, resultsLogradouro } };
  } catch (err) {
    console.error(err);
  }
};
const updateFuncionario = async (payload) => {
  try {
    const results = await Funcionario.updateFuncionario(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const deleteFuncionario = async (payload) => {
  try {
    const results = await Funcionario.deleteFuncionario(payload);
    return { status: 200, data: results };
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
