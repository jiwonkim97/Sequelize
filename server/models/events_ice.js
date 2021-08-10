const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events_ice', {
    U_ID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    U_PHN_NMB: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    U_NAME: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    CREA_DT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ICE: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'events_ice',
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
