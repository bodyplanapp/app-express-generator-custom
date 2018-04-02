'use strict';

export default function (sequelize, DataTypes) {
  return sequelize.define('Customer', {
    weigth: DataTypes.DOUBLE,
    heigth: DataTypes.DOUBLE
  }, {
      timestamps: false
    });
}
