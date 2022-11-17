const conn = require('../config/mysqlConnection');

const insertManutencao = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `INSERT INTO manutencao (idManutencaoPK, dataAberturaManutencao, dataFechadaManutencao, msnAviaoFK, observacaoManutencao) VALUES (${payload.idManutencaoPK}, ${payload.dataAberturaManutencao}, ${payload.dataFechadaManutencao}, ${payload.msnAviaoFK}, ${payload.observacaoManutencao})`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully inserted');
    });
  });
};

const selectManutencao = () => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM manutencao`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully selected');
    });
  });
};

const selectManutencaoById = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM manutencao WHERE idManutencaoPK = ${payload}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully selected');
    });
  });
};
const updateManutencao = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `UPDATE manutencao SET idManutencaoPK = ${payload.idManutencaoPK}, dataAberturaManutencao = ${payload.dataAberturaManutencao}, idobservacaoManutencaoParte = ${payload.dataFechadaManutencao}, msnAviaoFK = ${payload.msnAviaoFK}, observacaoManutencao = ${payload.observacaoManutencao}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully updated');
    });
  });
};
const deleteManutencao = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `DELETE FROM manutencao WHERE idManutencaoPK = ${payload}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully deleted');
    });
  });
};

module.exports = {
  insertManutencao,
  selectManutencao,
  selectManutencaoById,
  updateManutencao,
  deleteManutencao,
};
