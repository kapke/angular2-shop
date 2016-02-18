export default class Product {
    //3/ We need some kind of url-friendly identifier, so we created that getter
    get slug (): string {
        return this.name.toLowerCase().replace(/\s/g, '-');
    }

    constructor (public name: string, public price: number, public tags: string[] = []) {
    }

    public toString (): string {
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

    static fromObject ({name, price, tags}: {name: string, price: number, tags: string[]}) {
        return new Product(name, price, tags);
    }
}
