System.register(['angular2/core', "angular2/router", "./ProductComponent"], function(exports_1) {
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
    var core_1, router_1, ProductComponent_1;
    var RoutableProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ProductComponent_1_1) {
                ProductComponent_1 = ProductComponent_1_1;
            }],
        execute: function() {
            RoutableProductComponent = (function () {
                function RoutableProductComponent(routeParams, productRepository) {
                    var _this = this;
                    productRepository
                        .getBySlug(routeParams.get('slug'))
                        .subscribe(function (product) { return _this.product = product; });
                }
                RoutableProductComponent = __decorate([
                    core_1.Component({
                        selector: 'single-product',
                        directives: [ProductComponent_1.default],
                        template: "\n        <s-product *ngIf=\"product\" [product]=\"product\"></s-product>\n    "
                    }),
                    __param(1, core_1.Inject('ProductRepository')), 
                    __metadata('design:paramtypes', [router_1.RouteParams, Object])
                ], RoutableProductComponent);
                return RoutableProductComponent;
            })();
            exports_1("default", RoutableProductComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvY29tcG9uZW50cy9Sb3V0YWJsZVByb2R1Y3RDb21wb25lbnQudHMiXSwibmFtZXMiOlsiUm91dGFibGVQcm9kdWN0Q29tcG9uZW50IiwiUm91dGFibGVQcm9kdWN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFVSUEsa0NBQWFBLFdBQXdCQSxFQUErQkEsaUJBQW9DQTtvQkFWNUdDLGlCQWVDQTtvQkFKT0EsaUJBQWlCQTt5QkFDWkEsU0FBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7eUJBQ2xDQSxTQUFTQSxDQUFDQSxVQUFBQSxPQUFPQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxFQUF0QkEsQ0FBc0JBLENBQUNBLENBQUNBO2dCQUN0REEsQ0FBQ0E7Z0JBZExEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGdCQUFnQkE7d0JBQzFCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBZ0JBLENBQUNBO3dCQUM5QkEsUUFBUUEsRUFBRUEsaUZBRVRBO3FCQUNKQSxDQUFDQTtvQkFJeUNBLFdBQUNBLGFBQU1BLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQUE7OzZDQUt0RUE7Z0JBQURBLCtCQUFDQTtZQUFEQSxDQWZBLEFBZUNBLElBQUE7WUFmRCw4Q0FlQyxDQUFBIiwiZmlsZSI6InByb2R1Y3QvY29tcG9uZW50cy9Sb3V0YWJsZVByb2R1Y3RDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Q09NTU9OX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQgUHJvZHVjdENvbXBvbmVudCBmcm9tIFwiLi9Qcm9kdWN0Q29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2R1Y3RSZXBvc2l0b3J5fSBmcm9tIFwiLi4vcmVwb3NpdG9yaWVzL1Byb2R1Y3RSZXBvc2l0b3J5XCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vZW50aXRpZXMvUHJvZHVjdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpbmdsZS1wcm9kdWN0JyxcbiAgICBkaXJlY3RpdmVzOiBbUHJvZHVjdENvbXBvbmVudF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHMtcHJvZHVjdCAqbmdJZj1cInByb2R1Y3RcIiBbcHJvZHVjdF09XCJwcm9kdWN0XCI+PC9zLXByb2R1Y3Q+XG4gICAgYFxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRhYmxlUHJvZHVjdENvbXBvbmVudCB7XG4gICAgcHVibGljIHByb2R1Y3Q6IFByb2R1Y3Q7XG5cbiAgICBjb25zdHJ1Y3RvciAocm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLCBASW5qZWN0KCdQcm9kdWN0UmVwb3NpdG9yeScpIHByb2R1Y3RSZXBvc2l0b3J5OiBQcm9kdWN0UmVwb3NpdG9yeSkge1xuICAgICAgICBwcm9kdWN0UmVwb3NpdG9yeVxuICAgICAgICAgICAgLmdldEJ5U2x1Zyhyb3V0ZVBhcmFtcy5nZXQoJ3NsdWcnKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocHJvZHVjdCA9PiB0aGlzLnByb2R1Y3QgPSBwcm9kdWN0KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
