const { Router } = require('express')

// Used to save uploaded content in the backend
const multer = require('multer');
const upload = multer({
  dest: './uploads/'
});

const fileUploadController = require('./file-upload.controller');
const router = Router({mergeParams: true})

router
  .post('/', upload.single('uploadedFile'), fileUploadController.fileUpload.bind(fileUploadController))

module.exports = router;
