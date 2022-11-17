const conn = require('../config/mysqlConnection');

const insertHangar = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `INSERT INTO hangar (idHangarPK, idGerenteHangarFK, idLogradouroFK) VALUES (${payload.idHangarPK}, ${payload.idGerenteHangarFK}, ${payload.idLogradouroFK})`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully inserted');
    });
  });
};

const selectHangar = () => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM hangar`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully selected');
    });
  });
};

const selectHangarById = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM hangar WHERE idHangarPK = ${payload}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully selected');
    });
  });
};
const updateHangar = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `UPDATE hangar SET idHangarPK = ${payload.idHangarPK}, idGerenteHangarFK = ${payload.idGerenteHangarFK}, idTipoParte = ${payload.idLogradouroFK}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully updated');
    });
  });
};
const deleteHangar = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `DELETE FROM hangar WHERE idHangarPK = ${payload}`;
    conn.query(quertString, () => {
      err ? reject(console.error(err)) : resolve('Successfully deleted');
    });
  });
};

module.exports = {
  insertHangar,
  selectHangar,
  selectHangarById,
  updateHangar,
  deleteHangar,
};
