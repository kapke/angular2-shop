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
                        templateUrl: 'dist/product/components/product-list-with-searching.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L2NvbXBvbmVudHMvUHJvZHVjdExpc3RXaXRoU2VhcmNoaW5nQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudCIsIlByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudC5vbkZpbHRlckNoYW5nZSIsIlByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudC5vblNvcnRDaGFuZ2UiLCJQcm9kdWN0TGlzdFdpdGhTZWFyY2hpbmdDb21wb25lbnQudXBkYXRlUHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQWlCSUEsMkNBQWtEQSxpQkFBb0NBO29CQUFwQ0Msc0JBQWlCQSxHQUFqQkEsaUJBQWlCQSxDQUFtQkE7b0JBVi9FQSxhQUFRQSxHQUFjQSxFQUFFQSxDQUFDQTtvQkFDekJBLHFCQUFnQkEsR0FBY0EsRUFBRUEsQ0FBQ0E7b0JBQ2pDQSxzQkFBaUJBLEdBQXFCQSxFQUFDQSxRQUFRQSxFQUFFQSxPQUFPQSxFQUFFQSxTQUFTQSxFQUFFQSxDQUFDQSxFQUFDQSxDQUFDQTtvQkFDeEVBLG1CQUFjQSxHQUFtQkE7d0JBQ3BDQSxFQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxRQUFRQSxFQUFFQSxPQUFPQSxFQUFDQTt3QkFDbENBLEVBQUNBLElBQUlBLEVBQUVBLE1BQU1BLEVBQUVBLFFBQVFBLEVBQUVBLE1BQU1BLEVBQUNBO3FCQUNuQ0EsQ0FBQ0E7b0JBRU1BLGVBQVVBLEdBQVdBLEVBQUVBLENBQUNBO29CQUc1QkEsSUFBSUEsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7Z0JBQzFCQSxDQUFDQTtnQkFFTUQsMERBQWNBLEdBQXJCQSxVQUF1QkEsU0FBaUJBO29CQUNwQ0UsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsU0FBU0EsQ0FBQ0E7b0JBQzVCQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtnQkFDMUJBLENBQUNBO2dCQUVNRix3REFBWUEsR0FBbkJBLFVBQXFCQSxVQUFVQTtvQkFDM0JHLElBQUlBLENBQUNBLGlCQUFpQkEsR0FBR0EsVUFBVUEsQ0FBQ0E7b0JBQ3BDQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtnQkFDMUJBLENBQUNBO2dCQUVPSCwwREFBY0EsR0FBdEJBO29CQUFBSSxpQkFhQ0E7b0JBWkdBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsV0FBV0EsRUFBRUE7eUJBQy9CQSxTQUFTQSxDQUNOQSxVQUFBQSxRQUFRQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxRQUFRQSxFQUF4QkEsQ0FBd0JBLEVBQ3BDQSxVQUFBQSxLQUFLQSxJQUFJQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxLQUFLQSxDQUFDQSxFQUEzQkEsQ0FBMkJBLEVBQ3BDQSxjQUFPQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFBQSxDQUFBQSxDQUFDQSxDQUM3QkEsQ0FBQ0E7b0JBQ05BLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsbUJBQW1CQSxFQUFFQTt5QkFDdkNBLFNBQVNBLENBQ05BLFVBQUFBLGdCQUFnQkEsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsZ0JBQWdCQSxHQUFHQSxnQkFBZ0JBLEVBQXhDQSxDQUF3Q0EsRUFDNURBLFVBQUFBLEtBQUtBLElBQUlBLE9BQUFBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLEVBQUVBLEtBQUtBLENBQUNBLEVBQTNCQSxDQUEyQkEsRUFDcENBLGNBQU9BLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUFBLENBQUFBLENBQUNBLENBQzdCQSxDQUFDQTtnQkFDVkEsQ0FBQ0E7Z0JBNUNMSjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSw2QkFBNkJBO3dCQUN2Q0EsVUFBVUEsRUFBRUEsQ0FBQ0EsOEJBQW9CQSxFQUFFQSxzQ0FBNEJBLEVBQUVBLDhCQUFxQkEsQ0FBQ0E7d0JBQ3ZGQSxLQUFLQSxFQUFFQSxDQUFDQSwyQkFBaUJBLEVBQUVBLHlCQUFlQSxDQUFDQTt3QkFDM0NBLFdBQVdBLEVBQUVBLDBEQUEwREE7cUJBQzFFQSxDQUFDQTtvQkFZZUEsV0FBQ0EsYUFBTUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFBQTs7c0RBNEI1Q0E7Z0JBQURBLHdDQUFDQTtZQUFEQSxDQTdDQSxBQTZDQ0EsSUFBQTtZQTdDRCx1REE2Q0MsQ0FBQSIsImZpbGUiOiJhcHAvcHJvZHVjdC9jb21wb25lbnRzL1Byb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IFByb2R1Y3RMaXN0Q29tcG9uZW50IGZyb20gJy4vUHJvZHVjdExpc3RDb21wb25lbnQnO1xuaW1wb3J0IFByb21vdGVkUHJvZHVjdExpc3RDb21wb25lbnQgZnJvbSAnLi9Qcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50JztcbmltcG9ydCBQcm9kdWN0RmlsdGVyUGlwZSBmcm9tICcuLi9waXBlcy9Qcm9kdWN0RmlsdGVyUGlwZSc7XG5pbXBvcnQgUHJvZHVjdFNvcnRQaXBlIGZyb20gJy4uL3BpcGVzL1Byb2R1Y3RTb3J0UGlwZSc7XG5pbXBvcnQge1Byb2R1Y3QsIFByb2R1Y3RSZXBvc2l0b3J5fSBmcm9tICcuLi9wcm9kdWN0JztcbmltcG9ydCB7U29ydGluZ1BhbmVsQ29tcG9uZW50LCBTb3J0aW5nT3B0aW9uLCBTb3J0aW5nRGVzY3JpcHRvcn0gZnJvbSBcIi4uLy4uL3NlYXJjaC9zZWFyY2hcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwcm9kdWN0LWxpc3Qtd2l0aC1zZWFyY2hpbmcnLFxuICAgIGRpcmVjdGl2ZXM6IFtQcm9kdWN0TGlzdENvbXBvbmVudCwgUHJvbW90ZWRQcm9kdWN0TGlzdENvbXBvbmVudCwgU29ydGluZ1BhbmVsQ29tcG9uZW50XSxcbiAgICBwaXBlczogW1Byb2R1Y3RGaWx0ZXJQaXBlLCBQcm9kdWN0U29ydFBpcGVdLFxuICAgIHRlbXBsYXRlVXJsOiAnZGlzdC9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1saXN0LXdpdGgtc2VhcmNoaW5nLmh0bWwnLFxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudCB7XG4gICAgcHVibGljIHByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXTtcbiAgICBwdWJsaWMgcHJvbW90ZWRQcm9kdWN0czogUHJvZHVjdFtdID0gW107XG4gICAgcHVibGljIHNvcnRpbmdEZXNjcmlwdG9yOlNvcnRpbmdEZXNjcmlwdG9yID0ge3Byb3BlcnR5OiAncHJpY2UnLCBkaXJlY3Rpb246IDB9O1xuICAgIHB1YmxpYyBzb3J0aW5nT3B0aW9uczpTb3J0aW5nT3B0aW9uW10gPSBbXG4gICAgICAgIHtuYW1lOiAnUHJpY2UnLCBwcm9wZXJ0eTogJ3ByaWNlJ30sXG4gICAgICAgIHtuYW1lOiAnTmFtZScsIHByb3BlcnR5OiAnbmFtZSd9XG4gICAgXTtcblxuICAgIHByaXZhdGUgZmlsdGVyVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvciAoQEluamVjdChcIlByb2R1Y3RSZXBvc2l0b3J5XCIpIHByaXZhdGUgcHJvZHVjdFJlcG9zaXRvcnk6IFByb2R1Y3RSZXBvc2l0b3J5KSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25GaWx0ZXJDaGFuZ2UgKG5ld0ZpbHRlcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyVGV4dCA9IG5ld0ZpbHRlcjtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblNvcnRDaGFuZ2UgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgdGhpcy5zb3J0aW5nRGVzY3JpcHRvciA9IGRlc2NyaXB0b3I7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVByb2R1Y3RzICgpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0UmVwb3NpdG9yeS5nZXRQcm9kdWN0cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzID0+IHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cyxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvciksXG4gICAgICAgICAgICAgICAgKCkgPT4ge2NvbnNvbGUubG9nKCdlbmQnKX1cbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvZHVjdFJlcG9zaXRvcnkuZ2V0UHJvbW90ZWRQcm9kdWN0cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHByb21vdGVkUHJvZHVjdHMgPT4gdGhpcy5wcm9tb3RlZFByb2R1Y3RzID0gcHJvbW90ZWRQcm9kdWN0cyxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvciksXG4gICAgICAgICAgICAgICAgKCkgPT4ge2NvbnNvbGUubG9nKCdlbmQnKX1cbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
