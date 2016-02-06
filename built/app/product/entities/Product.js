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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvZW50aXRpZXMvUHJvZHVjdC50cyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwiUHJvZHVjdC5jb25zdHJ1Y3RvciIsIlByb2R1Y3Quc2x1ZyIsIlByb2R1Y3QudG9TdHJpbmciLCJQcm9kdWN0LmNvbXBhcmUiLCJQcm9kdWN0LmZyb21PYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7O1lBQUE7Z0JBS0lBLGlCQUFvQkEsSUFBWUEsRUFBU0EsS0FBYUEsRUFBU0EsSUFBbUJBO29CQUExQkMsb0JBQTBCQSxHQUExQkEsU0FBMEJBO29CQUE5REEsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBUUE7b0JBQVNBLFVBQUtBLEdBQUxBLEtBQUtBLENBQVFBO29CQUFTQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFlQTtnQkFDbEZBLENBQUNBO2dCQUxERCxzQkFBSUEseUJBQUlBO3lCQUFSQTt3QkFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZEQSxDQUFDQTs7O21CQUFBRjtnQkFLTUEsMEJBQVFBLEdBQWZBO29CQUNJRyxNQUFNQSxDQUFJQSxJQUFJQSxDQUFDQSxJQUFJQSxTQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxTQUFJQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFHQSxDQUFDQTtnQkFDL0RBLENBQUNBO2dCQUVNSCxlQUFPQSxHQUFkQSxVQUFnQkEsUUFBZ0JBLEVBQUVBLFFBQWlCQSxFQUFFQSxRQUFpQkE7b0JBQ2xFSSxNQUFNQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDZkEsS0FBS0EsT0FBT0E7NEJBQ1JBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLEdBQUdBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBO3dCQUMzQ0EsS0FBS0EsTUFBTUE7NEJBQ1BBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUMxREEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVNSixrQkFBVUEsR0FBakJBLFVBQW1CQSxFQUFrRUE7d0JBQWpFSyxJQUFJQSxZQUFFQSxLQUFLQSxhQUFFQSxJQUFJQTtvQkFDakNBLE1BQU1BLENBQUNBLElBQUlBLE9BQU9BLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO2dCQUMxQ0EsQ0FBQ0E7Z0JBQ0xMLGNBQUNBO1lBQURBLENBeEJBLEFBd0JDQSxJQUFBO1lBeEJELDZCQXdCQyxDQUFBIiwiZmlsZSI6InByb2R1Y3QvZW50aXRpZXMvUHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3Qge1xuICAgIGdldCBzbHVnICgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICctJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBwcmljZTogbnVtYmVyLCBwdWJsaWMgdGFnczogc3RyaW5nW10gPSBbXSkge1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZyAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gJHt0aGlzLnByaWNlfSAke3RoaXMudGFncy5qb2luKCcgJyl9YDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29tcGFyZSAocHJvcGVydHk6IHN0cmluZywgcHJvZHVjdDE6IFByb2R1Y3QsIHByb2R1Y3QyOiBQcm9kdWN0KTogbnVtYmVyIHtcbiAgICAgICAgc3dpdGNoIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgY2FzZSAncHJpY2UnOlxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0MS5wcmljZSAtIHByb2R1Y3QyLnByaWNlO1xuICAgICAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QxLm5hbWUubG9jYWxlQ29tcGFyZShwcm9kdWN0Mi5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tT2JqZWN0ICh7bmFtZSwgcHJpY2UsIHRhZ3N9OiB7bmFtZTogc3RyaW5nLCBwcmljZTogbnVtYmVyLCB0YWdzOiBzdHJpbmdbXX0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0KG5hbWUsIHByaWNlLCB0YWdzKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
