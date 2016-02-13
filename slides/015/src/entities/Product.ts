//4/ Migration from interface to class is easy...
export default class Product {
    constructor (public name: string, public price: string, public tags: string[] = []) {
    }
}
