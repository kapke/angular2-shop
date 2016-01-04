import {Product} from "./Product";
import Component from './Component';

export default class ProductComponent extends Component {
    constructor (private product : Product) {
        super();
    }

    createElement () {
        const div = document.createElement('div');

        const title = document.createElement('header');
        title.textContent = this.product.name;

        const price = document.createElement('span');
        price.className = 'price';
        price.textContent = this.product.price;

        div.appendChild(title);
        div.appendChild(price);

        return div;
    }
}


