export default class Product {
    constructor (public name: string, public price: string, public tags: string[] = []) {
    }

    //3/ In order to make filtering on any field ease we will provide toString method
    toString (): string {
        return `${this.name} ${this.price} ${this.tags.join(' ')}`;
    }
}
