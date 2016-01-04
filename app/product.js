'use strict';
function ProductComponent(product) {
    this._product = product;
    this._element = this._createElement();
}
ProductComponent.prototype.getDOMElement = function () {
    return this._element;
};
ProductComponent.prototype._createElement = function () {
    var div = document.createElement('div');
    var title = document.createElement('header');
    title.textContent = this._product.name;
    var price = document.createElement('span');
    price.className = 'price';
    price.textContent = this._product.price;
    div.appendChild(title);
    div.appendChild(price);
    return div;
};
//# sourceMappingURL=product.js.map