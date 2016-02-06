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
    var SortingButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SortingButtonComponent = (function () {
                function SortingButtonComponent() {
                    this.sortingChange = new core_1.EventEmitter();
                }
                SortingButtonComponent.prototype.onClick = function () {
                    this.sortingChange.emit(null);
                };
                SortingButtonComponent = __decorate([
                    core_1.Component({
                        selector: 'sorting-button',
                        inputs: ['descriptor', 'property'],
                        outputs: ['sortingChange'],
                        directives: [common_1.COMMON_DIRECTIVES],
                        template: "\n        <button class=\"btn btn-default\"\n                [ngClass]=\"{\n                    active: descriptor.property == property,\n                    ascending: descriptor.direction > 0,\n                    descending: descriptor.direction < 0}\"\n                (click)=\"onClick()\">\n            <ng-content></ng-content>\n        </button>\n    ",
                        styles: [
                            "\n        .active.ascending::before {\n            content: '^ ';\n        }\n        .active.descending::before {\n            content: 'v ';\n        }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SortingButtonComponent);
                return SortingButtonComponent;
            })();
            exports_1("default", SortingButtonComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9Tb3J0aW5nQnV0dG9uQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlNvcnRpbmdCdXR0b25Db21wb25lbnQiLCJTb3J0aW5nQnV0dG9uQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiU29ydGluZ0J1dHRvbkNvbXBvbmVudC5vbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7b0JBNkJXQyxrQkFBYUEsR0FBR0EsSUFBSUEsbUJBQVlBLEVBQUVBLENBQUNBO2dCQUs5Q0EsQ0FBQ0E7Z0JBSEdELHdDQUFPQSxHQUFQQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQTtnQkFqQ0xGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGdCQUFnQkE7d0JBQzFCQSxNQUFNQSxFQUFFQSxDQUFDQSxZQUFZQSxFQUFFQSxVQUFVQSxDQUFDQTt3QkFDbENBLE9BQU9BLEVBQUVBLENBQUNBLGVBQWVBLENBQUNBO3dCQUMxQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTt3QkFDL0JBLFFBQVFBLEVBQUVBLHlXQVNUQTt3QkFDREEsTUFBTUEsRUFBRUE7NEJBQ0pBLHFLQU9DQTt5QkFDSkE7cUJBQ0pBLENBQUNBOzsyQ0FTREE7Z0JBQURBLDZCQUFDQTtZQUFEQSxDQWxDQSxBQWtDQ0EsSUFBQTtZQWxDRCw0Q0FrQ0MsQ0FBQSIsImZpbGUiOiJzZWFyY2gvU29ydGluZ0J1dHRvbkNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDT01NT05fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7U29ydGluZ0Rlc2NyaXB0b3J9IGZyb20gXCIuL3NlYXJjaFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NvcnRpbmctYnV0dG9uJyxcbiAgICBpbnB1dHM6IFsnZGVzY3JpcHRvcicsICdwcm9wZXJ0eSddLFxuICAgIG91dHB1dHM6IFsnc29ydGluZ0NoYW5nZSddLFxuICAgIGRpcmVjdGl2ZXM6IFtDT01NT05fRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGRlc2NyaXB0b3IucHJvcGVydHkgPT0gcHJvcGVydHksXG4gICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZzogZGVzY3JpcHRvci5kaXJlY3Rpb24gPiAwLFxuICAgICAgICAgICAgICAgICAgICBkZXNjZW5kaW5nOiBkZXNjcmlwdG9yLmRpcmVjdGlvbiA8IDB9XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljaygpXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbXG4gICAgICAgIGBcbiAgICAgICAgLmFjdGl2ZS5hc2NlbmRpbmc6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnXiAnO1xuICAgICAgICB9XG4gICAgICAgIC5hY3RpdmUuZGVzY2VuZGluZzo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICd2ICc7XG4gICAgICAgIH1cbiAgICAgICAgYFxuICAgIF1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0aW5nQnV0dG9uQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgcHJvcGVydHk6IHN0cmluZztcbiAgICBwdWJsaWMgZGVzY3JpcHRvcjogU29ydGluZ0Rlc2NyaXB0b3I7XG4gICAgcHVibGljIHNvcnRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBvbkNsaWNrICgpIHtcbiAgICAgICAgdGhpcy5zb3J0aW5nQ2hhbmdlLmVtaXQobnVsbCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
