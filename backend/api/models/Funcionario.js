const conn = require('../config/mysqlConnection');

const insertFuncionario = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `INSERT INTO funcionario (idLogradouroFK, nomeFuncionario, cpfFuncionario, dataNascimentoFuncionario, telefoneFuncionario, loginFuncionario, senhaFuncionario, tipo) VALUES (${payload.idLogradouroFK}, ${payload.nomeFuncionario}, ${payload.cpfFuncionario}, ${payload.dataNascimentoFuncionario}, ${payload.telefoneFuncionario}, ${payload.loginFuncionario}, ${payload.senhaFuncionario}, ${payload.tipo})`;
    conn.query(quertString, (err) => {
      err ? reject(console.error(err)) : resolve('Successfully inserted');
    });
  });
};

const selectFuncionario = () => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM funcionario`;
    conn.query(quertString, (err, data) => {
      err ? reject(console.error(err)) : resolve(data);
    });
  });
};

const selectFuncionarioById = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `SELECT * FROM funcionario WHERE idFuncionarioPK = ${payload}`;
    conn.query(quertString, (err, data) => {
      err ? reject(console.error(err)) : resolve(data);
    });
  });
};

const updateFuncionario = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `UPDATE funcionario SET idFuncionarioPK = ${payload.idFuncionarioPK}, idPessoaFK = ${payload.idPessoaFK}, idLogradouroFK = ${payload.idLogradouroFK}, nomeFuncionario = ${payload.nomeFuncionario}, cpfFuncionario = ${payload.cpfFuncionario}, dataNascimentoFuncionario = ${payload.dataNascimentoFuncionario}, telefoneFuncionario = ${payload.telefoneFuncionario}, loginFuncionario = ${payload.loginFuncionario}, senhaFuncionario = ${payload.senhaFuncionario}, tipo = ${payload.tipo}`;
    conn.query(quertString, (err) => {
      err ? reject(console.error(err)) : resolve('Successfully updated');
    });
  });
};
const deleteFuncionario = (payload) => {
  return new Promise((resolve, reject) => {
    const quertString = `DELETE FROM funcionario WHERE idFuncionarioPK = ${payload}`;
    conn.query(quertString, (err) => {
      err ? reject(console.error(err)) : resolve('Successfully deleted');
    });
  });
};

module.exports = {
  insertFuncionario,
  selectFuncionario,
  selectFuncionarioById,
  updateFuncionario,
  deleteFuncionario,
};
