const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prdt_mst', {
    PDT_CODE: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    PDT_NAME: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    PDT_AMOUNT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DEL: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    BRD_CODE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CTGR_CODE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PDT_IMAGE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    SUPPLIER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EVENT_GB: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    SALE_RATIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SALE_AMOUNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SOLDOUT_GB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EVT_CTGR_CD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EVT_CTGR_NM: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EVT_PRIORITY: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'prdt_mst',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PDT_CODE" },
        ]
      },
    ]
  });
};
