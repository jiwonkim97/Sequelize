const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_table_del', {
    U_ID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    BTC_ID: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    BTC_ADDR: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ETH_ID: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    ETH_ADDR: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CREA_DT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_table_del',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "U_ID" },
        ]
      },
    ]
  });
};
