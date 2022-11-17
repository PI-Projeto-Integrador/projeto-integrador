const conn = require('../config/mysqlConnection');

const insertParte = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `INSERT INTO parte (idPartePK, descricaoParte) VALUES (${payload.idPartePK}, ${payload.descricaoParte}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully inserted');
    });
  });
};

const selectParte = () => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM parte`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully selected');
    });
  });
};

const selectParteById = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM parte WHERE idPartePK = ${payload}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully selected');
    });
  });
};
const updateParte = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `UPDATE parte SET idPartePK = ${payload.idPartePK}, descricaoParte = ${payload.descricaoParte}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully updated');
    });
  });
};
const deleteParte = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `DELETE FROM parte WHERE idPartePK = ${payload}`;
    conn.query(quertString, () => {
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
