const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('push_token_tbl', {
    U_ID: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    U_TOKEN: {
      type: DataTypes.STRING(180),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'push_token_tbl',
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
