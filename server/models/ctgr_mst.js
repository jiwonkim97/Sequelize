const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctgr_mst', {
    CTGR_CODE: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    CTGR_NAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    CTGR_ICO: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    DEL: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'ctgr_mst',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CTGR_CODE" },
        ]
      },
    ]
  });
};
