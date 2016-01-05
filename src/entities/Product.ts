export default class Product {
    constructor (public name: string, public price: string, public tags: string[] = []) {
    }

    toString (): string {
        return `${this.name} ${this.price} ${this.tags.join(' ')}`;
    }
}
