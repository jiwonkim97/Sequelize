const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('btc_mst', {
    BTC_IDX: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TR_ID: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: ""
    },
    BTC_AMOUNT: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    BTC_RECV: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BTC_TO: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BTC_FEE: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },
    CREA_DT: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    BTC_TYPE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BTC_FROM: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'btc_mst',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BTC_IDX" },
        ]
      },
    ]
  });
};
