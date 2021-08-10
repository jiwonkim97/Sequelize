const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mvp_totals', {
    U_ID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    U_MVP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mvp_totals',
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
