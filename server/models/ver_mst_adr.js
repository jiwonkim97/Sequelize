const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ver_mst_adr', {
    IDX: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VER_NUM: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    TYPE_CODE: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    MIN_VER_NUM: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    TITLE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    EXPL: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ver_mst_adr',
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
