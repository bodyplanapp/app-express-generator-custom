'use strict';
import { User } from '../../sqldb';


export default (sequelize, DataTypes) => {
  return sequelize.define('PersonalTrainer', {
    // _id: DataTypes.INTEGER,
    rating: {
      type: DataTypes.DOUBLE,
      defaultValue: 0.0
    }
  }, {
      timestamps: false
    });
}
