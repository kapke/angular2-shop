//24/ This file looks exactly the same as in Vanilla JS
(function () {
    function TodoComponent (todo) {
        this.todo = todo;
    }
    TodoComponent.prototype.getDOMElement = function () {
        var div = document.createElement('div'),
            checkbox = document.createElement('input'),
            title = document.createElement('span');

        checkbox.type = 'checkbox';
        checkbox.checked = this.todo.done;
        title.textContent = this.todo.title;

        div.appendChild(checkbox);
        div.appendChild(title);

        return div;
    };

    var todoComp = new TodoComponent({done: true, title: 'My first component'});
    document.body.appendChild(todoComp.getDOMElement());
})();
