export class Product {
    constructor(
        public name: string,
        public price: number,
        public tags: string[] = []
    ) {}

    public toString () {
        return [this.name, this.price].concat(this.tags).join(' ');
    }

    public static getComparator (sortingProperty: string, sortingOrder: number): (product1: Product, product2: Product)=>number {
        switch (sortingProperty) {
            case 'price':
                return function (product1: Product, product2: Product): number {
                    return (product1.price - product2.price)*sortingOrder;
                };
            case 'name':
                return function (product1: Product, product2: Product): number {
                    return product1.name.localeCompare(product2.name)*sortingOrder;
                };
            default:
                throw new Error(`Property ${sortingProperty} is not supported in comparisons`);
        }
    }
}