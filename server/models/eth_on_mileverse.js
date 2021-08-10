const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eth_on_mileverse', {
    ETH_ADDR: {
      type: DataTypes.STRING(42),
      allowNull: false,
      primaryKey: true
    },
    ETH_AMOUNT: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "0"
    },
    MVC_AMOUNT: {
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
    ETH_REFRESH: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "Y"
    }
  }, {
    sequelize,
    tableName: 'eth_on_mileverse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ETH_ADDR" },
        ]
      },
    ]
  });
};
