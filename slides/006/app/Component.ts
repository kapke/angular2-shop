abstract class Component {
    protected element : HTMLElement;

    constructor () {}

    get domElement () : HTMLElement {
        this.element = this.element?this.element:this.createElement();
        return this.element;
    }

    abstract createElement () : HTMLElement;
}

export default Component;
