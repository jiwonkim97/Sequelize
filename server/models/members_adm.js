const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('members_adm', {
    IDX: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    U_ID: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    U_PW: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    U_NAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    U_INIT: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "Y"
    },
    U_SALT: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'members_adm',
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
