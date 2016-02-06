System.register(['angular2/core', "./ExchangeService"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ExchangeService_1;
    var ExchangePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ExchangeService_1_1) {
                ExchangeService_1 = ExchangeService_1_1;
            }],
        execute: function() {
            ExchangePipe = (function () {
                function ExchangePipe(exchangeService) {
                    this.exchangeService = exchangeService;
                    this.currentValue = null;
                }
                ExchangePipe.prototype.transform = function (value, _a) {
                    var from = _a[0], to = _a[1];
                    this.updateSubscription(from, to, value);
                    return this.currentValue;
                };
                ExchangePipe.prototype.updateSubscription = function (from, to, value) {
                    var _this = this;
                    this.exchangeService
                        .getExchangeRate(from, to)
                        .subscribe(function (rate) { return _this.currentValue = rate * value; });
                };
                ExchangePipe = __decorate([
                    core_1.Pipe({
                        name: 'exchange',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [ExchangeService_1.default])
                ], ExchangePipe);
                return ExchangePipe;
            })();
            exports_1("default", ExchangePipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlLXJhdGVzL0V4Y2hhbmdlUGlwZS50cyJdLCJuYW1lcyI6WyJFeGNoYW5nZVBpcGUiLCJFeGNoYW5nZVBpcGUuY29uc3RydWN0b3IiLCJFeGNoYW5nZVBpcGUudHJhbnNmb3JtIiwiRXhjaGFuZ2VQaXBlLnVwZGF0ZVN1YnNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBT0lBLHNCQUFxQkEsZUFBZ0NBO29CQUFoQ0Msb0JBQWVBLEdBQWZBLGVBQWVBLENBQWlCQTtvQkFGN0NBLGlCQUFZQSxHQUFXQSxJQUFJQSxDQUFDQTtnQkFHcENBLENBQUNBO2dCQUVERCxnQ0FBU0EsR0FBVEEsVUFBV0EsS0FBYUEsRUFBRUEsRUFBNEJBO3dCQUEzQkUsSUFBSUEsVUFBRUEsRUFBRUE7b0JBQy9CQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLElBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO29CQUV6Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkFFREYseUNBQWtCQSxHQUFsQkEsVUFBb0JBLElBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLEtBQUtBO29CQUFuQ0csaUJBSUNBO29CQUhHQSxJQUFJQSxDQUFDQSxlQUFlQTt5QkFDZkEsZUFBZUEsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsQ0FBQ0E7eUJBQ3pCQSxTQUFTQSxDQUFDQSxVQUFBQSxJQUFJQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxHQUFDQSxLQUFLQSxFQUE5QkEsQ0FBOEJBLENBQUNBLENBQUNBO2dCQUMzREEsQ0FBQ0E7Z0JBcEJMSDtvQkFBQ0EsV0FBSUEsQ0FBQ0E7d0JBQ0ZBLElBQUlBLEVBQUVBLFVBQVVBO3dCQUNoQkEsSUFBSUEsRUFBRUEsS0FBS0E7cUJBQ2RBLENBQUNBOztpQ0FrQkRBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FyQkEsQUFxQkNBLElBQUE7WUFyQkQsa0NBcUJDLENBQUEiLCJmaWxlIjoiZXhjaGFuZ2UtcmF0ZXMvRXhjaGFuZ2VQaXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCBFeGNoYW5nZVNlcnZpY2UgZnJvbSBcIi4vRXhjaGFuZ2VTZXJ2aWNlXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnZXhjaGFuZ2UnLFxuICAgIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhjaGFuZ2VQaXBlIHtcbiAgICBwcml2YXRlIGN1cnJlbnRWYWx1ZTogbnVtYmVyID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGV4Y2hhbmdlU2VydmljZTogRXhjaGFuZ2VTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtICh2YWx1ZTogbnVtYmVyLCBbZnJvbSwgdG9dOiBbc3RyaW5nLCBzdHJpbmddKTogbnVtYmVyIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdWJzY3JpcHRpb24oZnJvbSwgdG8sIHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XG4gICAgfVxuXG4gICAgdXBkYXRlU3Vic2NyaXB0aW9uIChmcm9tLCB0bywgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5leGNoYW5nZVNlcnZpY2VcbiAgICAgICAgICAgIC5nZXRFeGNoYW5nZVJhdGUoZnJvbSwgdG8pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJhdGUgPT4gdGhpcy5jdXJyZW50VmFsdWUgPSByYXRlKnZhbHVlKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
