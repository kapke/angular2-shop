System.register(['angular2/core', "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, core_3;
    var PromotedDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
                core_3 = core_2_1;
            }],
        execute: function() {
            PromotedDirective = (function () {
                function PromotedDirective(el, renderer) {
                    renderer.setElementClass(el, 'text-primary', true);
                }
                PromotedDirective = __decorate([
                    core_1.Directive({
                        selector: '[sPromoted]'
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef, core_3.Renderer])
                ], PromotedDirective);
                return PromotedDirective;
            })();
            exports_1("default", PromotedDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L2RpcmVjdGl2ZXMvUHJvbW90ZWREaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiUHJvbW90ZWREaXJlY3RpdmUiLCJQcm9tb3RlZERpcmVjdGl2ZS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUlJQSwyQkFBYUEsRUFBY0EsRUFBRUEsUUFBa0JBO29CQUMzQ0MsUUFBUUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBRUEsRUFBRUEsY0FBY0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZEQSxDQUFDQTtnQkFOTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsYUFBYUE7cUJBQzFCQSxDQUFDQTs7c0NBS0RBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0FQQSxBQU9DQSxJQUFBO1lBUEQsdUNBT0MsQ0FBQSIsImZpbGUiOiJhcHAvcHJvZHVjdC9kaXJlY3RpdmVzL1Byb21vdGVkRGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtSZW5kZXJlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbc1Byb21vdGVkXSdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9tb3RlZERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IgKGVsOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGVsLCAndGV4dC1wcmltYXJ5JywgdHJ1ZSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
