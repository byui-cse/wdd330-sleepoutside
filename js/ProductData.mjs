function convertToJson(res) {
  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }
  return res.json();
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${category}.json`;
  }

  async getData() {
    const response = await fetch(this.path);
    const data = await convertToJson(response);
    return data;
  }

  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.id === id);
  }
}