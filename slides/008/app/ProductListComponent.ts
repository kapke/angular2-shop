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

// 1. As list of promoted products is still list of products, we use inheritance
class PromotedProductListComponent extends ProductListComponent {
    private list : HTMLElement;

    createElement () {
        const wrapper = document.createElement('div');
        wrapper.classList.add('promoted-products');

        // 5. And we need to make use of `super` call (which would be painful to achieve in ES5.1)
        this.list = super.createElement();

        //3/ 2. To make this button working we need to create it
        const hideButton = document.createElement('button');
        hideButton.textContent = 'Toggle promoted products';
        hideButton.addEventListener('click', this.toggleVisibility.bind(this));

        // 3. We can't forget to add it to created DOM element
        wrapper.appendChild(hideButton);
        wrapper.appendChild(this.list);

        return wrapper;
    }

    // 3. We need to provide handler (which is natural)
    toggleVisibility () {
        this.list.classList.toggle('hidden');
    }
}

export {ProductListComponent, PromotedProductListComponent};
