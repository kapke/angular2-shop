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
                        template: "\n        <div class=\"clearfix\">\n            <ul clas=\"row\">\n                <li *ngFor=\"#product of products\" class=\"col col-sm-3\">\n                    <s-product [product]=\"product\"></s-product>\n                </li>\n            </ul>\n        </div>\n    ",
                        styles: [
                            "div {\n            margin: 15px -15px;\n        }",
                            "ul {\n            padding: 0\n        }",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L2NvbXBvbmVudHMvUHJvZHVjdExpc3RDb21wb25lbnQudHMiXSwibmFtZXMiOlsiUHJvZHVjdExpc3RDb21wb25lbnQiLCJQcm9kdWN0TGlzdENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUFBO29CQTBCV0MsYUFBUUEsR0FBZUEsRUFBRUEsQ0FBQ0E7Z0JBQ3JDQSxDQUFDQTtnQkEzQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGNBQWNBO3dCQUN4QkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSwwQkFBZ0JBLENBQUNBO3dCQUNqREEsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7d0JBQ3BCQSxRQUFRQSxFQUFFQSxtUkFRVEE7d0JBQ0RBLE1BQU1BLEVBQUVBOzRCQUNKQSxtREFFRUE7NEJBQ0ZBLHlDQUVFQTs0QkFDRkEscURBRUVBO3lCQUNMQTtxQkFDSkEsQ0FBQ0E7O3lDQUdEQTtnQkFBREEsMkJBQUNBO1lBQURBLENBM0JBLEFBMkJDQSxJQUFBO1lBM0JELDBDQTJCQyxDQUFBIiwiZmlsZSI6ImFwcC9wcm9kdWN0L2NvbXBvbmVudHMvUHJvZHVjdExpc3RDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NPTU1PTl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IFByb2R1Y3RDb21wb25lbnQgZnJvbSBcIi4vUHJvZHVjdENvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tICcuLy4uL3Byb2R1Y3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Byb2R1Y3QtbGlzdCcsXG4gICAgZGlyZWN0aXZlczogW0NPTU1PTl9ESVJFQ1RJVkVTLCBQcm9kdWN0Q29tcG9uZW50XSxcbiAgICBpbnB1dHM6IFsncHJvZHVjdHMnXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNwcm9kdWN0IG9mIHByb2R1Y3RzXCIgY2xhc3M9XCJjb2wgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHMtcHJvZHVjdCBbcHJvZHVjdF09XCJwcm9kdWN0XCI+PC9zLXByb2R1Y3Q+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbXG4gICAgICAgIGBkaXYge1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IC0xNXB4O1xuICAgICAgICB9YCxcbiAgICAgICAgYHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfWAsXG4gICAgICAgIGBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIH1gXG4gICAgXVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMaXN0Q29tcG9uZW50IHtcbiAgICBwdWJsaWMgcHJvZHVjdHMgOiBQcm9kdWN0W10gPSBbXTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
