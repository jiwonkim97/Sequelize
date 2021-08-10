const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('btc_deposit_tbl', {
    BTC_DPS_IDS: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BTC_FROM: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BTC_TO: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BTC_RECV: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BTC_AMOUNT: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BTC_HASH: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    BTC_TR_ID: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    BTC_TYPE: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "DEPOSIT"
    },
    BTC_FEE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BTC_TIME: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    BTC_MEMBER: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'btc_deposit_tbl',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BTC_DPS_IDS" },
        ]
      },
    ]
  });
};
