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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L2NvbXBvbmVudHMvUHJvbW90ZWRQcm9kdWN0TGlzdENvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJQcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50IiwiUHJvbW90ZWRQcm9kdWN0TGlzdENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlByb21vdGVkUHJvZHVjdExpc3RDb21wb25lbnQudG9nZ2xlUHJvbW90ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBQTtvQkFxQldDLGFBQVFBLEdBQWNBLEVBQUVBLENBQUNBO29CQUN6QkEsaUJBQVlBLEdBQVdBLElBQUlBLENBQUNBO2dCQUt2Q0EsQ0FBQ0E7Z0JBSEdELHFEQUFjQSxHQUFkQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0E7Z0JBQzNDQSxDQUFDQTtnQkExQkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLHVCQUF1QkE7d0JBQ2pDQSxNQUFNQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQTt3QkFDcEJBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFvQkEsRUFBRUEsMkJBQWlCQSxDQUFDQTt3QkFDckRBLFFBQVFBLEVBQUVBLDZVQU1UQTt3QkFDREEsTUFBTUEsRUFBRUE7NEJBQ0pBLHNEQUVFQTs0QkFDRkEseURBRUVBO3lCQUNMQTtxQkFDSkEsQ0FBQ0E7O2lEQVFEQTtnQkFBREEsbUNBQUNBO1lBQURBLENBM0JBLEFBMkJDQSxJQUFBO1lBM0JELGtEQTJCQyxDQUFBIiwiZmlsZSI6ImFwcC9wcm9kdWN0L2NvbXBvbmVudHMvUHJvbW90ZWRQcm9kdWN0TGlzdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCBQcm9kdWN0TGlzdENvbXBvbmVudCBmcm9tIFwiLi9Qcm9kdWN0TGlzdENvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiLi4vcHJvZHVjdFwiO1xuaW1wb3J0IFByb21vdGVkRGlyZWN0aXZlIGZyb20gXCIuLi9kaXJlY3RpdmVzL1Byb21vdGVkRGlyZWN0aXZlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHJvbW90ZWQtcHJvZHVjdC1saXN0JyxcbiAgICBpbnB1dHM6IFsncHJvZHVjdHMnXSxcbiAgICBkaXJlY3RpdmVzOiBbUHJvZHVjdExpc3RDb21wb25lbnQsIFByb21vdGVkRGlyZWN0aXZlXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInByb21vdGVkXCI+XG4gICAgICAgICAgICA8aGVhZGVyPjxoMz5Qcm9tb3RlZCBwcm9kdWN0czwvaDM+PC9oZWFkZXI+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVQcm9tb3RlZCgpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5Ub2dnbGUgcHJvbW90ZWQgcHJvZHVjdHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxwcm9kdWN0LWxpc3QgKm5nSWY9XCJzaG93UHJvbW90ZWRcIiBbcHJvZHVjdHNdPVwicHJvZHVjdHNcIiBzUHJvbW90ZWQ+PC9wcm9kdWN0LWxpc3Q+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgfWAsXG4gICAgICAgIGBwcm9kdWN0LWxpc3Qge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICB9YFxuICAgIF1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50IHtcbiAgICBwdWJsaWMgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtdO1xuICAgIHB1YmxpYyBzaG93UHJvbW90ZWQ6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICB0b2dnbGVQcm9tb3RlZCAoKSB7XG4gICAgICAgIHRoaXMuc2hvd1Byb21vdGVkID0gIXRoaXMuc2hvd1Byb21vdGVkO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
