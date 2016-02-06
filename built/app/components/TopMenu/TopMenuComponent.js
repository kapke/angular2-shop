System.register(['angular2/core', 'angular2/common', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1;
    var TopMenuComponent;
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
            }],
        execute: function() {
            TopMenuComponent = (function () {
                function TopMenuComponent(router) {
                    this.router = router;
                    this.items = [];
                }
                TopMenuComponent.prototype.isLinkActive = function (link) {
                    return this.router.isRouteActive(this.router.generate([link]));
                };
                TopMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'top-menu',
                        inputs: ['items'],
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.COMMON_DIRECTIVES],
                        template: "\n        <nav>\n            <ul class=\"nav nav-tabs\">\n                <li *ngFor=\"#item of items\" [ngClass]=\"{active: isLinkActive(item.link)}\">\n                    <a [routerLink]=\"[item.link]\">{{ item.title }}</a>\n                </li>\n            </ul>\n        </nav>\n    ",
                        styles: [
                            "ul {\n            margin-bottom: 1em;\n        },\n        .router-link-active {\n\n        }"
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], TopMenuComponent);
                return TopMenuComponent;
            })();
            exports_1("default", TopMenuComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9wTWVudS9Ub3BNZW51Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlRvcE1lbnVDb21wb25lbnQiLCJUb3BNZW51Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiVG9wTWVudUNvbXBvbmVudC5pc0xpbmtBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQXlCSUEsMEJBQW9CQSxNQUFjQTtvQkFBZEMsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBUUE7b0JBRjNCQSxVQUFLQSxHQUFtQ0EsRUFBRUEsQ0FBQ0E7Z0JBR2xEQSxDQUFDQTtnQkFFTUQsdUNBQVlBLEdBQW5CQSxVQUFxQkEsSUFBWUE7b0JBQzdCRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbkVBLENBQUNBO2dCQTlCTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsVUFBVUE7d0JBQ3BCQSxNQUFNQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQTt3QkFDakJBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsRUFBRUEsMEJBQWlCQSxDQUFDQTt3QkFDbERBLFFBQVFBLEVBQUVBLG9TQVFUQTt3QkFDREEsTUFBTUEsRUFBRUE7NEJBQ0pBLCtGQUtFQTt5QkFDTEE7cUJBQ0pBLENBQUNBOztxQ0FVREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQS9CQSxBQStCQ0EsSUFBQTtZQS9CRCxzQ0ErQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL1RvcE1lbnUvVG9wTWVudUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09NTU9OX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndG9wLW1lbnUnLFxuICAgIGlucHV0czogWydpdGVtcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgQ09NTU9OX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwiI2l0ZW0gb2YgaXRlbXNcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBpc0xpbmtBY3RpdmUoaXRlbS5saW5rKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiW2l0ZW0ubGlua11cIj57eyBpdGVtLnRpdGxlIH19PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICBgLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgdWwge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICB9LFxuICAgICAgICAucm91dGVyLWxpbmstYWN0aXZlIHtcblxuICAgICAgICB9YFxuICAgIF1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BNZW51Q29tcG9uZW50IHtcbiAgICBwdWJsaWMgaXRlbXM6e2xpbms6IHN0cmluZzsgdGl0bGU6IHN0cmluZ31bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0xpbmtBY3RpdmUgKGxpbms6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIuaXNSb3V0ZUFjdGl2ZSh0aGlzLnJvdXRlci5nZW5lcmF0ZShbbGlua10pKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
