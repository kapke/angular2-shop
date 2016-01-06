export default class Product {
    constructor (public name: string, public price: number, public tags: string[] = []) {
    }

    toString (): string {
        return `${this.name} ${this.price} ${this.tags.join(' ')}`;
    }

    static compare (property: string, product1: Product, product2: Product): number {
        switch (property) {
            case 'price':
                return product1.price - product2.price;
            case 'name':
                return product1.name.localeCompare(product2.name);
        }
    }
}
