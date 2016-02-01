System.register(['angular2/core', "../product"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_1;
    var ProductSortPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            ProductSortPipe = (function () {
                function ProductSortPipe() {
                    this.compareProducts = function (sortingDescriptor, product1, product2) {
                        return product_1.Product.compare(sortingDescriptor.property, product1, product2) * sortingDescriptor.direction;
                    };
                }
                ProductSortPipe.prototype.transform = function (items, _a) {
                    var sortingDescriptor = _a[0];
                    return items.sort(this.compareProducts.bind(null, sortingDescriptor));
                };
                ProductSortPipe = __decorate([
                    core_1.Pipe({
                        name: 'productSort'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductSortPipe);
                return ProductSortPipe;
            })();
            exports_1("default", ProductSortPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L3BpcGVzL1Byb2R1Y3RTb3J0UGlwZS50cyJdLCJuYW1lcyI6WyJQcm9kdWN0U29ydFBpcGUiLCJQcm9kdWN0U29ydFBpcGUuY29uc3RydWN0b3IiLCJQcm9kdWN0U29ydFBpcGUudHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQUE7b0JBUVlDLG9CQUFlQSxHQUFHQSxVQUFDQSxpQkFBaUJBLEVBQUVBLFFBQWlCQSxFQUFFQSxRQUFpQkE7d0JBQzlFQSxNQUFNQSxDQUFDQSxpQkFBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxRQUFRQSxFQUFFQSxRQUFRQSxFQUFFQSxRQUFRQSxDQUFDQSxHQUFDQSxpQkFBaUJBLENBQUNBLFNBQVNBLENBQUNBO29CQUN2R0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ05BLENBQUNBO2dCQVBHRCxtQ0FBU0EsR0FBVEEsVUFBV0EsS0FBS0EsRUFBRUEsRUFBbUJBO3dCQUFsQkUsaUJBQWlCQTtvQkFDaENBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzFFQSxDQUFDQTtnQkFOTEY7b0JBQUNBLFdBQUlBLENBQUNBO3dCQUNGQSxJQUFJQSxFQUFFQSxhQUFhQTtxQkFDdEJBLENBQUNBOztvQ0FTREE7Z0JBQURBLHNCQUFDQTtZQUFEQSxDQVhBLEFBV0NBLElBQUE7WUFYRCxxQ0FXQyxDQUFBIiwiZmlsZSI6ImFwcC9wcm9kdWN0L3BpcGVzL1Byb2R1Y3RTb3J0UGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCIuLi9wcm9kdWN0XCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAncHJvZHVjdFNvcnQnXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFNvcnRQaXBlIHtcbiAgICB0cmFuc2Zvcm0gKGl0ZW1zLCBbc29ydGluZ0Rlc2NyaXB0b3JdKSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5zb3J0KHRoaXMuY29tcGFyZVByb2R1Y3RzLmJpbmQobnVsbCwgc29ydGluZ0Rlc2NyaXB0b3IpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbXBhcmVQcm9kdWN0cyA9IChzb3J0aW5nRGVzY3JpcHRvciwgcHJvZHVjdDE6IFByb2R1Y3QsIHByb2R1Y3QyOiBQcm9kdWN0KSA6IG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiBQcm9kdWN0LmNvbXBhcmUoc29ydGluZ0Rlc2NyaXB0b3IucHJvcGVydHksIHByb2R1Y3QxLCBwcm9kdWN0Mikqc29ydGluZ0Rlc2NyaXB0b3IuZGlyZWN0aW9uO1xuICAgIH07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
