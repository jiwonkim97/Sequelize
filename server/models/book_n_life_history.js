const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book_n_life_history', {
    ORDERNO: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    U_ID: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    PDT_CODE: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    PIN_NO: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    PIN_PW: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    RES_CODE: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    CREA_DT: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'book_n_life_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ORDERNO" },
        ]
      },
    ]
  });
};
