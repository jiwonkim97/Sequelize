const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('push_schedule_tbl', {
    IDX: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TITLE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CONTENTS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    IMAGE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PAGE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BOOK_TIME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    SEND_YN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'push_schedule_tbl',
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
