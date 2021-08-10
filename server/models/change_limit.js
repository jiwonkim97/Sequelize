const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('change_limit', {
    U_ID: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    HEALTH: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    REALPET: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PARTNERCOM: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    BOOKNLIFE: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'change_limit',
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
