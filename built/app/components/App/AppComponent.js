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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXBwL0FwcENvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtvQkFVV0MsVUFBS0EsR0FBV0EsTUFBTUEsQ0FBQ0E7b0JBQ3ZCQSxjQUFTQSxHQUFHQTt3QkFDZkEsRUFBQ0EsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsS0FBS0EsRUFBRUEsVUFBVUEsRUFBQ0E7d0JBQ3JDQSxFQUFDQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFFQSxLQUFLQSxFQUFFQSxZQUFZQSxFQUFDQTtxQkFDM0NBLENBQUFBO2dCQUNMQSxDQUFDQTtnQkFmREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLDBCQUFnQkEsQ0FBQ0E7d0JBQ2pEQSxXQUFXQSxFQUFFQSxzQ0FBc0NBO3FCQUN0REEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDVEEsRUFBQ0EsSUFBSUEsRUFBRUEsZUFBZUEsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsU0FBU0EsRUFBRUEsMkJBQWlCQSxFQUFFQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFDQTt3QkFDM0ZBLEVBQUNBLElBQUlBLEVBQUVBLGFBQWFBLEVBQUVBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUVBLFNBQVNBLEVBQUVBLDRCQUFrQkEsRUFBQ0E7cUJBQzFFQSxDQUFDQTs7d0JBT0RBO2dCQUFEQSxVQUFDQTtZQUFEQSxDQWZBLEFBZUNBLElBQUE7WUFmRCx5QkFlQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQXBwL0FwcENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgT3JkZXJGb3JtQ29tcG9uZW50IGZyb20gJy4uL09yZGVyRm9ybS9PcmRlckZvcm1Db21wb25lbnQnO1xuaW1wb3J0IFByb2R1Y3RzQ29tcG9uZW50IGZyb20gXCIuLi9Qcm9kdWN0cy9Qcm9kdWN0c0NvbXBvbmVudFwiO1xuaW1wb3J0IFRvcE1lbnVDb21wb25lbnQgZnJvbSBcIi4uL1RvcE1lbnUvVG9wTWVudUNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBUb3BNZW51Q29tcG9uZW50XSxcbiAgICB0ZW1wbGF0ZVVybDogJ2J1aWx0L2FwcC9jb21wb25lbnRzL0FwcC9teS1hcHAuaHRtbCdcbn0pXG5AUm91dGVDb25maWcoW1xuICAgIHtwYXRoOiAnL3Byb2R1Y3RzLy4uLicsIG5hbWU6ICdQcm9kdWN0cycsIGNvbXBvbmVudDogUHJvZHVjdHNDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAge3BhdGg6ICcvb3JkZXItZm9ybScsIG5hbWU6ICdPcmRlckZvcm0nLCBjb21wb25lbnQ6IE9yZGVyRm9ybUNvbXBvbmVudH1cbl0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJ1Nob3AnO1xuICAgIHB1YmxpYyBtZW51SXRlbXMgPSBbXG4gICAgICAgIHtsaW5rOiAnUHJvZHVjdHMnLCB0aXRsZTogJ1Byb2R1Y3RzJ30sXG4gICAgICAgIHtsaW5rOiAnT3JkZXJGb3JtJywgdGl0bGU6ICdPcmRlciBGb3JtJ31cbiAgICBdXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
