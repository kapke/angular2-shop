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
                        template: "\n        <section class=\"promoted\">\n            <header><h3>Promoted products</h3></header>\n            <button (click)=\"togglePromoted()\" class=\"btn btn-default\">Toggle promoted products</button>\n            <product-list *ngIf=\"showPromoted\" [products]=\"products\" sPromoted></product-list>\n        </section>\n    ",
                        styles: [
                            "button {\n            margin-bottom: 1em;\n        }",
                            "product-list {\n            margin-top: 1em;\n        }"
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PromotedProductListComponent);
                return PromotedProductListComponent;
            })();
            exports_1("default", PromotedProductListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvY29tcG9uZW50cy9Qcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlByb21vdGVkUHJvZHVjdExpc3RDb21wb25lbnQiLCJQcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiUHJvbW90ZWRQcm9kdWN0TGlzdENvbXBvbmVudC50b2dnbGVQcm9tb3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUFBO29CQXFCV0MsYUFBUUEsR0FBY0EsRUFBRUEsQ0FBQ0E7b0JBQ3pCQSxpQkFBWUEsR0FBV0EsSUFBSUEsQ0FBQ0E7Z0JBS3ZDQSxDQUFDQTtnQkFIR0QscURBQWNBLEdBQWRBO29CQUNJRSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQTtnQkFDM0NBLENBQUNBO2dCQTFCTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsdUJBQXVCQTt3QkFDakNBLE1BQU1BLEVBQUVBLENBQUNBLFVBQVVBLENBQUNBO3dCQUNwQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsOEJBQW9CQSxFQUFFQSwyQkFBaUJBLENBQUNBO3dCQUNyREEsUUFBUUEsRUFBRUEsNlVBTVRBO3dCQUNEQSxNQUFNQSxFQUFFQTs0QkFDSkEsc0RBRUVBOzRCQUNGQSx5REFFRUE7eUJBQ0xBO3FCQUNKQSxDQUFDQTs7aURBUURBO2dCQUFEQSxtQ0FBQ0E7WUFBREEsQ0EzQkEsQUEyQkNBLElBQUE7WUEzQkQsa0RBMkJDLENBQUEiLCJmaWxlIjoicHJvZHVjdC9jb21wb25lbnRzL1Byb21vdGVkUHJvZHVjdExpc3RDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgUHJvZHVjdExpc3RDb21wb25lbnQgZnJvbSBcIi4vUHJvZHVjdExpc3RDb21wb25lbnRcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uL3Byb2R1Y3RcIjtcbmltcG9ydCBQcm9tb3RlZERpcmVjdGl2ZSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9Qcm9tb3RlZERpcmVjdGl2ZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Byb21vdGVkLXByb2R1Y3QtbGlzdCcsXG4gICAgaW5wdXRzOiBbJ3Byb2R1Y3RzJ10sXG4gICAgZGlyZWN0aXZlczogW1Byb2R1Y3RMaXN0Q29tcG9uZW50LCBQcm9tb3RlZERpcmVjdGl2ZV0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwcm9tb3RlZFwiPlxuICAgICAgICAgICAgPGhlYWRlcj48aDM+UHJvbW90ZWQgcHJvZHVjdHM8L2gzPjwvaGVhZGVyPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlUHJvbW90ZWQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+VG9nZ2xlIHByb21vdGVkIHByb2R1Y3RzPC9idXR0b24+XG4gICAgICAgICAgICA8cHJvZHVjdC1saXN0ICpuZ0lmPVwic2hvd1Byb21vdGVkXCIgW3Byb2R1Y3RzXT1cInByb2R1Y3RzXCIgc1Byb21vdGVkPjwvcHJvZHVjdC1saXN0PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtcbiAgICAgICAgYGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgIH1gLFxuICAgICAgICBgcHJvZHVjdC1saXN0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgfWBcbiAgICBdXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbW90ZWRQcm9kdWN0TGlzdENvbXBvbmVudCB7XG4gICAgcHVibGljIHByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXTtcbiAgICBwdWJsaWMgc2hvd1Byb21vdGVkOmJvb2xlYW4gPSB0cnVlO1xuXG4gICAgdG9nZ2xlUHJvbW90ZWQgKCkge1xuICAgICAgICB0aGlzLnNob3dQcm9tb3RlZCA9ICF0aGlzLnNob3dQcm9tb3RlZDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
