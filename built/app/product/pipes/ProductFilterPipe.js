System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ProductFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductFilterPipe = (function () {
                function ProductFilterPipe() {
                }
                ProductFilterPipe.prototype.transform = function (items, _a) {
                    var filterText = _a[0];
                    return items.filter(this.filterProducts.bind(null, filterText));
                };
                ProductFilterPipe.prototype.filterProducts = function (filterText, product) {
                    if (!filterText.length) {
                        return true;
                    }
                    else {
                        return product.toString().toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) != -1;
                    }
                };
                ;
                ProductFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'productFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductFilterPipe);
                return ProductFilterPipe;
            })();
            exports_1("default", ProductFilterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcGlwZXMvUHJvZHVjdEZpbHRlclBpcGUudHMiXSwibmFtZXMiOlsiUHJvZHVjdEZpbHRlclBpcGUiLCJQcm9kdWN0RmlsdGVyUGlwZS5jb25zdHJ1Y3RvciIsIlByb2R1Y3RGaWx0ZXJQaXBlLnRyYW5zZm9ybSIsIlByb2R1Y3RGaWx0ZXJQaXBlLmZpbHRlclByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQUE7Z0JBZUFDLENBQUNBO2dCQVhVRCxxQ0FBU0EsR0FBaEJBLFVBQWtCQSxLQUFLQSxFQUFFQSxFQUFZQTt3QkFBWEUsVUFBVUE7b0JBQ2hDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDcEVBLENBQUNBO2dCQUVPRiwwQ0FBY0EsR0FBdEJBLFVBQXdCQSxVQUFrQkEsRUFBRUEsT0FBZ0JBO29CQUN4REcsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3BCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtvQkFDaEJBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDSkEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO29CQUNoR0EsQ0FBQ0E7Z0JBQ0xBLENBQUNBOztnQkFkTEg7b0JBQUNBLFdBQUlBLENBQUNBO3dCQUNGQSxJQUFJQSxFQUFFQSxlQUFlQTtxQkFDeEJBLENBQUNBOztzQ0FhREE7Z0JBQURBLHdCQUFDQTtZQUFEQSxDQWZBLEFBZUNBLElBQUE7WUFmRCx1Q0FlQyxDQUFBIiwiZmlsZSI6InByb2R1Y3QvcGlwZXMvUHJvZHVjdEZpbHRlclBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiLi4vcHJvZHVjdFwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ3Byb2R1Y3RGaWx0ZXInXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEZpbHRlclBpcGUge1xuICAgIHB1YmxpYyB0cmFuc2Zvcm0gKGl0ZW1zLCBbZmlsdGVyVGV4dF0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcih0aGlzLmZpbHRlclByb2R1Y3RzLmJpbmQobnVsbCwgZmlsdGVyVGV4dCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmlsdGVyUHJvZHVjdHMgKGZpbHRlclRleHQ6IHN0cmluZywgcHJvZHVjdDogUHJvZHVjdCkge1xuICAgICAgICBpZighZmlsdGVyVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QudG9TdHJpbmcoKS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVGV4dC50b0xvY2FsZUxvd2VyQ2FzZSgpKSAhPSAtMTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
