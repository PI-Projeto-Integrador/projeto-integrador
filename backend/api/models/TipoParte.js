const conn = require('../config/mysqlConnection');

const insertTipoParte = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `INSERT INTO tipoParte (idTipoPartePK, descricaoTipoParte, descricaoTipoParte, idSessaoFK) VALUES (${payload.idTipoPartePK}, ${payload.descricaoTipoParte}, ${payload.descricaoTipoParte}, ${payload.idSessaoFK})`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully inserted');
    });
  });
};

const selectTipoParte = () => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM tipoParte`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully selected');
    });
  });
};

const selectTipoParteById = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM tipoParte WHERE idTipoPartePK = ${payload}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully selected');
    });
  });
};
const updateTipoParte = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `UPDATE tipoParte SET idTipoPartePK = ${payload.idTipoPartePK}, descricaoTipoParte = ${payload.descricaoTipoParte}, descricaoTipoParte = ${payload.descricaoTipoParte},idSessaoFK = ${payload.idSessaoFK}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully updated');
    });
  });
};
const deleteTipoParte = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `DELETE FROM tipoParte WHERE idTipoPartePK = ${payload}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully deleted');
    });
  });
};

module.exports = {
  insertTipoParte,
  selectTipoParte,
  selectTipoParteById,
  updateTipoParte,
  deleteTipoParte,
};