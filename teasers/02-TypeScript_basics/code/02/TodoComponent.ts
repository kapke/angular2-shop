//18/ Classes syntax is based on syntax from ES2015/ES2016
export class TodoComponent {
    //Look at `private` keyword - it declares and auto-assigns `todo` member
    constructor (private todo) {}

    //14/ This method looks the same as in previous example
    getDOMElement () {
        var div = document.createElement('div'),
            checkbox = document.createElement('input'),
            title = document.createElement('span');

        checkbox.type = 'checkbox';
        checkbox.checked = this.todo.done;
        title.textContent = this.todo.title;

        div.appendChild(checkbox);
        div.appendChild(title);

        return div;
    }
}
