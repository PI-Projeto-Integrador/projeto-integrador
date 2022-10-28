const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("projetointegrador", "root", "1234", {
  host: "127.0.0.1",
  dialect: "mysql",
  define: {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  },
});
const testeconexao = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = {
  sequelize,
  testeconexao,
};
