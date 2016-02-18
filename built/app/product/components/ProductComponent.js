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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L2NvbXBvbmVudHMvUHJvZHVjdENvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJQcm9kdWN0Q29tcG9uZW50IiwiUHJvZHVjdENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUFBO2dCQXFCQUMsQ0FBQ0E7Z0JBckJERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLE1BQU1BLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBO3dCQUNuQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSwwQkFBaUJBLENBQUNBO3dCQUNsREEsS0FBS0EsRUFBRUEsQ0FBQ0Esc0JBQVlBLENBQUNBO3dCQUNyQkEsUUFBUUEsRUFBRUEsZ21CQVlUQTtxQkFDSkEsQ0FBQ0E7O3FDQUdEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBckJBLEFBcUJDQSxJQUFBO1lBckJELHNDQXFCQyxDQUFBIiwiZmlsZSI6ImFwcC9wcm9kdWN0L2NvbXBvbmVudHMvUHJvZHVjdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09NTU9OX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gJy4vLi4vcHJvZHVjdCc7XG5pbXBvcnQgRXhjaGFuZ2VQaXBlIGZyb20gXCIuLi8uLi9leGNoYW5nZS1yYXRlcy9FeGNoYW5nZVBpcGVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzLXByb2R1Y3QnLFxuICAgIGlucHV0czogWydwcm9kdWN0J10sXG4gICAgZGlyZWN0aXZlczogW0NPTU1PTl9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFU10sXG4gICAgcGlwZXM6IFtFeGNoYW5nZVBpcGVdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJwYW5lbC10aXRsZVwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnUHJvZHVjdCcsIHsnc2x1Zyc6IHByb2R1Y3Quc2x1Z31dXCI+e3sgcHJvZHVjdC5uYW1lIH19PC9hPjwvaGVhZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj5QcmljZToge3sgcHJvZHVjdC5wcmljZSB8IGV4Y2hhbmdlOidVU0QnOidQTE4nIHwgY3VycmVuY3k6J1BMTic6dHJ1ZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cIiN0YWcgb2YgcHJvZHVjdC50YWdzXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj57eyB0YWcgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RDb21wb25lbnQge1xuICAgIHB1YmxpYyBwcm9kdWN0IDogUHJvZHVjdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
