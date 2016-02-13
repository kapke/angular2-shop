// We will start with extracting base class for our components which gives as common interface and reduces code duplications
abstract class Component {
    protected element : HTMLElement;

    constructor () {}

    // Then we can assure that `domElement` always will return a `HTMLElement`, which is base class for every DOM element
    get domElement () : HTMLElement {
        this.element = this.element?this.element:this.createElement();
        return this.element;
    }

    //At the end, to assure `domElement` getter working as expected we create an abstract method for creating component's element
    abstract createElement () : HTMLElement;
}

export default Component;
