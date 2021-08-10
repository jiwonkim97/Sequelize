const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alert_mst', {
    ARM_NUM: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TYPE_CODE: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    TITLE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    EXPL: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    DEL: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'alert_mst',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ARM_NUM" },
        ]
      },
    ]
  });
};
