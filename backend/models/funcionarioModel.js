const conn = require('../db/conn');

const insertFuncionario = async (payload) => {
  try {
    const query = `
        INSERT INTO funcionario (funcionario.idPessoaFK, funcionario.loginFuncionario, funcionario.senhaFuncionario, funcionario.tipo) VALUES
        (${payload.idPessoaFK}, "${payload.loginFuncionario}", "${payload.senhaFuncionario}", "${payload.tipo}")
        `;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, result) => {
        return err ? reject(err) : resolve(result);
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const selectFuncionario = async () => {
  try {
    const query = 'SELECT * FROM funcionario';
    return new Promise((resolve, reject) => {
      conn.query(query, (err, result) => {
        return err ? reject(err) : resolve(result);
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const selectFuncionarioById = async (payload) => {
  try {
    const query = `SELECT * FROM funcionario WHERE idFuncionarioPK = ${payload}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, result) => {
        return err ? reject(err) : resolve(result);
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const updateFuncionario = async (payload, payloadId) => {
  try {
    const query = `UPDATE funcionario SET idPessoaFK = ${payload.idPessoaFK}, loginFuncionario = '${payload.loginFuncionario}', senhaFuncionario = '${payload.senhaFuncionario}', tipo = '${payload.tipo}' WHERE idFuncionarioPK = ${payloadId}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, result) => {
        return err ? reject(err) : resolve(result);
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const deleteFuncionario = async (payload) => {
  try {
    const query = `DELETE FROM funcionario WHERE idFuncionarioPK = ${payload}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, result) => {
        return err ? reject(err) : resolve(result);
      });
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  insertFuncionario,
  selectFuncionario,
  selectFuncionarioById,
  updateFuncionario,
  deleteFuncionario
};
