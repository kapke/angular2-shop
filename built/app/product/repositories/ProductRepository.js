System.register(["rxjs/Rx"], function(exports_1) {
    var Rx_1;
    var AbstractProductRepository;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            AbstractProductRepository = (function () {
                function AbstractProductRepository() {
                }
                AbstractProductRepository.prototype.getBySlug = function (slug) {
                    return Rx_1.Observable
                        .concat(this.getProducts(), this.getPromotedProducts())
                        .reduce(function (acc, products) {
                        return acc.concat(products);
                    }, [])
                        .map(function (products) {
                        return products
                            .filter(function (product) { return product.slug == slug; })
                            .shift();
                    });
                };
                return AbstractProductRepository;
            })();
            exports_1("AbstractProductRepository", AbstractProductRepository);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcmVwb3NpdG9yaWVzL1Byb2R1Y3RSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbIkFic3RyYWN0UHJvZHVjdFJlcG9zaXRvcnkiLCJBYnN0cmFjdFByb2R1Y3RSZXBvc2l0b3J5LmNvbnN0cnVjdG9yIiwiQWJzdHJhY3RQcm9kdWN0UmVwb3NpdG9yeS5nZXRCeVNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztZQVNBO2dCQUFBQTtnQkFrQkFDLENBQUNBO2dCQWRVRCw2Q0FBU0EsR0FBaEJBLFVBQWtCQSxJQUFZQTtvQkFDMUJFLE1BQU1BLENBQUNBLGVBQVVBO3lCQUNaQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO3lCQUN0REEsTUFBTUEsQ0FBQ0EsVUFBQ0EsR0FBR0EsRUFBRUEsUUFBUUE7d0JBQ2xCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtvQkFDaENBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO3lCQUNMQSxHQUFHQSxDQUFDQSxVQUFBQSxRQUFRQTt3QkFDVEEsTUFBTUEsQ0FBQ0EsUUFBUUE7NkJBQ1ZBLE1BQU1BLENBQUNBLFVBQUFBLE9BQU9BLElBQUlBLE9BQUFBLE9BQU9BLENBQUNBLElBQUlBLElBQUlBLElBQUlBLEVBQXBCQSxDQUFvQkEsQ0FBQ0E7NkJBQ3ZDQSxLQUFLQSxFQUFFQSxDQUFDQTtvQkFDakJBLENBQUNBLENBQUNBLENBQUNBO2dCQUNYQSxDQUFDQTtnQkFHTEYsZ0NBQUNBO1lBQURBLENBbEJBLEFBa0JDQSxJQUFBO1lBRTBCLGlFQUF5QiIsImZpbGUiOiJwcm9kdWN0L3JlcG9zaXRvcmllcy9Qcm9kdWN0UmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9lbnRpdGllcy9Qcm9kdWN0XCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XG5cbmludGVyZmFjZSBQcm9kdWN0UmVwb3NpdG9yeSB7XG4gICAgZ2V0UHJvZHVjdHMgKCk6IE9ic2VydmFibGU8UHJvZHVjdFtdPjtcbiAgICBnZXRQcm9tb3RlZFByb2R1Y3RzICgpOiBPYnNlcnZhYmxlPFByb2R1Y3RbXT47XG4gICAgZ2V0QnlTbHVnIChzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xufVxuXG5hYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFByb2R1Y3RSZXBvc2l0b3J5IGltcGxlbWVudHMgUHJvZHVjdFJlcG9zaXRvcnkge1xuICAgIGFic3RyYWN0IGdldFByb2R1Y3RzKCk6T2JzZXJ2YWJsZTxQcm9kdWN0W10+O1xuICAgIGFic3RyYWN0IGdldFByb21vdGVkUHJvZHVjdHMoKTpPYnNlcnZhYmxlPFByb2R1Y3RbXT47XG5cbiAgICBwdWJsaWMgZ2V0QnlTbHVnIChzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGVcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5nZXRQcm9kdWN0cygpLCB0aGlzLmdldFByb21vdGVkUHJvZHVjdHMoKSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgcHJvZHVjdHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChwcm9kdWN0cyk7XG4gICAgICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgIC5tYXAocHJvZHVjdHMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5zbHVnID09IHNsdWcpXG4gICAgICAgICAgICAgICAgICAgIC5zaGlmdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IHtQcm9kdWN0UmVwb3NpdG9yeSwgQWJzdHJhY3RQcm9kdWN0UmVwb3NpdG9yeX07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
