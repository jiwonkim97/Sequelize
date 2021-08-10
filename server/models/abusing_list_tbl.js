const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abusing_list_tbl', {
    U_ID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    ARM_NUM: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ARM_IGNORE: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'abusing_list_tbl',
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
