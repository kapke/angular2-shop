System.register(["rxjs/Rx"], function(exports_1) {
    var Rx_1;
    var AbstractProductRepository;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            AbstractProductRepository = (function () {
                function AbstractProductRepository() {
                }
                AbstractProductRepository.prototype.getBySlug = function (slug) {
                    return Rx_1.Observable
                        .concat(this.getProducts(), this.getPromotedProducts())
                        .reduce(function (acc, products) {
                        return acc.concat(products);
                    }, [])
                        .map(function (products) {
                        return products
                            .filter(function (product) { return product.slug == slug; })
                            .shift();
                    });
                };
                return AbstractProductRepository;
            })();
            exports_1("AbstractProductRepository", AbstractProductRepository);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L3JlcG9zaXRvcmllcy9Qcm9kdWN0UmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6WyJBYnN0cmFjdFByb2R1Y3RSZXBvc2l0b3J5IiwiQWJzdHJhY3RQcm9kdWN0UmVwb3NpdG9yeS5jb25zdHJ1Y3RvciIsIkFic3RyYWN0UHJvZHVjdFJlcG9zaXRvcnkuZ2V0QnlTbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7WUFTQTtnQkFBQUE7Z0JBa0JBQyxDQUFDQTtnQkFkVUQsNkNBQVNBLEdBQWhCQSxVQUFrQkEsSUFBWUE7b0JBQzFCRSxNQUFNQSxDQUFDQSxlQUFVQTt5QkFDWkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTt5QkFDdERBLE1BQU1BLENBQUNBLFVBQUNBLEdBQUdBLEVBQUVBLFFBQVFBO3dCQUNsQkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2hDQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTt5QkFDTEEsR0FBR0EsQ0FBQ0EsVUFBQUEsUUFBUUE7d0JBQ1RBLE1BQU1BLENBQUNBLFFBQVFBOzZCQUNWQSxNQUFNQSxDQUFDQSxVQUFBQSxPQUFPQSxJQUFJQSxPQUFBQSxPQUFPQSxDQUFDQSxJQUFJQSxJQUFJQSxJQUFJQSxFQUFwQkEsQ0FBb0JBLENBQUNBOzZCQUN2Q0EsS0FBS0EsRUFBRUEsQ0FBQ0E7b0JBQ2pCQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWEEsQ0FBQ0E7Z0JBR0xGLGdDQUFDQTtZQUFEQSxDQWxCQSxBQWtCQ0EsSUFBQTtZQUUwQixpRUFBeUIiLCJmaWxlIjoiYXBwL3Byb2R1Y3QvcmVwb3NpdG9yaWVzL1Byb2R1Y3RSZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uL2VudGl0aWVzL1Byb2R1Y3RcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcblxuaW50ZXJmYWNlIFByb2R1Y3RSZXBvc2l0b3J5IHtcbiAgICBnZXRQcm9kdWN0cyAoKTogT2JzZXJ2YWJsZTxQcm9kdWN0W10+O1xuICAgIGdldFByb21vdGVkUHJvZHVjdHMgKCk6IE9ic2VydmFibGU8UHJvZHVjdFtdPjtcbiAgICBnZXRCeVNsdWcgKHNsdWc6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdD47XG59XG5cbmFic3RyYWN0IGNsYXNzIEFic3RyYWN0UHJvZHVjdFJlcG9zaXRvcnkgaW1wbGVtZW50cyBQcm9kdWN0UmVwb3NpdG9yeSB7XG4gICAgYWJzdHJhY3QgZ2V0UHJvZHVjdHMoKTpPYnNlcnZhYmxlPFByb2R1Y3RbXT47XG4gICAgYWJzdHJhY3QgZ2V0UHJvbW90ZWRQcm9kdWN0cygpOk9ic2VydmFibGU8UHJvZHVjdFtdPjtcblxuICAgIHB1YmxpYyBnZXRCeVNsdWcgKHNsdWc6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmdldFByb2R1Y3RzKCksIHRoaXMuZ2V0UHJvbW90ZWRQcm9kdWN0cygpKVxuICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBwcm9kdWN0cykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KHByb2R1Y3RzKTtcbiAgICAgICAgICAgIH0sIFtdKVxuICAgICAgICAgICAgLm1hcChwcm9kdWN0cyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LnNsdWcgPT0gc2x1ZylcbiAgICAgICAgICAgICAgICAgICAgLnNoaWZ0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQge1Byb2R1Y3RSZXBvc2l0b3J5LCBBYnN0cmFjdFByb2R1Y3RSZXBvc2l0b3J5fTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
