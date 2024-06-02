const Sequelize = require('sequelize');
const sequelize = new Sequelize('zadanie_domowe', 'root', 'password', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});
sequelize.authenticate().then(() => {
    console.log("Connection established successful");
}).catch(error => {
    console.log(error);
    console.log("Error occurred");
});

module.exports = sequelize;