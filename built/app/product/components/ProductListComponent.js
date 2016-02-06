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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvY29tcG9uZW50cy9Qcm9kdWN0TGlzdENvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdENvbXBvbmVudCIsIlByb2R1Y3RMaXN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQUE7b0JBMEJXQyxhQUFRQSxHQUFlQSxFQUFFQSxDQUFDQTtnQkFDckNBLENBQUNBO2dCQTNCREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsY0FBY0E7d0JBQ3hCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLDBCQUFnQkEsQ0FBQ0E7d0JBQ2pEQSxNQUFNQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQTt3QkFDcEJBLFFBQVFBLEVBQUVBLG1SQVFUQTt3QkFDREEsTUFBTUEsRUFBRUE7NEJBQ0pBLG1EQUVFQTs0QkFDRkEseUNBRUVBOzRCQUNGQSxxREFFRUE7eUJBQ0xBO3FCQUNKQSxDQUFDQTs7eUNBR0RBO2dCQUFEQSwyQkFBQ0E7WUFBREEsQ0EzQkEsQUEyQkNBLElBQUE7WUEzQkQsMENBMkJDLENBQUEiLCJmaWxlIjoicHJvZHVjdC9jb21wb25lbnRzL1Byb2R1Y3RMaXN0Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDT01NT05fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCBQcm9kdWN0Q29tcG9uZW50IGZyb20gXCIuL1Byb2R1Y3RDb21wb25lbnRcIjtcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi8uLi9wcm9kdWN0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwcm9kdWN0LWxpc3QnLFxuICAgIGRpcmVjdGl2ZXM6IFtDT01NT05fRElSRUNUSVZFUywgUHJvZHVjdENvbXBvbmVudF0sXG4gICAgaW5wdXRzOiBbJ3Byb2R1Y3RzJ10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgICAgICA8dWwgY2xhcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjcHJvZHVjdCBvZiBwcm9kdWN0c1wiIGNsYXNzPVwiY29sIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzLXByb2R1Y3QgW3Byb2R1Y3RdPVwicHJvZHVjdFwiPjwvcy1wcm9kdWN0PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgZGl2IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAtMTVweDtcbiAgICAgICAgfWAsXG4gICAgICAgIGB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH1gLFxuICAgICAgICBgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB9YFxuICAgIF1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudCB7XG4gICAgcHVibGljIHByb2R1Y3RzIDogUHJvZHVjdFtdID0gW107XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
