System.register(['angular2/core', "../product"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_1;
    var ProductSortPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            ProductSortPipe = (function () {
                function ProductSortPipe() {
                    this.compareProducts = function (sortingDescriptor, product1, product2) {
                        return product_1.Product.compare(sortingDescriptor.property, product1, product2) * sortingDescriptor.direction;
                    };
                }
                ProductSortPipe.prototype.transform = function (items, _a) {
                    var sortingDescriptor = _a[0];
                    return items.sort(this.compareProducts.bind(null, sortingDescriptor));
                };
                ProductSortPipe = __decorate([
                    core_1.Pipe({
                        name: 'productSort'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductSortPipe);
                return ProductSortPipe;
            })();
            exports_1("default", ProductSortPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcGlwZXMvUHJvZHVjdFNvcnRQaXBlLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RTb3J0UGlwZSIsIlByb2R1Y3RTb3J0UGlwZS5jb25zdHJ1Y3RvciIsIlByb2R1Y3RTb3J0UGlwZS50cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBQTtvQkFRWUMsb0JBQWVBLEdBQUdBLFVBQUNBLGlCQUFpQkEsRUFBRUEsUUFBaUJBLEVBQUVBLFFBQWlCQTt3QkFDOUVBLE1BQU1BLENBQUNBLGlCQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxpQkFBaUJBLENBQUNBLFFBQVFBLEVBQUVBLFFBQVFBLEVBQUVBLFFBQVFBLENBQUNBLEdBQUNBLGlCQUFpQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7b0JBQ3ZHQSxDQUFDQSxDQUFDQTtnQkFDTkEsQ0FBQ0E7Z0JBUEdELG1DQUFTQSxHQUFUQSxVQUFXQSxLQUFLQSxFQUFFQSxFQUFtQkE7d0JBQWxCRSxpQkFBaUJBO29CQUNoQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsaUJBQWlCQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDMUVBLENBQUNBO2dCQU5MRjtvQkFBQ0EsV0FBSUEsQ0FBQ0E7d0JBQ0ZBLElBQUlBLEVBQUVBLGFBQWFBO3FCQUN0QkEsQ0FBQ0E7O29DQVNEQTtnQkFBREEsc0JBQUNBO1lBQURBLENBWEEsQUFXQ0EsSUFBQTtZQVhELHFDQVdDLENBQUEiLCJmaWxlIjoicHJvZHVjdC9waXBlcy9Qcm9kdWN0U29ydFBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiLi4vcHJvZHVjdFwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ3Byb2R1Y3RTb3J0J1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RTb3J0UGlwZSB7XG4gICAgdHJhbnNmb3JtIChpdGVtcywgW3NvcnRpbmdEZXNjcmlwdG9yXSkge1xuICAgICAgICByZXR1cm4gaXRlbXMuc29ydCh0aGlzLmNvbXBhcmVQcm9kdWN0cy5iaW5kKG51bGwsIHNvcnRpbmdEZXNjcmlwdG9yKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wYXJlUHJvZHVjdHMgPSAoc29ydGluZ0Rlc2NyaXB0b3IsIHByb2R1Y3QxOiBQcm9kdWN0LCBwcm9kdWN0MjogUHJvZHVjdCkgOiBudW1iZXIgPT4ge1xuICAgICAgICByZXR1cm4gUHJvZHVjdC5jb21wYXJlKHNvcnRpbmdEZXNjcmlwdG9yLnByb3BlcnR5LCBwcm9kdWN0MSwgcHJvZHVjdDIpKnNvcnRpbmdEZXNjcmlwdG9yLmRpcmVjdGlvbjtcbiAgICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
