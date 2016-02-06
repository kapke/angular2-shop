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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvZGlyZWN0aXZlcy9Qcm9tb3RlZERpcmVjdGl2ZS50cyJdLCJuYW1lcyI6WyJQcm9tb3RlZERpcmVjdGl2ZSIsIlByb21vdGVkRGlyZWN0aXZlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBSUlBLDJCQUFhQSxFQUFjQSxFQUFFQSxRQUFrQkE7b0JBQzNDQyxRQUFRQSxDQUFDQSxlQUFlQSxDQUFDQSxFQUFFQSxFQUFFQSxjQUFjQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDdkRBLENBQUNBO2dCQU5MRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTtxQkFDMUJBLENBQUNBOztzQ0FLREE7Z0JBQURBLHdCQUFDQTtZQUFEQSxDQVBBLEFBT0NBLElBQUE7WUFQRCx1Q0FPQyxDQUFBIiwiZmlsZSI6InByb2R1Y3QvZGlyZWN0aXZlcy9Qcm9tb3RlZERpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7UmVuZGVyZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3NQcm9tb3RlZF0nXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbW90ZWREaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yIChlbDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhlbCwgJ3RleHQtcHJpbWFyeScsIHRydWUpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
