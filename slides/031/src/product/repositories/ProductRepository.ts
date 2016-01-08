import Product from "../entities/Product";

export default class ProductRepository {
    public getProducts (): Product[] {
        return [
            new Product('Yerba', 4, ['Strong']),
            new Product('Coffee', 5),
            new Product('Tea', 4, ['Great', 'Super'])
        ];
    }

    public getPromotedProducts (): Product[] {
        return [
            new Product('Latte', 10),
            new Product('Green Tea', 7)
        ];
    }
}
