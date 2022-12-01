const conn = require('../config/mysqlConnection');

const insertParte = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `INSERT INTO parte (idPartePK, descricaoParte, idTipoParteFK) VALUES (${payload.idPartePK}, ${payload.descricaoParte}, ${payload.idTipoParteFK}`;
    conn.query(quertString, (err) => {
      err ? reject(console.error(err)) : resolve('Successfully inserted');
    });
  });
};

const selectParte = () => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM parte`;
    conn.query(quertString, (err, data) => {
      err ? reject(console.error(err)) : resolve(data);
    });
  });
};

const selectParteById = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM parte WHERE idPartePK = ${payload}`;
    conn.query(quertString, (err, data) => {
      err ? reject(console.error(err)) : resolve(data);
    });
  });
};
const updateParte = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `UPDATE parte SET idPartePK = ${payload.idPartePK}, descricaoParte = ${payload.descricaoParte}, idTipoParteFK = ${payload.idTipoParteFK}`;
    conn.query(quertString, (err) => {
      err ? reject(console.error(err)) : resolve('Successfully updated');
    });
  });
};
const deleteParte = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `DELETE FROM parte WHERE idPartePK = ${payload}`;
    conn.query(quertString, (err) => {
      err ? reject(console.error(err)) : resolve('Successfully deleted');
    });
  });
};

module.exports = {
  insertParte,
  selectParte,
  selectParteById,
  updateParte,
  deleteParte,
};
