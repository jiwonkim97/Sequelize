const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('external_history', {
    INDEX: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    API_SEQ: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    API_KEY: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    REQ_NAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    USERID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    AMOUNT: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BRAND_NAME: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BRAND_CODE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CREA_DT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'external_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "INDEX" },
        ]
      },
    ]
  });
};
