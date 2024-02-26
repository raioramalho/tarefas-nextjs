import { Product } from "@/types/product.entity";

export default class ApiProduct {
  public async getProducts(): Promise<Product[]> {

    console.log(`${ApiProduct.name}: executou - ${this.getProducts.name}`);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const request = await fetch("http://192.168.2.201:3001/produtos", {
      next: {
        tags: ['get-products']
      }
    });
    const response = await request.json();
    return response;
  }

  public async postProduct(produto: Product): Promise<Product> {
    console.log(`${ApiProduct.name}: executou - ${this.postProduct.name}`);

    const request = await fetch("http://192.168.2.201:3001/produtos", {
      method: "POST",
      body: JSON.stringify(produto),
    });

    const response = await request.json();
    return response;
  }
}


