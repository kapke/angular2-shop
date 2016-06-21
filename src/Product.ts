export class Product {
    constructor(
        public name: string,
        public price: number,
        public tags: string[] = []
    ) {}

    public toString () {
        return [this.name, this.price].concat(this.tags).join(' ');
    }
}