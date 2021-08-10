const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('btc_on_mileverse', {
    BTC_ADDR: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    BTC_AMOUNT: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "0"
    },
    U_ID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    UPDT_DT: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    BTC_REFRESH: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "Y"
    }
  }, {
    sequelize,
    tableName: 'btc_on_mileverse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BTC_ADDR" },
        ]
      },
    ]
  });
};
