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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L2NvbXBvbmVudHMvUm91dGFibGVQcm9kdWN0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlJvdXRhYmxlUHJvZHVjdENvbXBvbmVudCIsIlJvdXRhYmxlUHJvZHVjdENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBVUlBLGtDQUFhQSxXQUF3QkEsRUFBK0JBLGlCQUFvQ0E7b0JBVjVHQyxpQkFlQ0E7b0JBSk9BLGlCQUFpQkE7eUJBQ1pBLFNBQVNBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO3lCQUNsQ0EsU0FBU0EsQ0FBQ0EsVUFBQUEsT0FBT0EsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsRUFBdEJBLENBQXNCQSxDQUFDQSxDQUFDQTtnQkFDdERBLENBQUNBO2dCQWRMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO3dCQUMxQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWdCQSxDQUFDQTt3QkFDOUJBLFFBQVFBLEVBQUVBLGlGQUVUQTtxQkFDSkEsQ0FBQ0E7b0JBSXlDQSxXQUFDQSxhQUFNQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUFBOzs2Q0FLdEVBO2dCQUFEQSwrQkFBQ0E7WUFBREEsQ0FmQSxBQWVDQSxJQUFBO1lBZkQsOENBZUMsQ0FBQSIsImZpbGUiOiJhcHAvcHJvZHVjdC9jb21wb25lbnRzL1JvdXRhYmxlUHJvZHVjdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtDT01NT05fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCBQcm9kdWN0Q29tcG9uZW50IGZyb20gXCIuL1Byb2R1Y3RDb21wb25lbnRcIjtcbmltcG9ydCB7UHJvZHVjdFJlcG9zaXRvcnl9IGZyb20gXCIuLi9yZXBvc2l0b3JpZXMvUHJvZHVjdFJlcG9zaXRvcnlcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9lbnRpdGllcy9Qcm9kdWN0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2luZ2xlLXByb2R1Y3QnLFxuICAgIGRpcmVjdGl2ZXM6IFtQcm9kdWN0Q29tcG9uZW50XSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cy1wcm9kdWN0ICpuZ0lmPVwicHJvZHVjdFwiIFtwcm9kdWN0XT1cInByb2R1Y3RcIj48L3MtcHJvZHVjdD5cbiAgICBgXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGFibGVQcm9kdWN0Q29tcG9uZW50IHtcbiAgICBwdWJsaWMgcHJvZHVjdDogUHJvZHVjdDtcblxuICAgIGNvbnN0cnVjdG9yIChyb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsIEBJbmplY3QoJ1Byb2R1Y3RSZXBvc2l0b3J5JykgcHJvZHVjdFJlcG9zaXRvcnk6IFByb2R1Y3RSZXBvc2l0b3J5KSB7XG4gICAgICAgIHByb2R1Y3RSZXBvc2l0b3J5XG4gICAgICAgICAgICAuZ2V0QnlTbHVnKHJvdXRlUGFyYW1zLmdldCgnc2x1ZycpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShwcm9kdWN0ID0+IHRoaXMucHJvZHVjdCA9IHByb2R1Y3QpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
