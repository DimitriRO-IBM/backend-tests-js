const { Router } = require('express');

const controller = require('./customer.controller');

const router = Router({
  mergeParams: true,
});

router
  .route('/')
  .get(controller.findAll.bind(controller))
  .post(controller.findOne.bind(controller));

module.exports = router;
