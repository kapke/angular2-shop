System.register(['rxjs/Rx'], function(exports_1) {
    var Rx_1;
    var ExchangeService;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            ExchangeService = (function () {
                function ExchangeService() {
                }
                ExchangeService.prototype.getExchangeRate = function (from, to) {
                    if (from == 'USD' && to == 'PLN') {
                        return Rx_1.Observable.create(function (observer) {
                            observer.next(3.99);
                            observer.complete();
                        });
                    }
                    else {
                        return Rx_1.Observable.never();
                    }
                };
                return ExchangeService;
            })();
            exports_1("default", ExchangeService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9leGNoYW5nZS1yYXRlcy9FeGNoYW5nZVNlcnZpY2UudHMiXSwibmFtZXMiOlsiRXhjaGFuZ2VTZXJ2aWNlIiwiRXhjaGFuZ2VTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiRXhjaGFuZ2VTZXJ2aWNlLmdldEV4Y2hhbmdlUmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO2dCQVdBQyxDQUFDQTtnQkFWR0QseUNBQWVBLEdBQWZBLFVBQWlCQSxJQUFZQSxFQUFFQSxFQUFVQTtvQkFDckNFLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLElBQUlBLEtBQUtBLElBQUlBLEVBQUVBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO3dCQUM5QkEsTUFBTUEsQ0FBQ0EsZUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQ0EsUUFBMEJBOzRCQUNoREEsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7NEJBQ3BCQSxRQUFRQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTt3QkFDeEJBLENBQUNBLENBQUNBLENBQUNBO29CQUNQQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ0pBLE1BQU1BLENBQUNBLGVBQVVBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO29CQUM5QkEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUNMRixzQkFBQ0E7WUFBREEsQ0FYQSxBQVdDQSxJQUFBO1lBWEQscUNBV0MsQ0FBQSIsImZpbGUiOiJhcHAvZXhjaGFuZ2UtcmF0ZXMvRXhjaGFuZ2VTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gXCJyeGpzL09ic2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4Y2hhbmdlU2VydmljZSB7XG4gICAgZ2V0RXhjaGFuZ2VSYXRlIChmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgICAgICBpZihmcm9tID09ICdVU0QnICYmIHRvID09ICdQTE4nKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxudW1iZXI+KSA9PntcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KDMuOTkpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm5ldmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
