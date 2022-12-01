const Logradouro = require('../models/Logradouro');

const insertLogradouro = async (payload) => {
  try {
    const results = await Logradouro.insertLogradouro(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const selectLogradouro = async () => {
  try {
    const results = await Logradouro.selectLogradouro();
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const selectLogradouroById = async (payload) => {
  try {
    const results = await Logradouro.selectLogradouroById(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const updateLogradouro = async (payload) => {
  try {
    const results = await Logradouro.updateLogradouro(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const deleteLogradouro = async (payload) => {
  try {
    const results = await Logradouro.deleteLogradouro(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  insertLogradouro,
  selectLogradouro,
  selectLogradouroById,
  updateLogradouro,
  deleteLogradouro,
};
