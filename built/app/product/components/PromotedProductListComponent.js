System.register(['angular2/core', "./ProductListComponent", "../directives/PromotedDirective"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ProductListComponent_1, PromotedDirective_1;
    var PromotedProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ProductListComponent_1_1) {
                ProductListComponent_1 = ProductListComponent_1_1;
            },
            function (PromotedDirective_1_1) {
                PromotedDirective_1 = PromotedDirective_1_1;
            }],
        execute: function() {
            PromotedProductListComponent = (function () {
                function PromotedProductListComponent() {
                    this.products = [];
                    this.showPromoted = true;
                }
                PromotedProductListComponent.prototype.togglePromoted = function () {
                    this.showPromoted = !this.showPromoted;
                };
                PromotedProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'promoted-product-list',
                        inputs: ['products'],
                        directives: [ProductListComponent_1.default, PromotedDirective_1.default],
                        template: "\n        <section class=\"promoted\">\n            <header><h3>Promoted products</h3></header>\n            <button (click)=\"togglePromoted()\" class=\"btn btn-default\">Toggle promoted products</button>\n            <product-list *ngIf=\"showPromoted\" [products]=\"products\" sPromoted></product-list>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PromotedProductListComponent);
                return PromotedProductListComponent;
            })();
            exports_1("default", PromotedProductListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L2NvbXBvbmVudHMvUHJvbW90ZWRQcm9kdWN0TGlzdENvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJQcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50IiwiUHJvbW90ZWRQcm9kdWN0TGlzdENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlByb21vdGVkUHJvZHVjdExpc3RDb21wb25lbnQudG9nZ2xlUHJvbW90ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBQTtvQkFhV0MsYUFBUUEsR0FBY0EsRUFBRUEsQ0FBQ0E7b0JBQ3pCQSxpQkFBWUEsR0FBV0EsSUFBSUEsQ0FBQ0E7Z0JBS3ZDQSxDQUFDQTtnQkFIR0QscURBQWNBLEdBQWRBO29CQUNJRSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQTtnQkFDM0NBLENBQUNBO2dCQWxCTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsdUJBQXVCQTt3QkFDakNBLE1BQU1BLEVBQUVBLENBQUNBLFVBQVVBLENBQUNBO3dCQUNwQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsOEJBQW9CQSxFQUFFQSwyQkFBaUJBLENBQUNBO3dCQUNyREEsUUFBUUEsRUFBRUEsNlVBTVRBO3FCQUNKQSxDQUFDQTs7aURBUURBO2dCQUFEQSxtQ0FBQ0E7WUFBREEsQ0FuQkEsQUFtQkNBLElBQUE7WUFuQkQsa0RBbUJDLENBQUEiLCJmaWxlIjoiYXBwL3Byb2R1Y3QvY29tcG9uZW50cy9Qcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IFByb2R1Y3RMaXN0Q29tcG9uZW50IGZyb20gXCIuL1Byb2R1Y3RMaXN0Q29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCIuLi9wcm9kdWN0XCI7XG5pbXBvcnQgUHJvbW90ZWREaXJlY3RpdmUgZnJvbSBcIi4uL2RpcmVjdGl2ZXMvUHJvbW90ZWREaXJlY3RpdmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwcm9tb3RlZC1wcm9kdWN0LWxpc3QnLFxuICAgIGlucHV0czogWydwcm9kdWN0cyddLFxuICAgIGRpcmVjdGl2ZXM6IFtQcm9kdWN0TGlzdENvbXBvbmVudCwgUHJvbW90ZWREaXJlY3RpdmVdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicHJvbW90ZWRcIj5cbiAgICAgICAgICAgIDxoZWFkZXI+PGgzPlByb21vdGVkIHByb2R1Y3RzPC9oMz48L2hlYWRlcj5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZVByb21vdGVkKClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlRvZ2dsZSBwcm9tb3RlZCBwcm9kdWN0czwvYnV0dG9uPlxuICAgICAgICAgICAgPHByb2R1Y3QtbGlzdCAqbmdJZj1cInNob3dQcm9tb3RlZFwiIFtwcm9kdWN0c109XCJwcm9kdWN0c1wiIHNQcm9tb3RlZD48L3Byb2R1Y3QtbGlzdD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50IHtcbiAgICBwdWJsaWMgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtdO1xuICAgIHB1YmxpYyBzaG93UHJvbW90ZWQ6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICB0b2dnbGVQcm9tb3RlZCAoKSB7XG4gICAgICAgIHRoaXMuc2hvd1Byb21vdGVkID0gIXRoaXMuc2hvd1Byb21vdGVkO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
