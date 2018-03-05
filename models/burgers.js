var db = require("../models");



module.exports = function (sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
 
  
  
    });
  

  
    return Burgers;
  };
  