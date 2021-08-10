const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('delete_user_tbl', {
    U_NAME: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    U_PHN_NMB: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    IDX: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'delete_user_tbl',
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
