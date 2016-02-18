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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL1RvcE1lbnUvVG9wTWVudUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJUb3BNZW51Q29tcG9uZW50IiwiVG9wTWVudUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlRvcE1lbnVDb21wb25lbnQuaXNMaW5rQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkF5QklBLDBCQUFvQkEsTUFBY0E7b0JBQWRDLFdBQU1BLEdBQU5BLE1BQU1BLENBQVFBO29CQUYzQkEsVUFBS0EsR0FBbUNBLEVBQUVBLENBQUNBO2dCQUdsREEsQ0FBQ0E7Z0JBRU1ELHVDQUFZQSxHQUFuQkEsVUFBcUJBLElBQVlBO29CQUM3QkUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ25FQSxDQUFDQTtnQkE5QkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFVBQVVBO3dCQUNwQkEsTUFBTUEsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7d0JBQ2pCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLDBCQUFpQkEsQ0FBQ0E7d0JBQ2xEQSxRQUFRQSxFQUFFQSxvU0FRVEE7d0JBQ0RBLE1BQU1BLEVBQUVBOzRCQUNKQSwrRkFLRUE7eUJBQ0xBO3FCQUNKQSxDQUFDQTs7cUNBVURBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0EvQkEsQUErQkNBLElBQUE7WUEvQkQsc0NBK0JDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvVG9wTWVudS9Ub3BNZW51Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDT01NT05fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0b3AtbWVudScsXG4gICAgaW5wdXRzOiBbJ2l0ZW1zJ10sXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBDT01NT05fRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtc1wiIFtuZ0NsYXNzXT1cInthY3RpdmU6IGlzTGlua0FjdGl2ZShpdGVtLmxpbmspfVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbaXRlbS5saW5rXVwiPnt7IGl0ZW0udGl0bGUgfX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbXG4gICAgICAgIGB1bCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgIH0sXG4gICAgICAgIC5yb3V0ZXItbGluay1hY3RpdmUge1xuXG4gICAgICAgIH1gXG4gICAgXVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcE1lbnVDb21wb25lbnQge1xuICAgIHB1YmxpYyBpdGVtczp7bGluazogc3RyaW5nOyB0aXRsZTogc3RyaW5nfVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGlzTGlua0FjdGl2ZSAobGluazogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5pc1JvdXRlQWN0aXZlKHRoaXMucm91dGVyLmdlbmVyYXRlKFtsaW5rXSkpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
