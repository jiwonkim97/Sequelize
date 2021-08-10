const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cafe24_limit_config', {
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
    IDX: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'cafe24_limit_config',
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
