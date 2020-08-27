const { Controller } = require('../controller');
const fs = require('fs');

class FileUploadController extends Controller {
  constructor () {
    super(null)
  }

  fileUpload(req, res) {
    const { file } = req;

    fs.readFile(file.path, 'utf-8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      }

      res.status(200).json({ data });
    });
  }
}

module.exports = new FileUploadController();
