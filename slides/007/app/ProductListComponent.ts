import ProductComponent from "./ProductComponent";
import ListComponent from "./ListComponent";
import {Product} from "./Product";
import Component from "./Component";

class ProductListComponent extends Component {
    constructor (private products : Product[]) {
        super();
    }

    createElement () {
        const productComponents = this.products.map(product => new ProductComponent(product));
        const listComponent = new ListComponent(productComponents);

        return listComponent.domElement;
    }
}

class PromotedProductListComponent extends ProductListComponent {
    private list : HTMLElement;

    createElement () {
        const wrapper = document.createElement('div');
        wrapper.classList.add('promoted-products');

        this.list = super.createElement();

        const hideButton = document.createElement('button');
        hideButton.textContent = 'Toggle promoted products';
        hideButton.addEventListener('click', this.toggleVisibility.bind(this));

        wrapper.appendChild(hideButton);
        wrapper.appendChild(this.list);

        return wrapper;
    }

    toggleVisibility () {
        this.list.classList.toggle('hidden');
    }
}

export {ProductListComponent, PromotedProductListComponent};
