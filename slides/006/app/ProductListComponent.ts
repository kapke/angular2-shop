import ProductComponent from "./ProductComponent";
import ListComponent from "./ListComponent";

export default class ProductListComponent {
    private element;

    constructor (private products) {
        this.element = this.createElement();
    }

    get domElement () {
        return this.element;
    }

    createElement () {
        const productComponents = this.products.map(product => new ProductComponent(product));
        const listComponent = new ListComponent(productComponents);

        return listComponent.domElement;
    }
}
