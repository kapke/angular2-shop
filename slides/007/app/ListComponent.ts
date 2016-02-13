import Component from "./Component";

// Now we extend our base abstract class
export default class ListComponent extends Component {

    // In order to make this class compatible with ES6 specification - we need to call parent constructor.
    constructor (private components) {
        super();
    }

    // The only thing to do is to implement `createElement` method. Thanks to type inference we can reduce amount of typing code
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
