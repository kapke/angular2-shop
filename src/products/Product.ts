import {SortingDescriptor} from "../SortingDescriptor";


export type ProductComparator = (product1: Product, product2: Product)=>number;

export class Product {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public tags: string[] = []
    ) {}

    public toString () {
        return [this.name, this.price].concat(this.tags).join(' ');
    }

    public static getComparator (sortingDescriptor: SortingDescriptor): ProductComparator {
        switch (sortingDescriptor.property) {
            case 'price':
                return function (product1: Product, product2: Product): number {
                    return (product1.price - product2.price)*sortingDescriptor.order;
                };
            case 'name':
                return function (product1: Product, product2: Product): number {
                    return product1.name.localeCompare(product2.name)*sortingDescriptor.order;
                };
            default:
                throw new Error(`Property ${sortingDescriptor.property} is not supported in comparisons`);
        }
    }
}