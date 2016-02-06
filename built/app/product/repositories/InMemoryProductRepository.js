System.register(["../entities/Product", "rxjs/Rx", "./ProductRepository"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Product_1, Rx_1, ProductRepository_1;
    var InMemoryProductRepository;
    return {
        setters:[
            function (Product_1_1) {
                Product_1 = Product_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (ProductRepository_1_1) {
                ProductRepository_1 = ProductRepository_1_1;
            }],
        execute: function() {
            InMemoryProductRepository = (function (_super) {
                __extends(InMemoryProductRepository, _super);
                function InMemoryProductRepository() {
                    _super.call(this);
                }
                InMemoryProductRepository.prototype.getProducts = function () {
                    return Rx_1.Observable.create(function (observer) {
                        observer.next([
                            new Product_1.default('Yerba', 4, ['Strong']),
                            new Product_1.default('Coffee', 5),
                            new Product_1.default('Tea', 4, ['Great', 'Super'])
                        ]);
                        observer.complete();
                    });
                };
                InMemoryProductRepository.prototype.getPromotedProducts = function () {
                    return Rx_1.Observable.create(function (observer) {
                        observer.next([
                            new Product_1.default('Latte', 10),
                            new Product_1.default('Green Tea', 7)
                        ]);
                        observer.complete();
                    });
                };
                return InMemoryProductRepository;
            })(ProductRepository_1.AbstractProductRepository);
            exports_1("default", InMemoryProductRepository);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcmVwb3NpdG9yaWVzL0luTWVtb3J5UHJvZHVjdFJlcG9zaXRvcnkudHMiXSwibmFtZXMiOlsiSW5NZW1vcnlQcm9kdWN0UmVwb3NpdG9yeSIsIkluTWVtb3J5UHJvZHVjdFJlcG9zaXRvcnkuY29uc3RydWN0b3IiLCJJbk1lbW9yeVByb2R1Y3RSZXBvc2l0b3J5LmdldFByb2R1Y3RzIiwiSW5NZW1vcnlQcm9kdWN0UmVwb3NpdG9yeS5nZXRQcm9tb3RlZFByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUF1REEsNkNBQXlCQTtnQkFDNUVBO29CQUNJQyxpQkFBT0EsQ0FBQ0E7Z0JBQ1pBLENBQUNBO2dCQUVNRCwrQ0FBV0EsR0FBbEJBO29CQUNJRSxNQUFNQSxDQUFDQSxlQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxRQUFRQTt3QkFDOUJBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBOzRCQUNWQSxJQUFJQSxpQkFBT0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7NEJBQ25DQSxJQUFJQSxpQkFBT0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7NEJBQ3hCQSxJQUFJQSxpQkFBT0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsT0FBT0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7eUJBQzVDQSxDQUFDQSxDQUFDQTt3QkFDSEEsUUFBUUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7b0JBQ3hCQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBRU1GLHVEQUFtQkEsR0FBMUJBO29CQUNJRyxNQUFNQSxDQUFDQSxlQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxRQUFRQTt3QkFDOUJBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBOzRCQUNWQSxJQUFJQSxpQkFBT0EsQ0FBQ0EsT0FBT0EsRUFBRUEsRUFBRUEsQ0FBQ0E7NEJBQ3hCQSxJQUFJQSxpQkFBT0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7eUJBQzlCQSxDQUFDQSxDQUFDQTt3QkFDSEEsUUFBUUEsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7b0JBQ3hCQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBQ0xILGdDQUFDQTtZQUFEQSxDQXpCQSxBQXlCQ0EsRUF6QnNELDZDQUF5QixFQXlCL0U7WUF6QkQsK0NBeUJDLENBQUEiLCJmaWxlIjoicHJvZHVjdC9yZXBvc2l0b3JpZXMvSW5NZW1vcnlQcm9kdWN0UmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9lbnRpdGllcy9Qcm9kdWN0XCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQge0Fic3RyYWN0UHJvZHVjdFJlcG9zaXRvcnl9IGZyb20gXCIuL1Byb2R1Y3RSZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluTWVtb3J5UHJvZHVjdFJlcG9zaXRvcnkgZXh0ZW5kcyBBYnN0cmFjdFByb2R1Y3RSZXBvc2l0b3J5IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFByb2R1Y3RzICgpOiBPYnNlcnZhYmxlPFByb2R1Y3RbXT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KFtcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdCgnWWVyYmEnLCA0LCBbJ1N0cm9uZyddKSxcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdCgnQ29mZmVlJywgNSksXG4gICAgICAgICAgICAgICAgbmV3IFByb2R1Y3QoJ1RlYScsIDQsIFsnR3JlYXQnLCAnU3VwZXInXSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFByb21vdGVkUHJvZHVjdHMgKCk6IE9ic2VydmFibGU8UHJvZHVjdFtdPiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoW1xuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0KCdMYXR0ZScsIDEwKSxcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdCgnR3JlZW4gVGVhJywgNylcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
