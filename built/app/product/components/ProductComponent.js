System.register(['angular2/core', 'angular2/common', "angular2/router", "../../exchange-rates/ExchangePipe"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, ExchangePipe_1;
    var ProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ExchangePipe_1_1) {
                ExchangePipe_1 = ExchangePipe_1_1;
            }],
        execute: function() {
            ProductComponent = (function () {
                function ProductComponent() {
                }
                ProductComponent = __decorate([
                    core_1.Component({
                        selector: 's-product',
                        inputs: ['product'],
                        directives: [common_1.COMMON_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        pipes: [ExchangePipe_1.default],
                        template: "\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <header class=\"panel-title\"><a [routerLink]=\"['Product', {'slug': product.slug}]\">{{ product.name }}</a></header>\n            </div>\n            <div class=\"panel-body\">\n                <p class=\"price\">Price: {{ product.price | exchange:'USD':'PLN' | currency:'PLN':true }}</p>\n                <div class=\"btn-group\">\n                    <span *ngFor=\"#tag of product.tags\" class=\"btn btn-default\">{{ tag }}</span>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductComponent);
                return ProductComponent;
            })();
            exports_1("default", ProductComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvY29tcG9uZW50cy9Qcm9kdWN0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RDb21wb25lbnQiLCJQcm9kdWN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQUE7Z0JBcUJBQyxDQUFDQTtnQkFyQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsTUFBTUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7d0JBQ25CQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLDBCQUFpQkEsQ0FBQ0E7d0JBQ2xEQSxLQUFLQSxFQUFFQSxDQUFDQSxzQkFBWUEsQ0FBQ0E7d0JBQ3JCQSxRQUFRQSxFQUFFQSxnbUJBWVRBO3FCQUNKQSxDQUFDQTs7cUNBR0RBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0FyQkEsQUFxQkNBLElBQUE7WUFyQkQsc0NBcUJDLENBQUEiLCJmaWxlIjoicHJvZHVjdC9jb21wb25lbnRzL1Byb2R1Y3RDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NPTU1PTl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tICcuLy4uL3Byb2R1Y3QnO1xuaW1wb3J0IEV4Y2hhbmdlUGlwZSBmcm9tIFwiLi4vLi4vZXhjaGFuZ2UtcmF0ZXMvRXhjaGFuZ2VQaXBlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncy1wcm9kdWN0JyxcbiAgICBpbnB1dHM6IFsncHJvZHVjdCddLFxuICAgIGRpcmVjdGl2ZXM6IFtDT01NT05fRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHBpcGVzOiBbRXhjaGFuZ2VQaXBlXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwicGFuZWwtdGl0bGVcIj48YSBbcm91dGVyTGlua109XCJbJ1Byb2R1Y3QnLCB7J3NsdWcnOiBwcm9kdWN0LnNsdWd9XVwiPnt7IHByb2R1Y3QubmFtZSB9fTwvYT48L2hlYWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+UHJpY2U6IHt7IHByb2R1Y3QucHJpY2UgfCBleGNoYW5nZTonVVNEJzonUExOJyB8IGN1cnJlbmN5OidQTE4nOnRydWUgfX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCIjdGFnIG9mIHByb2R1Y3QudGFnc1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+e3sgdGFnIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0Q29tcG9uZW50IHtcbiAgICBwdWJsaWMgcHJvZHVjdCA6IFByb2R1Y3Q7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
