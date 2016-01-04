'use strict';
function ProductList(products) {
    this._products = products;
    this._element = this._createElement();
}
ProductList.prototype.getDOMElement = function () {
    return this._element;
};
ProductList.prototype._createElement = function () {
    var productComponents = this._products.map(function (product) {
        return new ProductComponent(product);
    });
    var listComponent = new ListComponent(productComponents);
    return listComponent.getDOMElement();
};
//# sourceMappingURL=productList.js.map