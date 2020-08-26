const { Controller } = require('../controller');
const { Customer } = require('../../sequelize/models/customer.model');

class CustomerController extends Controller {
  constructor () {
    super(Customer);
  }
}

module.exports = new CustomerController();
