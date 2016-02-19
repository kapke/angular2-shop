//There we import TodoComponent (which must be exported) from `TodoComponent.ts` file (module)
import {TodoComponent} from './TodoComponent';

//2/ As we imported TodoComponent, we can use it there
var todoComp = new TodoComponent({done: true, title: 'My first component'});
document.body.appendChild(todoComp.getDOMElement());
