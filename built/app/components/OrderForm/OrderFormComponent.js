System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var OrderForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            OrderForm = (function () {
                function OrderForm(formBuilder) {
                    this.orderForm = formBuilder.group({
                        name: ['', common_1.Validators.required],
                        surname: ['', common_1.Validators.required],
                        address: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, this.email])],
                        productName: ['', common_1.Validators.required],
                        productCount: ['', common_1.Validators.compose([common_1.Validators.required, this.integer, this.notZero])]
                    });
                }
                OrderForm.prototype.onFormSubmit = function () {
                    var order = this.orderForm.value;
                    console.log(order);
                };
                OrderForm.prototype.integer = function (control) {
                    return Number.isInteger(control.value) ? null : { integer: true };
                };
                OrderForm.prototype.notZero = function (control) {
                    return (control.value != 0) ? null : { notZero: true };
                };
                OrderForm.prototype.email = function (control) {
                    return (control.value.indexOf('@') != -1) ? null : { email: true };
                };
                OrderForm = __decorate([
                    core_1.Component({
                        selector: 'order-form',
                        directives: [common_1.COMMON_DIRECTIVES],
                        template: "\n        <form [ngFormModel]=\"orderForm\" (submit)=\"onFormSubmit()\">\n            <label>Name: <input type=\"text\" [ngControl]=\"'name'\" class=\"form-control\" /></label>\n            <label>Surname: <input type=\"text\" [ngControl]=\"'surname'\" class=\"form-control\" /></label>\n            <label>Address: <input type=\"text\" [ngControl]=\"'address'\" class=\"form-control\" /></label>\n            <label>E-mail: <input type=\"text\" [ngControl]=\"'email'\" class=\"form-control\" /></label>\n            <label>Product name: <input type=\"text\" [ngControl]=\"'productName'\" class=\"form-control\" /></label>\n            <label>Product count: <input type=\"number\" [ngControl]=\"'productCount'\" class=\"form-control\" /></label>\n            <input type=\"submit\" value=\"Send order\" class=\"btn btn-default\" [disabled]=\"!orderForm.valid\" />\n        </form>"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], OrderForm);
                return OrderForm;
            })();
            exports_1("default", OrderForm);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvT3JkZXJGb3JtL09yZGVyRm9ybUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJPcmRlckZvcm0iLCJPcmRlckZvcm0uY29uc3RydWN0b3IiLCJPcmRlckZvcm0ub25Gb3JtU3VibWl0IiwiT3JkZXJGb3JtLmludGVnZXIiLCJPcmRlckZvcm0ubm90WmVybyIsIk9yZGVyRm9ybS5lbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBaUJJQSxtQkFBWUEsV0FBd0JBO29CQUNoQ0MsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQy9CQSxJQUFJQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxtQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQy9CQSxPQUFPQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxtQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQ2xDQSxPQUFPQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxtQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQ2xDQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxtQkFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsbUJBQVVBLENBQUNBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO3dCQUNsRUEsV0FBV0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsbUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO3dCQUN0Q0EsWUFBWUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsbUJBQVVBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLG1CQUFVQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtxQkFDNUZBLENBQUNBLENBQUNBO2dCQUNQQSxDQUFDQTtnQkFFTUQsZ0NBQVlBLEdBQW5CQTtvQkFDSUUsSUFBTUEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBQ25DQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDdkJBLENBQUNBO2dCQUVPRiwyQkFBT0EsR0FBZkEsVUFBaUJBLE9BQWdCQTtvQkFDN0JHLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEdBQUNBLElBQUlBLEdBQUNBLEVBQUNBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUNBLENBQUNBO2dCQUNoRUEsQ0FBQ0E7Z0JBRU9ILDJCQUFPQSxHQUFmQSxVQUFpQkEsT0FBZ0JBO29CQUM3QkksTUFBTUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsSUFBSUEsR0FBQ0EsRUFBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsRUFBQ0EsQ0FBQ0E7Z0JBQ3JEQSxDQUFDQTtnQkFFT0oseUJBQUtBLEdBQWJBLFVBQWVBLE9BQWdCQTtvQkFDM0JLLE1BQU1BLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLEdBQUNBLElBQUlBLEdBQUNBLEVBQUNBLEtBQUtBLEVBQUVBLElBQUlBLEVBQUNBLENBQUNBO2dCQUNqRUEsQ0FBQ0E7Z0JBM0NMTDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxZQUFZQTt3QkFDdEJBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7d0JBQy9CQSxRQUFRQSxFQUFFQSxrM0JBU0VBO3FCQUNmQSxDQUFDQTs7OEJBK0JEQTtnQkFBREEsZ0JBQUNBO1lBQURBLENBNUNBLEFBNENDQSxJQUFBO1lBNUNELCtCQTRDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvT3JkZXJGb3JtL09yZGVyRm9ybUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgQ29udHJvbCwgQ09NTU9OX0RJUkVDVElWRVMsIFZhbGlkYXRvcnN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnb3JkZXItZm9ybScsXG4gICAgZGlyZWN0aXZlczogW0NPTU1PTl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwib3JkZXJGb3JtXCIgKHN1Ym1pdCk9XCJvbkZvcm1TdWJtaXQoKVwiPlxuICAgICAgICAgICAgPGxhYmVsPk5hbWU6IDxpbnB1dCB0eXBlPVwidGV4dFwiIFtuZ0NvbnRyb2xdPVwiJ25hbWUnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPjwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+U3VybmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW25nQ29udHJvbF09XCInc3VybmFtZSdcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzOiA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdDb250cm9sXT1cIidhZGRyZXNzJ1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPkUtbWFpbDogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW25nQ29udHJvbF09XCInZW1haWwnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPjwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBuYW1lOiA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdDb250cm9sXT1cIidwcm9kdWN0TmFtZSdcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IGNvdW50OiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIFtuZ0NvbnRyb2xdPVwiJ3Byb2R1Y3RDb3VudCdcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kIG9yZGVyXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBbZGlzYWJsZWRdPVwiIW9yZGVyRm9ybS52YWxpZFwiIC8+XG4gICAgICAgIDwvZm9ybT5gXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJGb3JtIHtcbiAgICBwdWJsaWMgb3JkZXJGb3JtOiBDb250cm9sR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3Rvcihmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5vcmRlckZvcm0gPSBmb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgc3VybmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGFkZHJlc3M6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuZW1haWxdKV0sXG4gICAgICAgICAgICBwcm9kdWN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIHByb2R1Y3RDb3VudDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuaW50ZWdlciwgdGhpcy5ub3RaZXJvXSldXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkZvcm1TdWJtaXQgKCkge1xuICAgICAgICBjb25zdCBvcmRlciA9IHRoaXMub3JkZXJGb3JtLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhvcmRlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnRlZ2VyIChjb250cm9sOiBDb250cm9sKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKGNvbnRyb2wudmFsdWUpP251bGw6e2ludGVnZXI6IHRydWV9O1xuICAgIH1cblxuICAgIHByaXZhdGUgbm90WmVybyAoY29udHJvbDogQ29udHJvbCkge1xuICAgICAgICByZXR1cm4gKGNvbnRyb2wudmFsdWUgIT0gMCk/bnVsbDp7bm90WmVybzogdHJ1ZX07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbWFpbCAoY29udHJvbDogQ29udHJvbCkge1xuICAgICAgICByZXR1cm4gKGNvbnRyb2wudmFsdWUuaW5kZXhPZignQCcpICE9IC0xKT9udWxsOntlbWFpbDogdHJ1ZX07XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
