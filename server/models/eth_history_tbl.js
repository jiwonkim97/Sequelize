const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eth_history_tbl', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TR_ID: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    ETH_FROM: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ETH_TO: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ETH_AMOUNT: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    MVC_AMOUNT: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ETH_HASH: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    ETH_TIME: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ETH_SYMBOL: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DEL: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    ETH_MEMBER: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    ETH_TYPE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ETH_FEE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    U_ID: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'eth_history_tbl',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
