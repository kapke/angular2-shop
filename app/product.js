System.register([], function(exports_1) {
    var ProductComponent;
    return {
        setters:[],
        execute: function() {
            ProductComponent = (function () {
                function ProductComponent(product) {
                    this.product = product;
                    this.element = this.createElement();
                }
                Object.defineProperty(ProductComponent.prototype, "domElement", {
                    get: function () {
                        return this.element;
                    },
                    enumerable: true,
                    configurable: true
                });
                ProductComponent.prototype.createElement = function () {
                    var div = document.createElement('div');
                    var title = document.createElement('header');
                    title.textContent = this.product.name;
                    var price = document.createElement('span');
                    price.className = 'price';
                    price.textContent = this.product.price;
                    div.appendChild(title);
                    div.appendChild(price);
                    return div;
                };
                return ProductComponent;
            })();
            exports_1("default", ProductComponent);
        }
    }
});
//# sourceMappingURL=product.js.map