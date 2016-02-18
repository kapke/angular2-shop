System.register([], function(exports_1) {
    var Product;
    return {
        setters:[],
        execute: function() {
            Product = (function () {
                function Product(name, price, tags) {
                    if (tags === void 0) { tags = []; }
                    this.name = name;
                    this.price = price;
                    this.tags = tags;
                }
                Object.defineProperty(Product.prototype, "slug", {
                    get: function () {
                        return this.name.toLowerCase().replace(/\s/g, '-');
                    },
                    enumerable: true,
                    configurable: true
                });
                Product.prototype.toString = function () {
                    return this.name + " " + this.price + " " + this.tags.join(' ');
                };
                Product.compare = function (property, product1, product2) {
                    switch (property) {
                        case 'price':
                            return product1.price - product2.price;
                        case 'name':
                            return product1.name.localeCompare(product2.name);
                    }
                };
                Product.fromObject = function (_a) {
                    var name = _a.name, price = _a.price, tags = _a.tags;
                    return new Product(name, price, tags);
                };
                return Product;
            })();
            exports_1("default", Product);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L2VudGl0aWVzL1Byb2R1Y3QudHMiXSwibmFtZXMiOlsiUHJvZHVjdCIsIlByb2R1Y3QuY29uc3RydWN0b3IiLCJQcm9kdWN0LnNsdWciLCJQcm9kdWN0LnRvU3RyaW5nIiwiUHJvZHVjdC5jb21wYXJlIiwiUHJvZHVjdC5mcm9tT2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7OztZQUFBO2dCQUtJQSxpQkFBb0JBLElBQVlBLEVBQVNBLEtBQWFBLEVBQVNBLElBQW1CQTtvQkFBMUJDLG9CQUEwQkEsR0FBMUJBLFNBQTBCQTtvQkFBOURBLFNBQUlBLEdBQUpBLElBQUlBLENBQVFBO29CQUFTQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFRQTtvQkFBU0EsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBZUE7Z0JBQ2xGQSxDQUFDQTtnQkFMREQsc0JBQUlBLHlCQUFJQTt5QkFBUkE7d0JBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO29CQUN2REEsQ0FBQ0E7OzttQkFBQUY7Z0JBS01BLDBCQUFRQSxHQUFmQTtvQkFDSUcsTUFBTUEsQ0FBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsU0FBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsU0FBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBR0EsQ0FBQ0E7Z0JBQy9EQSxDQUFDQTtnQkFFTUgsZUFBT0EsR0FBZEEsVUFBZ0JBLFFBQWdCQSxFQUFFQSxRQUFpQkEsRUFBRUEsUUFBaUJBO29CQUNsRUksTUFBTUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2ZBLEtBQUtBLE9BQU9BOzRCQUNSQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxHQUFHQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQTt3QkFDM0NBLEtBQUtBLE1BQU1BOzRCQUNQQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDMURBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFTUosa0JBQVVBLEdBQWpCQSxVQUFtQkEsRUFBa0VBO3dCQUFqRUssSUFBSUEsWUFBRUEsS0FBS0EsYUFBRUEsSUFBSUE7b0JBQ2pDQSxNQUFNQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFDQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQUNMTCxjQUFDQTtZQUFEQSxDQXhCQSxBQXdCQ0EsSUFBQTtZQXhCRCw2QkF3QkMsQ0FBQSIsImZpbGUiOiJhcHAvcHJvZHVjdC9lbnRpdGllcy9Qcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCB7XG4gICAgZ2V0IHNsdWcgKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJy0nKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHByaWNlOiBudW1iZXIsIHB1YmxpYyB0YWdzOiBzdHJpbmdbXSA9IFtdKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nICgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSAke3RoaXMucHJpY2V9ICR7dGhpcy50YWdzLmpvaW4oJyAnKX1gO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb21wYXJlIChwcm9wZXJ0eTogc3RyaW5nLCBwcm9kdWN0MTogUHJvZHVjdCwgcHJvZHVjdDI6IFByb2R1Y3QpOiBudW1iZXIge1xuICAgICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgICAgICAgICBjYXNlICdwcmljZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QxLnByaWNlIC0gcHJvZHVjdDIucHJpY2U7XG4gICAgICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdDEubmFtZS5sb2NhbGVDb21wYXJlKHByb2R1Y3QyLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21PYmplY3QgKHtuYW1lLCBwcmljZSwgdGFnc306IHtuYW1lOiBzdHJpbmcsIHByaWNlOiBudW1iZXIsIHRhZ3M6IHN0cmluZ1tdfSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3QobmFtZSwgcHJpY2UsIHRhZ3MpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
