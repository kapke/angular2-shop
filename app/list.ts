'use strict';

function ListComponent (components) {
    this._components = components;
    this._element = this._createElement();
}

ListComponent.prototype.getDOMElement = function () {
    return this._element;
};

ListComponent.prototype._createElement = function () {
    var ul = document.createElement('ul');

    this._components.forEach(function (component) {
        var li = document.createElement('li');

        li.appendChild(component.getDOMElement());
        ul.appendChild(li);
    });

    return ul;
};
