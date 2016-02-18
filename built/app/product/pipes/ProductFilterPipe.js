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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L3BpcGVzL1Byb2R1Y3RGaWx0ZXJQaXBlLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RGaWx0ZXJQaXBlIiwiUHJvZHVjdEZpbHRlclBpcGUuY29uc3RydWN0b3IiLCJQcm9kdWN0RmlsdGVyUGlwZS50cmFuc2Zvcm0iLCJQcm9kdWN0RmlsdGVyUGlwZS5maWx0ZXJQcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO2dCQWVBQyxDQUFDQTtnQkFYVUQscUNBQVNBLEdBQWhCQSxVQUFrQkEsS0FBS0EsRUFBRUEsRUFBWUE7d0JBQVhFLFVBQVVBO29CQUNoQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BFQSxDQUFDQTtnQkFFT0YsMENBQWNBLEdBQXRCQSxVQUF3QkEsVUFBa0JBLEVBQUVBLE9BQWdCQTtvQkFDeERHLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO3dCQUNwQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQ2hCQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ0pBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDaEdBLENBQUNBO2dCQUNMQSxDQUFDQTs7Z0JBZExIO29CQUFDQSxXQUFJQSxDQUFDQTt3QkFDRkEsSUFBSUEsRUFBRUEsZUFBZUE7cUJBQ3hCQSxDQUFDQTs7c0NBYURBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0FmQSxBQWVDQSxJQUFBO1lBZkQsdUNBZUMsQ0FBQSIsImZpbGUiOiJhcHAvcHJvZHVjdC9waXBlcy9Qcm9kdWN0RmlsdGVyUGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCIuLi9wcm9kdWN0XCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAncHJvZHVjdEZpbHRlcidcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RmlsdGVyUGlwZSB7XG4gICAgcHVibGljIHRyYW5zZm9ybSAoaXRlbXMsIFtmaWx0ZXJUZXh0XSkge1xuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKHRoaXMuZmlsdGVyUHJvZHVjdHMuYmluZChudWxsLCBmaWx0ZXJUZXh0KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWx0ZXJQcm9kdWN0cyAoZmlsdGVyVGV4dDogc3RyaW5nLCBwcm9kdWN0OiBQcm9kdWN0KSB7XG4gICAgICAgIGlmKCFmaWx0ZXJUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdC50b1N0cmluZygpLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJUZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCkpICE9IC0xO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
