import {TodoComponent} from './TodoComponent';

var todoComp = new TodoComponent({done: true, title: 'My first component'});
document.body.appendChild(todoComp.getDOMElement());
