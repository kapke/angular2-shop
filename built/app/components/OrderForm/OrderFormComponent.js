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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL09yZGVyRm9ybS9PcmRlckZvcm1Db21wb25lbnQudHMiXSwibmFtZXMiOlsiT3JkZXJGb3JtIiwiT3JkZXJGb3JtLmNvbnN0cnVjdG9yIiwiT3JkZXJGb3JtLm9uRm9ybVN1Ym1pdCIsIk9yZGVyRm9ybS5pbnRlZ2VyIiwiT3JkZXJGb3JtLm5vdFplcm8iLCJPcmRlckZvcm0uZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQWlCSUEsbUJBQVlBLFdBQXdCQTtvQkFDaENDLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBO3dCQUMvQkEsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsbUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO3dCQUMvQkEsT0FBT0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsbUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO3dCQUNsQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsbUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO3dCQUNsQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsbUJBQVVBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLG1CQUFVQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDbEVBLFdBQVdBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLG1CQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFDdENBLFlBQVlBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLG1CQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxtQkFBVUEsQ0FBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7cUJBQzVGQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBRU1ELGdDQUFZQSxHQUFuQkE7b0JBQ0lFLElBQU1BLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBO29CQUNuQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZCQSxDQUFDQTtnQkFFT0YsMkJBQU9BLEdBQWZBLFVBQWlCQSxPQUFnQkE7b0JBQzdCRyxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFDQSxJQUFJQSxHQUFDQSxFQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxFQUFDQSxDQUFDQTtnQkFDaEVBLENBQUNBO2dCQUVPSCwyQkFBT0EsR0FBZkEsVUFBaUJBLE9BQWdCQTtvQkFDN0JJLE1BQU1BLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBLEdBQUNBLElBQUlBLEdBQUNBLEVBQUNBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUNBLENBQUNBO2dCQUNyREEsQ0FBQ0E7Z0JBRU9KLHlCQUFLQSxHQUFiQSxVQUFlQSxPQUFnQkE7b0JBQzNCSyxNQUFNQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFDQSxJQUFJQSxHQUFDQSxFQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFDQSxDQUFDQTtnQkFDakVBLENBQUNBO2dCQTNDTEw7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7d0JBQ3RCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLENBQUNBO3dCQUMvQkEsUUFBUUEsRUFBRUEsazNCQVNFQTtxQkFDZkEsQ0FBQ0E7OzhCQStCREE7Z0JBQURBLGdCQUFDQTtZQUFEQSxDQTVDQSxBQTRDQ0EsSUFBQTtZQTVDRCwrQkE0Q0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9PcmRlckZvcm0vT3JkZXJGb3JtQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBDb250cm9sLCBDT01NT05fRElSRUNUSVZFUywgVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdvcmRlci1mb3JtJyxcbiAgICBkaXJlY3RpdmVzOiBbQ09NTU9OX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJvcmRlckZvcm1cIiAoc3VibWl0KT1cIm9uRm9ybVN1Ym1pdCgpXCI+XG4gICAgICAgICAgICA8bGFiZWw+TmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW25nQ29udHJvbF09XCInbmFtZSdcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5TdXJuYW1lOiA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdDb250cm9sXT1cIidzdXJuYW1lJ1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3M6IDxpbnB1dCB0eXBlPVwidGV4dFwiIFtuZ0NvbnRyb2xdPVwiJ2FkZHJlc3MnXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPjwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+RS1tYWlsOiA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdDb250cm9sXT1cIidlbWFpbCdcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IG5hbWU6IDxpbnB1dCB0eXBlPVwidGV4dFwiIFtuZ0NvbnRyb2xdPVwiJ3Byb2R1Y3ROYW1lJ1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgY291bnQ6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgW25nQ29udHJvbF09XCIncHJvZHVjdENvdW50J1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmQgb3JkZXJcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIFtkaXNhYmxlZF09XCIhb3JkZXJGb3JtLnZhbGlkXCIgLz5cbiAgICAgICAgPC9mb3JtPmBcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckZvcm0ge1xuICAgIHB1YmxpYyBvcmRlckZvcm06IENvbnRyb2xHcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgICB0aGlzLm9yZGVyRm9ybSA9IGZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBzdXJuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgYWRkcmVzczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5lbWFpbF0pXSxcbiAgICAgICAgICAgIHByb2R1Y3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgcHJvZHVjdENvdW50OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5pbnRlZ2VyLCB0aGlzLm5vdFplcm9dKV1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRm9ybVN1Ym1pdCAoKSB7XG4gICAgICAgIGNvbnN0IG9yZGVyID0gdGhpcy5vcmRlckZvcm0udmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKG9yZGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGludGVnZXIgKGNvbnRyb2w6IENvbnRyb2wpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIoY29udHJvbC52YWx1ZSk/bnVsbDp7aW50ZWdlcjogdHJ1ZX07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBub3RaZXJvIChjb250cm9sOiBDb250cm9sKSB7XG4gICAgICAgIHJldHVybiAoY29udHJvbC52YWx1ZSAhPSAwKT9udWxsOntub3RaZXJvOiB0cnVlfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVtYWlsIChjb250cm9sOiBDb250cm9sKSB7XG4gICAgICAgIHJldHVybiAoY29udHJvbC52YWx1ZS5pbmRleE9mKCdAJykgIT0gLTEpP251bGw6e2VtYWlsOiB0cnVlfTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
