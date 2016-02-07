export class TodoComponent {
    constructor (private todo) {}

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
