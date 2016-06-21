export class Product {
    constructor(
        public name: string,
        public price: number,
        public tags: string[] = []
    ) {}

    public toString () {
        return [this.name, this.price].concat(this.tags).join(' ');
    }

    public static compare (sortingOrder: number): (product1: Product, product2: Product)=>number {
        return function (product1: Product, product2: Product): number {
            return (product1.price - product2.price)*sortingOrder;
        };
    }
}