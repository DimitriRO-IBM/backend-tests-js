class Controller {
  model;

  constructor(model) {
    if (model) {
      this.model = model;
    }
  }

  async findOne(req, res) {
    const { body } = req;
    if (this.model && body) {
      const data = await this.model.findOne({ ...body });

      if (!data) {
        res.status(500).send(`No results for findOne on table ${this.model.getTableName()} with where clause ${JSON.stringify(body)}`);
      }

      res.json(data);
    }
  }

  async findAll(req, res) {
    if (this.model) {
      const data = await this.model.findAll();

      if (!data) {
        res.status(500).send(`No results for findAll on table ${this.model.getTableName()}`);
      }

      res.json(data);
    }
  }
}

module.exports = { Controller };
