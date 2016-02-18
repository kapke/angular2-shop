System.register(['angular2/core', 'angular2/router', '../OrderForm/OrderFormComponent', "../Products/ProductsComponent", "../TopMenu/TopMenuComponent"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, OrderFormComponent_1, ProductsComponent_1, TopMenuComponent_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (OrderFormComponent_1_1) {
                OrderFormComponent_1 = OrderFormComponent_1_1;
            },
            function (ProductsComponent_1_1) {
                ProductsComponent_1 = ProductsComponent_1_1;
            },
            function (TopMenuComponent_1_1) {
                TopMenuComponent_1 = TopMenuComponent_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.title = 'Shop';
                    this.menuItems = [
                        { link: 'Products', title: 'Products' },
                        { link: 'OrderForm', title: 'Order Form' }
                    ];
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES, TopMenuComponent_1.default],
                        templateUrl: 'built/app/components/App/my-app.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/products/...', name: 'Products', component: ProductsComponent_1.default, useAsDefault: true },
                        { path: '/order-form', name: 'OrderForm', component: OrderFormComponent_1.default }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("default", App);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwIiwiQXBwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQUE7b0JBVVdDLFVBQUtBLEdBQVdBLE1BQU1BLENBQUNBO29CQUN2QkEsY0FBU0EsR0FBR0E7d0JBQ2ZBLEVBQUNBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLEtBQUtBLEVBQUVBLFVBQVVBLEVBQUNBO3dCQUNyQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsV0FBV0EsRUFBRUEsS0FBS0EsRUFBRUEsWUFBWUEsRUFBQ0E7cUJBQzNDQSxDQUFBQTtnQkFDTEEsQ0FBQ0E7Z0JBZkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSwwQkFBZ0JBLENBQUNBO3dCQUNqREEsV0FBV0EsRUFBRUEsc0NBQXNDQTtxQkFDdERBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1RBLEVBQUNBLElBQUlBLEVBQUVBLGVBQWVBLEVBQUVBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLFNBQVNBLEVBQUVBLDJCQUFpQkEsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBQ0E7d0JBQzNGQSxFQUFDQSxJQUFJQSxFQUFFQSxhQUFhQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFFQSxTQUFTQSxFQUFFQSw0QkFBa0JBLEVBQUNBO3FCQUMxRUEsQ0FBQ0E7O3dCQU9EQTtnQkFBREEsVUFBQ0E7WUFBREEsQ0FmQSxBQWVDQSxJQUFBO1lBZkQseUJBZUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9BcHAvQXBwQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIEluamVjdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCBPcmRlckZvcm1Db21wb25lbnQgZnJvbSAnLi4vT3JkZXJGb3JtL09yZGVyRm9ybUNvbXBvbmVudCc7XG5pbXBvcnQgUHJvZHVjdHNDb21wb25lbnQgZnJvbSBcIi4uL1Byb2R1Y3RzL1Byb2R1Y3RzQ29tcG9uZW50XCI7XG5pbXBvcnQgVG9wTWVudUNvbXBvbmVudCBmcm9tIFwiLi4vVG9wTWVudS9Ub3BNZW51Q29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFRvcE1lbnVDb21wb25lbnRdLFxuICAgIHRlbXBsYXRlVXJsOiAnYnVpbHQvYXBwL2NvbXBvbmVudHMvQXBwL215LWFwcC5odG1sJ1xufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6ICcvcHJvZHVjdHMvLi4uJywgbmFtZTogJ1Byb2R1Y3RzJywgY29tcG9uZW50OiBQcm9kdWN0c0NvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAgICB7cGF0aDogJy9vcmRlci1mb3JtJywgbmFtZTogJ09yZGVyRm9ybScsIGNvbXBvbmVudDogT3JkZXJGb3JtQ29tcG9uZW50fVxuXSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSAnU2hvcCc7XG4gICAgcHVibGljIG1lbnVJdGVtcyA9IFtcbiAgICAgICAge2xpbms6ICdQcm9kdWN0cycsIHRpdGxlOiAnUHJvZHVjdHMnfSxcbiAgICAgICAge2xpbms6ICdPcmRlckZvcm0nLCB0aXRsZTogJ09yZGVyIEZvcm0nfVxuICAgIF1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
