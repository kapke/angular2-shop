export default class ListComponent {
    private element;

    constructor (private components) {
        this.element = this.createElement();
    }

    get domElement () {
        return this.element;
    }

    createElement () {
        const ul = document.createElement('ul');

        this.components.forEach(component => {
            const li = document.createElement('li');

            li.appendChild(component.domElement);
            ul.appendChild(li);
        });

        return ul;
    }
}
