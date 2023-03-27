class CategoriesService {
  constructor() {
    this.categories = [];
  }

  generate() {

  }

  create() {}

  find(limit) {
    return this.categories.slice(0, limit);
  }

  findOne(id) {
    return this.categories.find((item) => item.id === id);
  }

  update() {}
  delete() {}
}

module.exports = CategoriesService;

