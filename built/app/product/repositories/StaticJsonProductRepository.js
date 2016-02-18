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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L3JlcG9zaXRvcmllcy9TdGF0aWNKc29uUHJvZHVjdFJlcG9zaXRvcnkudHMiXSwibmFtZXMiOlsiU3RhdGljSnNvblByb2R1Y3RSZXBvc2l0b3J5IiwiU3RhdGljSnNvblByb2R1Y3RSZXBvc2l0b3J5LmNvbnN0cnVjdG9yIiwiU3RhdGljSnNvblByb2R1Y3RSZXBvc2l0b3J5LmdldFByb2R1Y3RzIiwiU3RhdGljSnNvblByb2R1Y3RSZXBvc2l0b3J5LmdldFByb21vdGVkUHJvZHVjdHMiLCJTdGF0aWNKc29uUHJvZHVjdFJlcG9zaXRvcnkuZ2V0RmFpbGluZ1Byb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFDeURBLCtDQUF5QkE7Z0JBSTlFQSxxQ0FBcUJBLElBQVVBO29CQUMzQkMsaUJBQU9BLENBQUNBO29CQURTQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtvQkFIdkJBLGlCQUFZQSxHQUFHQSxvQkFBb0JBLENBQUNBO29CQUNwQ0EseUJBQW9CQSxHQUFHQSw2QkFBNkJBLENBQUNBO2dCQUk3REEsQ0FBQ0E7Z0JBRURELGlEQUFXQSxHQUFYQSxVQUFhQSxJQUF3QkE7b0JBQXhCRSxvQkFBd0JBLEdBQXhCQSxPQUFPQSxJQUFJQSxDQUFDQSxZQUFZQTtvQkFDakNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBO3lCQUNyQkEsR0FBR0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBVkEsQ0FBVUEsQ0FBQ0E7eUJBQ3RCQSxHQUFHQSxDQUFDQSxVQUFBQSxJQUFJQSxJQUFJQSxPQUFBQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsRUFBNUJBLENBQTRCQSxDQUFDQTt5QkFDekNBLFNBQVNBLENBQUNBLFVBQUNBLE1BQU1BO3dCQUNkQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxXQUFtQkEsRUFBRUEsR0FBR0E7NEJBQ3BDQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQ0FDbkJBLE1BQU1BLEdBQUdBLENBQUNBOzRCQUNkQSxDQUFDQTs0QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0NBQ0pBLE1BQU1BLENBQUNBLFdBQVdBLEdBQUdBLENBQUNBLENBQUNBOzRCQUMzQkEsQ0FBQ0E7d0JBQ0xBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBOzZCQUNKQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDcEJBLENBQUNBLENBQUNBLENBQUNBO2dCQUNYQSxDQUFDQTtnQkFFREYseURBQW1CQSxHQUFuQkE7b0JBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZEQSxDQUFDQTtnQkFFREgsd0RBQWtCQSxHQUFsQkE7b0JBQ0lJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pEQSxDQUFDQTtnQkEvQkxKO29CQUFDQSxpQkFBVUEsRUFBRUE7O2dEQWdDWkE7Z0JBQURBLGtDQUFDQTtZQUFEQSxDQWhDQSxBQWdDQ0EsRUEvQndELDZDQUF5QixFQStCakY7WUFoQ0QsaURBZ0NDLENBQUEiLCJmaWxlIjoiYXBwL3Byb2R1Y3QvcmVwb3NpdG9yaWVzL1N0YXRpY0pzb25Qcm9kdWN0UmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9lbnRpdGllcy9Qcm9kdWN0XCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3JldHJ5V2hlblwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZGVsYXlcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3NjYW5cIjtcbmltcG9ydCB7QWJzdHJhY3RQcm9kdWN0UmVwb3NpdG9yeX0gZnJvbSBcIi4vUHJvZHVjdFJlcG9zaXRvcnlcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljSnNvblByb2R1Y3RSZXBvc2l0b3J5IGV4dGVuZHMgQWJzdHJhY3RQcm9kdWN0UmVwb3NpdG9yeSB7XG4gICAgcHJpdmF0ZSBwcm9kdWN0c1BhdGggPSAnZGF0YS9wcm9kdWN0cy5qc29uJztcbiAgICBwcml2YXRlIHByb21vdGVkUHJvZHVjdHNQYXRoID0gJ2RhdGEvcHJvbW90ZWQtcHJvZHVjdHMuanNvbic7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdHMgKHBhdGggPSB0aGlzLnByb2R1Y3RzUGF0aCk6IE9ic2VydmFibGU8UHJvZHVjdFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHBhdGgpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLm1hcChkYXRhID0+IGRhdGEubWFwKFByb2R1Y3QuZnJvbU9iamVjdCkpXG4gICAgICAgICAgICAucmV0cnlXaGVuKChlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JzLnNjYW4oKGVycm9yc0NvdW50OiBudW1iZXIsIGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yc0NvdW50ID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcnNDb3VudCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSg1MDApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvbW90ZWRQcm9kdWN0cyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb2R1Y3RzKHRoaXMucHJvbW90ZWRQcm9kdWN0c1BhdGgpO1xuICAgIH1cblxuICAgIGdldEZhaWxpbmdQcm9kdWN0cyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb2R1Y3RzKCdub24tZXhpc3RpbmctcGF0aCcpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
