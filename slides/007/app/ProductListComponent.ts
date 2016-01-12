import ProductComponent from "./ProductComponent";
import ListComponent from "./ListComponent";
import {Product} from "./Product";
import Component from "./Component";

export default class ProductListComponent extends Component {
    constructor (private products : Product[]) {
        super();
    }

    createElement () {
        const productComponents = this.products.map(product => new ProductComponent(product));
        const listComponent = new ListComponent(productComponents);

        return listComponent.domElement;
    }
}
