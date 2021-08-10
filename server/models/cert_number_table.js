const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cert_number_table', {
    CERT_NUM: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    CERT_TIME: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CERT_TARGET: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    CERT_USER: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cert_number_table',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CERT_NUM" },
        ]
      },
    ]
  });
};
