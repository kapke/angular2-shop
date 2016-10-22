//24/ Without framework we need to manually operate on DOM, which isn't the easiest solution we can imagine
(function () {
    function TodoComponent (todo) {
        this.todo = todo;
    }
    //14/ We have to manually create DOM elements
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

    //2/ And then we can append them into page
    var todoComp = new TodoComponent({done: true, title: 'My first component'});
    document.body.appendChild(todoComp.getDOMElement());
})();
