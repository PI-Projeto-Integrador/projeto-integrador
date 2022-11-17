const conn = require('../config/mysqlConnection');

const insertLogradouro = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `INSERT INTO logradouro (idLogradouroPK, cepLogradouro, numeroLogradouro, complementoLogradouro) VALUES (${payload.idLogradouroPK}, ${payload.cepLogradouro}, ${payload.numeroLogradouro}, ${payload.complementoLogradouro})`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully inserted');
    });
  });
};

const selectLogradouro = () => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM logradouro`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully selected');
    });
  });
};

const selectLogradouroById = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM logradouro WHERE idLogradouroPK = ${payload}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully selected');
    });
  });
};
const updateLogradouro = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `UPDATE logradouro SET idLogradouroPK = ${payload.idLogradouroPK}, cepLogradouro = ${payload.cepLogradouro}, idTipoParte = ${payload.numeroLogradouro}, complementoLogradouro = ${payload.complementoLogradouro}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully updated');
    });
  });
};
const deleteLogradouro = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `DELETE FROM logradouro WHERE idLogradouroPK = ${payload}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully deleted');
    });
  });
};

module.exports = {
  insertLogradouro,
  selectLogradouro,
  selectLogradouroById,
  updateLogradouro,
  deleteLogradouro,
};
