const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('members', {
    U_ID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    U_NAME: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    U_PHN_NMB: {
      type: DataTypes.STRING(13),
      allowNull: true,
      defaultValue: ""
    },
    U_MAIL: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    CREA_DT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UPD_DT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    U_CODE: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    U_SALT: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    U_PW: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    U_PIN: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    U_WALLET: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    U_CI: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'members',
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
