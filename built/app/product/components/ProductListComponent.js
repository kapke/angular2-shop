System.register(['angular2/core', 'angular2/common', "./ProductComponent"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, ProductComponent_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ProductComponent_1_1) {
                ProductComponent_1 = ProductComponent_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent() {
                    this.products = [];
                }
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'product-list',
                        directives: [common_1.COMMON_DIRECTIVES, ProductComponent_1.default],
                        inputs: ['products'],
                        template: "\n        <ul class=\"container-fluid\">\n            <li *ngFor=\"#product of products\" class=\"col col-sm-2\">\n                <s-product [product]=\"product\"></s-product>\n            </li>\n        </ul>\n    ",
                        styles: [
                            "li {\n            list-style-type: none;\n        }"
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductListComponent);
                return ProductListComponent;
            })();
            exports_1("default", ProductListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L2NvbXBvbmVudHMvUHJvZHVjdExpc3RDb21wb25lbnQudHMiXSwibmFtZXMiOlsiUHJvZHVjdExpc3RDb21wb25lbnQiLCJQcm9kdWN0TGlzdENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUFBO29CQWtCV0MsYUFBUUEsR0FBZUEsRUFBRUEsQ0FBQ0E7Z0JBQ3JDQSxDQUFDQTtnQkFuQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGNBQWNBO3dCQUN4QkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSwwQkFBZ0JBLENBQUNBO3dCQUNqREEsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7d0JBQ3BCQSxRQUFRQSxFQUFFQSwwTkFNVEE7d0JBQ0RBLE1BQU1BLEVBQUVBOzRCQUNKQSxxREFFRUE7eUJBQ0xBO3FCQUNKQSxDQUFDQTs7eUNBR0RBO2dCQUFEQSwyQkFBQ0E7WUFBREEsQ0FuQkEsQUFtQkNBLElBQUE7WUFuQkQsMENBbUJDLENBQUEiLCJmaWxlIjoiYXBwL3Byb2R1Y3QvY29tcG9uZW50cy9Qcm9kdWN0TGlzdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09NTU9OX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQgUHJvZHVjdENvbXBvbmVudCBmcm9tIFwiLi9Qcm9kdWN0Q29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gJy4vLi4vcHJvZHVjdCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHJvZHVjdC1saXN0JyxcbiAgICBkaXJlY3RpdmVzOiBbQ09NTU9OX0RJUkVDVElWRVMsIFByb2R1Y3RDb21wb25lbnRdLFxuICAgIGlucHV0czogWydwcm9kdWN0cyddLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDx1bCBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNwcm9kdWN0IG9mIHByb2R1Y3RzXCIgY2xhc3M9XCJjb2wgY29sLXNtLTJcIj5cbiAgICAgICAgICAgICAgICA8cy1wcm9kdWN0IFtwcm9kdWN0XT1cInByb2R1Y3RcIj48L3MtcHJvZHVjdD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtcbiAgICAgICAgYGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgfWBcbiAgICBdXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnQge1xuICAgIHB1YmxpYyBwcm9kdWN0cyA6IFByb2R1Y3RbXSA9IFtdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
