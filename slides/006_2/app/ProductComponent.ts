export default class ProductComponent {
    private element;

    constructor (private product) {
        this.element = this.createElement();
    }

    get domElement () {
        return this.element;
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


