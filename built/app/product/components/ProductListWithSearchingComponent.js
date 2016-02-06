System.register(['angular2/core', './ProductListComponent', './PromotedProductListComponent', '../pipes/ProductFilterPipe', '../pipes/ProductSortPipe', "../../search/search"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, ProductListComponent_1, PromotedProductListComponent_1, ProductFilterPipe_1, ProductSortPipe_1, search_1;
    var ProductListWithSearchingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ProductListComponent_1_1) {
                ProductListComponent_1 = ProductListComponent_1_1;
            },
            function (PromotedProductListComponent_1_1) {
                PromotedProductListComponent_1 = PromotedProductListComponent_1_1;
            },
            function (ProductFilterPipe_1_1) {
                ProductFilterPipe_1 = ProductFilterPipe_1_1;
            },
            function (ProductSortPipe_1_1) {
                ProductSortPipe_1 = ProductSortPipe_1_1;
            },
            function (search_1_1) {
                search_1 = search_1_1;
            }],
        execute: function() {
            ProductListWithSearchingComponent = (function () {
                function ProductListWithSearchingComponent(productRepository) {
                    this.productRepository = productRepository;
                    this.products = [];
                    this.promotedProducts = [];
                    this.sortingDescriptor = { property: 'price', direction: 0 };
                    this.sortingOptions = [
                        { name: 'Price', property: 'price' },
                        { name: 'Name', property: 'name' }
                    ];
                    this.filterText = '';
                    this.updateProducts();
                }
                ProductListWithSearchingComponent.prototype.onFilterChange = function (newFilter) {
                    this.filterText = newFilter;
                    this.updateProducts();
                };
                ProductListWithSearchingComponent.prototype.onSortChange = function (descriptor) {
                    this.sortingDescriptor = descriptor;
                    this.updateProducts();
                };
                ProductListWithSearchingComponent.prototype.updateProducts = function () {
                    var _this = this;
                    this.productRepository.getProducts()
                        .subscribe(function (products) { return _this.products = products; }, function (error) { return console.log('error', error); }, function () { console.log('end'); });
                    this.productRepository.getPromotedProducts()
                        .subscribe(function (promotedProducts) { return _this.promotedProducts = promotedProducts; }, function (error) { return console.log('error', error); }, function () { console.log('end'); });
                };
                ProductListWithSearchingComponent = __decorate([
                    core_1.Component({
                        selector: 'product-list-with-searching',
                        directives: [ProductListComponent_1.default, PromotedProductListComponent_1.default, search_1.SortingPanelComponent],
                        pipes: [ProductFilterPipe_1.default, ProductSortPipe_1.default],
                        templateUrl: 'built/app/product/components/product-list-with-searching.html'
                    }),
                    __param(0, core_1.Inject("ProductRepository")), 
                    __metadata('design:paramtypes', [Object])
                ], ProductListWithSearchingComponent);
                return ProductListWithSearchingComponent;
            })();
            exports_1("default", ProductListWithSearchingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvY29tcG9uZW50cy9Qcm9kdWN0TGlzdFdpdGhTZWFyY2hpbmdDb21wb25lbnQudHMiXSwibmFtZXMiOlsiUHJvZHVjdExpc3RXaXRoU2VhcmNoaW5nQ29tcG9uZW50IiwiUHJvZHVjdExpc3RXaXRoU2VhcmNoaW5nQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiUHJvZHVjdExpc3RXaXRoU2VhcmNoaW5nQ29tcG9uZW50Lm9uRmlsdGVyQ2hhbmdlIiwiUHJvZHVjdExpc3RXaXRoU2VhcmNoaW5nQ29tcG9uZW50Lm9uU29ydENoYW5nZSIsIlByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudC51cGRhdGVQcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBaUJJQSwyQ0FBa0RBLGlCQUFvQ0E7b0JBQXBDQyxzQkFBaUJBLEdBQWpCQSxpQkFBaUJBLENBQW1CQTtvQkFWL0VBLGFBQVFBLEdBQWNBLEVBQUVBLENBQUNBO29CQUN6QkEscUJBQWdCQSxHQUFjQSxFQUFFQSxDQUFDQTtvQkFDakNBLHNCQUFpQkEsR0FBcUJBLEVBQUNBLFFBQVFBLEVBQUVBLE9BQU9BLEVBQUVBLFNBQVNBLEVBQUVBLENBQUNBLEVBQUNBLENBQUNBO29CQUN4RUEsbUJBQWNBLEdBQW1CQTt3QkFDcENBLEVBQUNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLFFBQVFBLEVBQUVBLE9BQU9BLEVBQUNBO3dCQUNsQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsUUFBUUEsRUFBRUEsTUFBTUEsRUFBQ0E7cUJBQ25DQSxDQUFDQTtvQkFFTUEsZUFBVUEsR0FBV0EsRUFBRUEsQ0FBQ0E7b0JBRzVCQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtnQkFDMUJBLENBQUNBO2dCQUVNRCwwREFBY0EsR0FBckJBLFVBQXVCQSxTQUFpQkE7b0JBQ3BDRSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxDQUFDQTtvQkFDNUJBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBRU1GLHdEQUFZQSxHQUFuQkEsVUFBcUJBLFVBQVVBO29CQUMzQkcsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxVQUFVQSxDQUFDQTtvQkFDcENBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBRU9ILDBEQUFjQSxHQUF0QkE7b0JBQUFJLGlCQWFDQTtvQkFaR0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxXQUFXQSxFQUFFQTt5QkFDL0JBLFNBQVNBLENBQ05BLFVBQUFBLFFBQVFBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLEVBQXhCQSxDQUF3QkEsRUFDcENBLFVBQUFBLEtBQUtBLElBQUlBLE9BQUFBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLEVBQUVBLEtBQUtBLENBQUNBLEVBQTNCQSxDQUEyQkEsRUFDcENBLGNBQU9BLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBLENBQzdCQSxDQUFDQTtvQkFDTkEsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxtQkFBbUJBLEVBQUVBO3lCQUN2Q0EsU0FBU0EsQ0FDTkEsVUFBQUEsZ0JBQWdCQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxnQkFBZ0JBLEdBQUdBLGdCQUFnQkEsRUFBeENBLENBQXdDQSxFQUM1REEsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsRUFBRUEsS0FBS0EsQ0FBQ0EsRUFBM0JBLENBQTJCQSxFQUNwQ0EsY0FBT0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQUEsQ0FBQ0EsQ0FDN0JBLENBQUNBO2dCQUNWQSxDQUFDQTtnQkE1Q0xKO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLDZCQUE2QkE7d0JBQ3ZDQSxVQUFVQSxFQUFFQSxDQUFDQSw4QkFBb0JBLEVBQUVBLHNDQUE0QkEsRUFBRUEsOEJBQXFCQSxDQUFDQTt3QkFDdkZBLEtBQUtBLEVBQUVBLENBQUNBLDJCQUFpQkEsRUFBRUEseUJBQWVBLENBQUNBO3dCQUMzQ0EsV0FBV0EsRUFBRUEsK0RBQStEQTtxQkFDL0VBLENBQUNBO29CQVllQSxXQUFDQSxhQUFNQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUFBOztzREE0QjVDQTtnQkFBREEsd0NBQUNBO1lBQURBLENBN0NBLEFBNkNDQSxJQUFBO1lBN0NELHVEQTZDQyxDQUFBIiwiZmlsZSI6InByb2R1Y3QvY29tcG9uZW50cy9Qcm9kdWN0TGlzdFdpdGhTZWFyY2hpbmdDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCBQcm9kdWN0TGlzdENvbXBvbmVudCBmcm9tICcuL1Byb2R1Y3RMaXN0Q29tcG9uZW50JztcbmltcG9ydCBQcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50IGZyb20gJy4vUHJvbW90ZWRQcm9kdWN0TGlzdENvbXBvbmVudCc7XG5pbXBvcnQgUHJvZHVjdEZpbHRlclBpcGUgZnJvbSAnLi4vcGlwZXMvUHJvZHVjdEZpbHRlclBpcGUnO1xuaW1wb3J0IFByb2R1Y3RTb3J0UGlwZSBmcm9tICcuLi9waXBlcy9Qcm9kdWN0U29ydFBpcGUnO1xuaW1wb3J0IHtQcm9kdWN0LCBQcm9kdWN0UmVwb3NpdG9yeX0gZnJvbSAnLi4vcHJvZHVjdCc7XG5pbXBvcnQge1NvcnRpbmdQYW5lbENvbXBvbmVudCwgU29ydGluZ09wdGlvbiwgU29ydGluZ0Rlc2NyaXB0b3J9IGZyb20gXCIuLi8uLi9zZWFyY2gvc2VhcmNoXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHJvZHVjdC1saXN0LXdpdGgtc2VhcmNoaW5nJyxcbiAgICBkaXJlY3RpdmVzOiBbUHJvZHVjdExpc3RDb21wb25lbnQsIFByb21vdGVkUHJvZHVjdExpc3RDb21wb25lbnQsIFNvcnRpbmdQYW5lbENvbXBvbmVudF0sXG4gICAgcGlwZXM6IFtQcm9kdWN0RmlsdGVyUGlwZSwgUHJvZHVjdFNvcnRQaXBlXSxcbiAgICB0ZW1wbGF0ZVVybDogJ2J1aWx0L2FwcC9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1saXN0LXdpdGgtc2VhcmNoaW5nLmh0bWwnXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3RXaXRoU2VhcmNoaW5nQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtdO1xuICAgIHB1YmxpYyBwcm9tb3RlZFByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXTtcbiAgICBwdWJsaWMgc29ydGluZ0Rlc2NyaXB0b3I6U29ydGluZ0Rlc2NyaXB0b3IgPSB7cHJvcGVydHk6ICdwcmljZScsIGRpcmVjdGlvbjogMH07XG4gICAgcHVibGljIHNvcnRpbmdPcHRpb25zOlNvcnRpbmdPcHRpb25bXSA9IFtcbiAgICAgICAge25hbWU6ICdQcmljZScsIHByb3BlcnR5OiAncHJpY2UnfSxcbiAgICAgICAge25hbWU6ICdOYW1lJywgcHJvcGVydHk6ICduYW1lJ31cbiAgICBdO1xuXG4gICAgcHJpdmF0ZSBmaWx0ZXJUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yIChASW5qZWN0KFwiUHJvZHVjdFJlcG9zaXRvcnlcIikgcHJpdmF0ZSBwcm9kdWN0UmVwb3NpdG9yeTogUHJvZHVjdFJlcG9zaXRvcnkpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkZpbHRlckNoYW5nZSAobmV3RmlsdGVyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJUZXh0ID0gbmV3RmlsdGVyO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU29ydENoYW5nZSAoZGVzY3JpcHRvcikge1xuICAgICAgICB0aGlzLnNvcnRpbmdEZXNjcmlwdG9yID0gZGVzY3JpcHRvcjtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUHJvZHVjdHMgKCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RSZXBvc2l0b3J5LmdldFByb2R1Y3RzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMgPT4gdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7Y29uc29sZS5sb2coJ2VuZCcpfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0UmVwb3NpdG9yeS5nZXRQcm9tb3RlZFByb2R1Y3RzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcHJvbW90ZWRQcm9kdWN0cyA9PiB0aGlzLnByb21vdGVkUHJvZHVjdHMgPSBwcm9tb3RlZFByb2R1Y3RzLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7Y29uc29sZS5sb2coJ2VuZCcpfVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
