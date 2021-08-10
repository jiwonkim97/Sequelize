const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('storage_tbl', {
    S_KEY: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    S_VALUE: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'storage_tbl',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "S_KEY" },
        ]
      },
    ]
  });
};
