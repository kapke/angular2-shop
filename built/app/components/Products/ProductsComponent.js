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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RzQ29tcG9uZW50IiwiUHJvZHVjdHNDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBQTtnQkFVQUMsQ0FBQ0E7Z0JBVkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFlBQVlBO3dCQUN0QkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTt3QkFDL0JBLFFBQVFBLEVBQUVBLGlDQUFpQ0E7cUJBQzlDQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNUQSxFQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxhQUFhQSxFQUFFQSxTQUFTQSxFQUFFQSwyQ0FBaUNBLEVBQUVBLFlBQVlBLEVBQUVBLElBQUlBLEVBQUNBO3dCQUNsR0EsRUFBQ0EsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsSUFBSUEsRUFBRUEsU0FBU0EsRUFBRUEsU0FBU0EsRUFBRUEsa0NBQXdCQSxFQUFDQTtxQkFDekVBLENBQUNBOztzQ0FFREE7Z0JBQURBLHdCQUFDQTtZQUFEQSxDQVZBLEFBVUNBLElBQUE7WUFWRCx1Q0FVQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRhYmxlUHJvZHVjdENvbXBvbmVudCwgUHJvZHVjdExpc3RXaXRoU2VhcmNoaW5nQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vcHJvZHVjdC9wcm9kdWN0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncy1wcm9kdWN0cycsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogJzxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4nXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDogJy8nLCBuYW1lOiAnUHJvZHVjdExpc3QnLCBjb21wb25lbnQ6IFByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAgICB7cGF0aDogJy86c2x1ZycsIG5hbWU6ICdQcm9kdWN0JywgY29tcG9uZW50OiBSb3V0YWJsZVByb2R1Y3RDb21wb25lbnR9XG5dKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHNDb21wb25lbnQge1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
