const Manutencao = require('../models/Manutencao');

const insertManutencao = async (payload) => {
  try {
    const results = await Manutencao.insertManutencao(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const selectManutencao = async () => {
  try {
    const results = await Manutencao.selectManutencao();
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const selectManutencaoById = async (payload) => {
  try {
    const results = await Manutencao.selectManutencaoById(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const updateManutencao = async (payload) => {
  try {
    const results = await Manutencao.updateManutencao(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};
const deleteManutencao = async (payload) => {
  try {
    const results = await Manutencao.deleteManutencao(payload);
    return { status: 200, data: results };
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  insertManutencao,
  selectManutencao,
  selectManutencaoById,
  updateManutencao,
  deleteManutencao,
};
