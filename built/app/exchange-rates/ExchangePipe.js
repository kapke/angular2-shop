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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9leGNoYW5nZS1yYXRlcy9FeGNoYW5nZVBpcGUudHMiXSwibmFtZXMiOlsiRXhjaGFuZ2VQaXBlIiwiRXhjaGFuZ2VQaXBlLmNvbnN0cnVjdG9yIiwiRXhjaGFuZ2VQaXBlLnRyYW5zZm9ybSIsIkV4Y2hhbmdlUGlwZS51cGRhdGVTdWJzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQU9JQSxzQkFBcUJBLGVBQWdDQTtvQkFBaENDLG9CQUFlQSxHQUFmQSxlQUFlQSxDQUFpQkE7b0JBRjdDQSxpQkFBWUEsR0FBV0EsSUFBSUEsQ0FBQ0E7Z0JBR3BDQSxDQUFDQTtnQkFFREQsZ0NBQVNBLEdBQVRBLFVBQVdBLEtBQWFBLEVBQUVBLEVBQTRCQTt3QkFBM0JFLElBQUlBLFVBQUVBLEVBQUVBO29CQUMvQkEsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFFekNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBO2dCQUM3QkEsQ0FBQ0E7Z0JBRURGLHlDQUFrQkEsR0FBbEJBLFVBQW9CQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxLQUFLQTtvQkFBbkNHLGlCQUlDQTtvQkFIR0EsSUFBSUEsQ0FBQ0EsZUFBZUE7eUJBQ2ZBLGVBQWVBLENBQUNBLElBQUlBLEVBQUVBLEVBQUVBLENBQUNBO3lCQUN6QkEsU0FBU0EsQ0FBQ0EsVUFBQUEsSUFBSUEsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsR0FBQ0EsS0FBS0EsRUFBOUJBLENBQThCQSxDQUFDQSxDQUFDQTtnQkFDM0RBLENBQUNBO2dCQXBCTEg7b0JBQUNBLFdBQUlBLENBQUNBO3dCQUNGQSxJQUFJQSxFQUFFQSxVQUFVQTt3QkFDaEJBLElBQUlBLEVBQUVBLEtBQUtBO3FCQUNkQSxDQUFDQTs7aUNBa0JEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBckJBLEFBcUJDQSxJQUFBO1lBckJELGtDQXFCQyxDQUFBIiwiZmlsZSI6ImFwcC9leGNoYW5nZS1yYXRlcy9FeGNoYW5nZVBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IEV4Y2hhbmdlU2VydmljZSBmcm9tIFwiLi9FeGNoYW5nZVNlcnZpY2VcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdleGNoYW5nZScsXG4gICAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGNoYW5nZVBpcGUge1xuICAgIHByaXZhdGUgY3VycmVudFZhbHVlOiBudW1iZXIgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgZXhjaGFuZ2VTZXJ2aWNlOiBFeGNoYW5nZVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0gKHZhbHVlOiBudW1iZXIsIFtmcm9tLCB0b106IFtzdHJpbmcsIHN0cmluZ10pOiBudW1iZXIge1xuICAgICAgICB0aGlzLnVwZGF0ZVN1YnNjcmlwdGlvbihmcm9tLCB0bywgdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdWJzY3JpcHRpb24gKGZyb20sIHRvLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmV4Y2hhbmdlU2VydmljZVxuICAgICAgICAgICAgLmdldEV4Y2hhbmdlUmF0ZShmcm9tLCB0bylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmF0ZSA9PiB0aGlzLmN1cnJlbnRWYWx1ZSA9IHJhdGUqdmFsdWUpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
