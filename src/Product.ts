export class Product {
    constructor(
        public name: string,
        public price: number,
        public tags: string[] = []
    ) {}
}