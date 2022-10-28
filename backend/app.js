const databaseConnection = require("C:/Users/017182631/Desktop/PI/Sequelize_PI/database/database");
const { DataTypes } = require("sequelize");
var express = require("express");
var app = express();

databaseConnection.testeconexao;
const Aviao = databaseConnection.sequelize.define("Aviao", {
  msnAviaoPK: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  modeloAviao: {
    type: DataTypes.STRING,
  },
  idTipoParteFK: {
    type: DataTypes.INTEGER,
  },
  idHangarFK: {
    type: DataTypes.INTEGER,
    references: {
      model: "hangar", // 'fathers' refers to table name
      key: "idHangarPK", // 'id' refers to column name in fathers table
    },
  },
});

const hangar = databaseConnection.sequelize.define("hangar", {
  idHangarPK: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  IdGerenteHangarFK: {
    type: DataTypes.INTEGER,
  },
  idlogradouroFK: {
    type: DataTypes.INTEGER,
  },
});
Aviao.belongsTo(hangar);
console.log(Aviao === databaseConnection.sequelize.models.Aviao); // true

app.post("/CRUD-aviao", function (request, response) {
  return Aviao.create({
    msnAviaoPK: 2,
    modeloAviao: "modelo",
    idTipoParteFK: 1,
    idHangarFK: 1,
  }).then(function (Aviao) {
    if (Aviao) {
      response.send(Aviao);
    } else {
      response.status(400).send("Error in get a record");
    }
  });
});

app.post("/CRUD-hangar", function (request, response) {
  return hangar
    .create({
      idHangarPK: 1,
      IdGerenteHangarFK: 1,
      idlogradouroFK: 1,
    })
    .then(function (hangar) {
      if (hangar) {
        response.send(hangar);
      } else {
        response.status(400).send("Error in get a record");
      }
    });
});

app.get("/CRUD-aviao", function (request, response) {
  return Aviao.up("003").then(function (Aviao) {
    if (Aviao) {
      response.send(Aviao);
    } else {
      response.status(400).send("Error in update a record");
    }
  });
});

app.put("/CRUD-aviao", function (request, response) {
  return Aviao.update(
    { modeloAviao: "modelo2" },
    { where: { msnAviaoPK: 2 } }
  ).then(function (Aviao) {
    if (Aviao) {
      response.send(Aviao);
    } else {
      response.status(400).send("Error in update");
    }
  });
});
app.post("/CRUD-aviaoDelete", function (req, res) {
  return Aviao.destroy({
    where: {
      modeloAviao: "modelo",
    },
  }).then(function (Aviao) {
    if (Aviao) {
      res.send(Aviao);
    } else {
      res.status(400).send("Elemento deletado");
    }
  });
});

app.listen(3000, function () {
  console.log("Express server is listening on port 3000");
});
// const aviao = Aviao.build({
//   Parte: "teste",
//   MSN: "002",
//   Hangar: "hangar",
//   Modelo: "Modelo",
// });
// // console.log(aviao instanceof Aviao); // true
// console.log(aviao.MSN);
// console.log(aviao.Parte);
// aviao.save();
