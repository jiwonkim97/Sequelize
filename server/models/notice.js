const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notice', {
    IDX: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TITLE: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    CONTENTS: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    CREA_DT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UPDT_DT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    AUTHOR: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'notice',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IDX" },
        ]
      },
    ]
  });
};
