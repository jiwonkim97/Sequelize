const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('type_cd', {
    TYPE_CODE: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    TYPE_NAME: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    TYPE_PRTY: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'type_cd',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TYPE_CODE" },
        ]
      },
    ]
  });
};
