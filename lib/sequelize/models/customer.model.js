const { DataTypes, Model } = require('sequelize');
const sequelize = require('../index');

class Customer extends Model {}

Customer.init({
  sacrname: {
    type: DataTypes.STRING(40),
    defaultValue: '',
  },
  srmname1: {
    type: DataTypes.STRING(70),
    defaultValue: '',
  },
  srmname2: {
    type: DataTypes.STRING(70),
    defaultValue: '',
  },
  srmname3: {
    type: DataTypes.STRING(70),
    defaultValue: '',
  },
  srmname4: {
    type: DataTypes.STRING(70),
    defaultValue: '',
  },
  srmname5: {
    type: DataTypes.STRING(70),
    defaultValue: '',
  },
  subclient: {
    type: DataTypes.STRING(30),
    defaultValue: '',
  },
  restricted: {
    type: DataTypes.CHAR,
    defaultValue: 'N',
  },
  portal: {
    type: DataTypes.CHAR,
    defaultValue: 'N',
  },
  srmeu: {
    type: DataTypes.CHAR,
    defaultValue: 'N',
  },
  brod: {
    type: DataTypes.STRING(600),
    defaultValue: '',
  },
  stor: {
    type: DataTypes.STRING(50),
    defaultValue: '',
  },
  active: {
    type: DataTypes.CHAR,
    defaultValue: 'Y',
  },
}, {
  sequelize,
  modelName: 'Customer',
  tableName: 'customer',
});

// Remove Sequelize auto-generated columns
Customer.removeAttribute('id');
Customer.removeAttribute('createdAt');
Customer.removeAttribute('updatedAt');

module.exports = { Customer };
