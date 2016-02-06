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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlLXJhdGVzL0V4Y2hhbmdlU2VydmljZS50cyJdLCJuYW1lcyI6WyJFeGNoYW5nZVNlcnZpY2UiLCJFeGNoYW5nZVNlcnZpY2UuY29uc3RydWN0b3IiLCJFeGNoYW5nZVNlcnZpY2UuZ2V0RXhjaGFuZ2VSYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7WUFHQTtnQkFBQUE7Z0JBV0FDLENBQUNBO2dCQVZHRCx5Q0FBZUEsR0FBZkEsVUFBaUJBLElBQVlBLEVBQUVBLEVBQVVBO29CQUNyQ0UsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsSUFBSUEsS0FBS0EsSUFBSUEsRUFBRUEsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQzlCQSxNQUFNQSxDQUFDQSxlQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxRQUEwQkE7NEJBQ2hEQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFDcEJBLFFBQVFBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO3dCQUN4QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ1BBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDSkEsTUFBTUEsQ0FBQ0EsZUFBVUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7b0JBQzlCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBQ0xGLHNCQUFDQTtZQUFEQSxDQVhBLEFBV0NBLElBQUE7WUFYRCxxQ0FXQyxDQUFBIiwiZmlsZSI6ImV4Y2hhbmdlLXJhdGVzL0V4Y2hhbmdlU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmVyfSBmcm9tIFwicnhqcy9PYnNlcnZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGNoYW5nZVNlcnZpY2Uge1xuICAgIGdldEV4Y2hhbmdlUmF0ZSAoZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICAgICAgaWYoZnJvbSA9PSAnVVNEJyAmJiB0byA9PSAnUExOJykge1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8bnVtYmVyPikgPT57XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCgzLjk5KTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5uZXZlcigpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
