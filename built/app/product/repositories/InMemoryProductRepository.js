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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L3JlcG9zaXRvcmllcy9Jbk1lbW9yeVByb2R1Y3RSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbIkluTWVtb3J5UHJvZHVjdFJlcG9zaXRvcnkiLCJJbk1lbW9yeVByb2R1Y3RSZXBvc2l0b3J5LmNvbnN0cnVjdG9yIiwiSW5NZW1vcnlQcm9kdWN0UmVwb3NpdG9yeS5nZXRQcm9kdWN0cyIsIkluTWVtb3J5UHJvZHVjdFJlcG9zaXRvcnkuZ2V0UHJvbW90ZWRQcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBdURBLDZDQUF5QkE7Z0JBQzVFQTtvQkFDSUMsaUJBQU9BLENBQUNBO2dCQUNaQSxDQUFDQTtnQkFFTUQsK0NBQVdBLEdBQWxCQTtvQkFDSUUsTUFBTUEsQ0FBQ0EsZUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQ0EsUUFBUUE7d0JBQzlCQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQTs0QkFDVkEsSUFBSUEsaUJBQU9BLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBOzRCQUNuQ0EsSUFBSUEsaUJBQU9BLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLENBQUNBOzRCQUN4QkEsSUFBSUEsaUJBQU9BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLE9BQU9BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO3lCQUM1Q0EsQ0FBQ0EsQ0FBQ0E7d0JBQ0hBLFFBQVFBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO29CQUN4QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBO2dCQUVNRix1REFBbUJBLEdBQTFCQTtvQkFDSUcsTUFBTUEsQ0FBQ0EsZUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQ0EsUUFBUUE7d0JBQzlCQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQTs0QkFDVkEsSUFBSUEsaUJBQU9BLENBQUNBLE9BQU9BLEVBQUVBLEVBQUVBLENBQUNBOzRCQUN4QkEsSUFBSUEsaUJBQU9BLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLENBQUNBO3lCQUM5QkEsQ0FBQ0EsQ0FBQ0E7d0JBQ0hBLFFBQVFBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO29CQUN4QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBO2dCQUNMSCxnQ0FBQ0E7WUFBREEsQ0F6QkEsQUF5QkNBLEVBekJzRCw2Q0FBeUIsRUF5Qi9FO1lBekJELCtDQXlCQyxDQUFBIiwiZmlsZSI6ImFwcC9wcm9kdWN0L3JlcG9zaXRvcmllcy9Jbk1lbW9yeVByb2R1Y3RSZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uL2VudGl0aWVzL1Byb2R1Y3RcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCB7QWJzdHJhY3RQcm9kdWN0UmVwb3NpdG9yeX0gZnJvbSBcIi4vUHJvZHVjdFJlcG9zaXRvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5NZW1vcnlQcm9kdWN0UmVwb3NpdG9yeSBleHRlbmRzIEFic3RyYWN0UHJvZHVjdFJlcG9zaXRvcnkge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJvZHVjdHMgKCk6IE9ic2VydmFibGU8UHJvZHVjdFtdPiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoW1xuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0KCdZZXJiYScsIDQsIFsnU3Ryb25nJ10pLFxuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0KCdDb2ZmZWUnLCA1KSxcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdCgnVGVhJywgNCwgWydHcmVhdCcsICdTdXBlciddKVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJvbW90ZWRQcm9kdWN0cyAoKTogT2JzZXJ2YWJsZTxQcm9kdWN0W10+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChbXG4gICAgICAgICAgICAgICAgbmV3IFByb2R1Y3QoJ0xhdHRlJywgMTApLFxuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0KCdHcmVlbiBUZWEnLCA3KVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
