// 1. We have replaced constructor function with class
class ProductListComponent {
    // 3. We need to declare all fields
    private element;

    //3/ 2. Content of constructor function is in constructor
    constructor (private products) {
        this.element = this.createElement();
    }

    //3/ 4. `getDomElement` method can be replaced with getter
    get domElement () {
        return this.element;
    }

    createElement () {
        const productComponents = this.products.map(product => new ProductComponent(product));
        const listComponent = new ListComponent(productComponents);

        return listComponent.domElement;
    }
}
