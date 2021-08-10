const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('change_limit_config', {
    BRD_NAME: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    BRD_LIMIT: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'change_limit_config',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BRD_NAME" },
        ]
      },
    ]
  });
};
