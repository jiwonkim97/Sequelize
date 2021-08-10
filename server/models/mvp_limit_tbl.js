const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mvp_limit_tbl', {
    U_ID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    DAY_CHG_MVP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    MON_CHG_MVP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    MON_BUY_MVP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mvp_limit_tbl',
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
