System.register(['angular2/core', 'angular2/router', "../../product/product"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, product_1;
    var ProductsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            ProductsComponent = (function () {
                function ProductsComponent() {
                }
                ProductsComponent = __decorate([
                    core_1.Component({
                        selector: 's-products',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: '<router-outlet></router-outlet>'
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'ProductList', component: product_1.ProductListWithSearchingComponent, useAsDefault: true },
                        { path: '/:slug', name: 'Product', component: product_1.RoutableProductComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ProductsComponent);
                return ProductsComponent;
            })();
            exports_1("default", ProductsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdHNDb21wb25lbnQudHMiXSwibmFtZXMiOlsiUHJvZHVjdHNDb21wb25lbnQiLCJQcm9kdWN0c0NvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUFBO2dCQVVBQyxDQUFDQTtnQkFWREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7d0JBQ3RCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLENBQUNBO3dCQUMvQkEsUUFBUUEsRUFBRUEsaUNBQWlDQTtxQkFDOUNBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1RBLEVBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBLGFBQWFBLEVBQUVBLFNBQVNBLEVBQUVBLDJDQUFpQ0EsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBQ0E7d0JBQ2xHQSxFQUFDQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxJQUFJQSxFQUFFQSxTQUFTQSxFQUFFQSxTQUFTQSxFQUFFQSxrQ0FBd0JBLEVBQUNBO3FCQUN6RUEsQ0FBQ0E7O3NDQUVEQTtnQkFBREEsd0JBQUNBO1lBQURBLENBVkEsQUFVQ0EsSUFBQTtZQVZELHVDQVVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0c0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0YWJsZVByb2R1Y3RDb21wb25lbnQsIFByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudH0gZnJvbSBcIi4uLy4uL3Byb2R1Y3QvcHJvZHVjdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3MtcHJvZHVjdHMnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6ICc8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+J1xufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6ICcvJywgbmFtZTogJ1Byb2R1Y3RMaXN0JywgY29tcG9uZW50OiBQcm9kdWN0TGlzdFdpdGhTZWFyY2hpbmdDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAge3BhdGg6ICcvOnNsdWcnLCBuYW1lOiAnUHJvZHVjdCcsIGNvbXBvbmVudDogUm91dGFibGVQcm9kdWN0Q29tcG9uZW50fVxuXSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RzQ29tcG9uZW50IHtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
