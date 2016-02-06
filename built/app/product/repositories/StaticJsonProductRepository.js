System.register(["angular2/core", "angular2/http", "../entities/Product", "rxjs/add/operator/map", "rxjs/add/operator/retryWhen", "rxjs/add/operator/delay", "rxjs/add/operator/scan", "./ProductRepository"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Product_1, ProductRepository_1;
    var StaticJsonProductRepository;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Product_1_1) {
                Product_1 = Product_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (ProductRepository_1_1) {
                ProductRepository_1 = ProductRepository_1_1;
            }],
        execute: function() {
            StaticJsonProductRepository = (function (_super) {
                __extends(StaticJsonProductRepository, _super);
                function StaticJsonProductRepository(http) {
                    _super.call(this);
                    this.http = http;
                    this.productsPath = 'data/products.json';
                    this.promotedProductsPath = 'data/promoted-products.json';
                }
                StaticJsonProductRepository.prototype.getProducts = function (path) {
                    if (path === void 0) { path = this.productsPath; }
                    return this.http.get(path)
                        .map(function (res) { return res.json(); })
                        .map(function (data) { return data.map(Product_1.default.fromObject); })
                        .retryWhen(function (errors) {
                        return errors.scan(function (errorsCount, err) {
                            if (errorsCount >= 5) {
                                throw err;
                            }
                            else {
                                return errorsCount + 1;
                            }
                        }, 0)
                            .delay(500);
                    });
                };
                StaticJsonProductRepository.prototype.getPromotedProducts = function () {
                    return this.getProducts(this.promotedProductsPath);
                };
                StaticJsonProductRepository.prototype.getFailingProducts = function () {
                    return this.getProducts('non-existing-path');
                };
                StaticJsonProductRepository = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], StaticJsonProductRepository);
                return StaticJsonProductRepository;
            })(ProductRepository_1.AbstractProductRepository);
            exports_1("default", StaticJsonProductRepository);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcmVwb3NpdG9yaWVzL1N0YXRpY0pzb25Qcm9kdWN0UmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6WyJTdGF0aWNKc29uUHJvZHVjdFJlcG9zaXRvcnkiLCJTdGF0aWNKc29uUHJvZHVjdFJlcG9zaXRvcnkuY29uc3RydWN0b3IiLCJTdGF0aWNKc29uUHJvZHVjdFJlcG9zaXRvcnkuZ2V0UHJvZHVjdHMiLCJTdGF0aWNKc29uUHJvZHVjdFJlcG9zaXRvcnkuZ2V0UHJvbW90ZWRQcm9kdWN0cyIsIlN0YXRpY0pzb25Qcm9kdWN0UmVwb3NpdG9yeS5nZXRGYWlsaW5nUHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUN5REEsK0NBQXlCQTtnQkFJOUVBLHFDQUFxQkEsSUFBVUE7b0JBQzNCQyxpQkFBT0EsQ0FBQ0E7b0JBRFNBLFNBQUlBLEdBQUpBLElBQUlBLENBQU1BO29CQUh2QkEsaUJBQVlBLEdBQUdBLG9CQUFvQkEsQ0FBQ0E7b0JBQ3BDQSx5QkFBb0JBLEdBQUdBLDZCQUE2QkEsQ0FBQ0E7Z0JBSTdEQSxDQUFDQTtnQkFFREQsaURBQVdBLEdBQVhBLFVBQWFBLElBQXdCQTtvQkFBeEJFLG9CQUF3QkEsR0FBeEJBLE9BQU9BLElBQUlBLENBQUNBLFlBQVlBO29CQUNqQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7eUJBQ3JCQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQTt5QkFDdEJBLEdBQUdBLENBQUNBLFVBQUFBLElBQUlBLElBQUlBLE9BQUFBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGlCQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUE1QkEsQ0FBNEJBLENBQUNBO3lCQUN6Q0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsTUFBTUE7d0JBQ2RBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLFdBQW1CQSxFQUFFQSxHQUFHQTs0QkFDcENBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dDQUNuQkEsTUFBTUEsR0FBR0EsQ0FBQ0E7NEJBQ2RBLENBQUNBOzRCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQ0FDSkEsTUFBTUEsQ0FBQ0EsV0FBV0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7NEJBQzNCQSxDQUFDQTt3QkFDTEEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7NkJBQ0pBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO29CQUNwQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1hBLENBQUNBO2dCQUVERix5REFBbUJBLEdBQW5CQTtvQkFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtnQkFDdkRBLENBQUNBO2dCQUVESCx3REFBa0JBLEdBQWxCQTtvQkFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQTtnQkFDakRBLENBQUNBO2dCQS9CTEo7b0JBQUNBLGlCQUFVQSxFQUFFQTs7Z0RBZ0NaQTtnQkFBREEsa0NBQUNBO1lBQURBLENBaENBLEFBZ0NDQSxFQS9Cd0QsNkNBQXlCLEVBK0JqRjtZQWhDRCxpREFnQ0MsQ0FBQSIsImZpbGUiOiJwcm9kdWN0L3JlcG9zaXRvcmllcy9TdGF0aWNKc29uUHJvZHVjdFJlcG9zaXRvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vZW50aXRpZXMvUHJvZHVjdFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9yZXRyeVdoZW5cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RlbGF5XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zY2FuXCI7XG5pbXBvcnQge0Fic3RyYWN0UHJvZHVjdFJlcG9zaXRvcnl9IGZyb20gXCIuL1Byb2R1Y3RSZXBvc2l0b3J5XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY0pzb25Qcm9kdWN0UmVwb3NpdG9yeSBleHRlbmRzIEFic3RyYWN0UHJvZHVjdFJlcG9zaXRvcnkge1xuICAgIHByaXZhdGUgcHJvZHVjdHNQYXRoID0gJ2RhdGEvcHJvZHVjdHMuanNvbic7XG4gICAgcHJpdmF0ZSBwcm9tb3RlZFByb2R1Y3RzUGF0aCA9ICdkYXRhL3Byb21vdGVkLXByb2R1Y3RzLmpzb24nO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldFByb2R1Y3RzIChwYXRoID0gdGhpcy5wcm9kdWN0c1BhdGgpOiBPYnNlcnZhYmxlPFByb2R1Y3RbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChwYXRoKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5tYXAoZGF0YSA9PiBkYXRhLm1hcChQcm9kdWN0LmZyb21PYmplY3QpKVxuICAgICAgICAgICAgLnJldHJ5V2hlbigoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ycy5zY2FuKChlcnJvcnNDb3VudDogbnVtYmVyLCBlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnNDb3VudCA+PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JzQ291bnQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoNTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFByb21vdGVkUHJvZHVjdHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9kdWN0cyh0aGlzLnByb21vdGVkUHJvZHVjdHNQYXRoKTtcbiAgICB9XG5cbiAgICBnZXRGYWlsaW5nUHJvZHVjdHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9kdWN0cygnbm9uLWV4aXN0aW5nLXBhdGgnKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
