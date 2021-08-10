const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mvp_code_mst', {
    C_CODE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    C_NAME: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mvp_code_mst',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "C_CODE" },
        ]
      },
    ]
  });
};
