const conn = require('../config/mysqlConnection');

const insertAviao = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `INSERT INTO aviao (msnAviaoPK, modeloAviao, idTipoParteFK, idHangarFK) VALUES (${payload.msnAviaoPK}, ${payload.modeloAviao}, ${payload.idTipoParteFK}, ${payload.idHangarFK})`;
    conn.query(quertString, (err) => {
      err ? reject(console.error(err)) : resolve('Successfully inserted');
    });
  });
};

const selectAviao = () => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM aviao`;
    conn.query(quertString, (err, data) => {
      err ? reject(console.error(err)) : resolve(data);
    });
  });
};

const selectAviaoById = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM aviao WHERE msnAviaoPK = ${payload}`;
    conn.query(quertString, (err, data) => {
      err ? reject(console.error(err)) : resolve(data);
    });
  });
};

const updateAviao = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `UPDATE aviao SET msnAviaoPK = ${payload.msnAviaoPK}, modeloAviao = ${payload.modeloAviao}, idTipoParteFK = ${payload.idTipoParteFK},idHangarFK = ${payload.idHangarFK}`;
    conn.query(quertString, (err) => {
      err ? reject(console.error(err)) : resolve('Successfully updated');
    });
  });
};

const deleteAviao = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `DELETE FROM aviao WHERE msnAviaoPK = ${payload}`;
    conn.query(quertString, (err) => {
      err ? reject(console.error(err)) : resolve('Successfully deleted');
    });
  });
};

module.exports = {
  insertAviao,
  selectAviao,
  selectAviaoById,
  updateAviao,
  deleteAviao,
};
