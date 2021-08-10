const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mvp_decr', {
    IDX: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    U_ID: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    C_CODE: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    AMOUNT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PDT_CODE: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    BRD_CODE: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    CREA_DT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SWAP: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'mvp_decr',
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
