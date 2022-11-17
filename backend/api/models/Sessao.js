const conn = require('../config/mysqlConnection');

const insertSessao = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `INSERT INTO sessao (idSessaoPK, descricaoSessao) VALUES (${payload.idSessaoPK}, ${payload.descricaoSessao}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully inserted');
    });
  });
};

const selectSessao = () => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM sessao`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully selected');
    });
  });
};

const selectSessaoById = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM sessao WHERE idSessaoPK = ${payload}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully selected');
    });
  });
};
const updateSessao = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `UPDATE sessao SET idSessaoPK = ${payload.idSessaoPK}, descricaoSessao = ${payload.descricaoSessao}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully updated');
    });
  });
};
const deleteSessao = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `DELETE FROM sessao WHERE idSessaoPK = ${payload}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully deleted');
    });
  });
};

module.exports = {
  insertSessao,
  selectSessao,
  selectSessaoById,
  updateSessao,
  deleteSessao,
};
