const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('external_api_keys', {
    APIKEY: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    APINAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'external_api_keys',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "APIKEY" },
        ]
      },
    ]
  });
};
