const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brand_mst', {
    BRD_CODE: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    BRD_NAME: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    DEL: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'brand_mst',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BRD_CODE" },
        ]
      },
    ]
  });
};
