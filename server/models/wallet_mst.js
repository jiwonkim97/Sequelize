const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wallet_mst', {
    U_ID: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BTC_ID: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    BTC_ADDR: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ETH_ID: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    ETH_ADDR: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    CREA_DT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IDX: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    U_MATCH: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    ETH_INIT: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "Y"
    }
  }, {
    sequelize,
    tableName: 'wallet_mst',
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
