System.register(['angular2/core', 'angular2/common', './SortingButtonComponent'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, SortingButtonComponent_1;
    var SortingPanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (SortingButtonComponent_1_1) {
                SortingButtonComponent_1 = SortingButtonComponent_1_1;
            }],
        execute: function() {
            SortingPanelComponent = (function () {
                function SortingPanelComponent() {
                    this.descriptor = { direction: 0, property: '' };
                    this.options = [];
                    this.sortingChange = new core_1.EventEmitter();
                }
                SortingPanelComponent.prototype.onSortingChange = function (option) {
                    if (this.descriptor.property != option.property) {
                        this.descriptor.property = option.property;
                        this.descriptor.direction = 1;
                    }
                    else {
                        this.descriptor.direction = this.getNextSortingDirection(this.descriptor.direction);
                    }
                    this.sortingChange.emit(this.descriptor);
                };
                SortingPanelComponent.prototype.getNextSortingDirection = function (sortingDirection) {
                    if (sortingDirection == 1) {
                        return -1;
                    }
                    else {
                        return sortingDirection + 1;
                    }
                };
                SortingPanelComponent = __decorate([
                    core_1.Component({
                        selector: 'sorting-panel',
                        inputs: ['descriptor', 'options'],
                        outputs: ['sortingChange'],
                        directives: [common_1.COMMON_DIRECTIVES, SortingButtonComponent_1.default],
                        template: "\n        <sorting-button *ngFor=\"#option of options\"\n                        [descriptor]=\"descriptor\"\n                        [property]=\"option.property\"\n                        (sortingChange)=\"onSortingChange(option)\">{{ option.name }}</sorting-button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SortingPanelComponent);
                return SortingPanelComponent;
            })();
            exports_1("default", SortingPanelComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9Tb3J0aW5nUGFuZWxDb21wb25lbnQudHMiXSwibmFtZXMiOlsiU29ydGluZ1BhbmVsQ29tcG9uZW50IiwiU29ydGluZ1BhbmVsQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiU29ydGluZ1BhbmVsQ29tcG9uZW50Lm9uU29ydGluZ0NoYW5nZSIsIlNvcnRpbmdQYW5lbENvbXBvbmVudC5nZXROZXh0U29ydGluZ0RpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUFBO29CQWFXQyxlQUFVQSxHQUFxQkEsRUFBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsRUFBRUEsUUFBUUEsRUFBRUEsRUFBRUEsRUFBQ0EsQ0FBQ0E7b0JBQzVEQSxZQUFPQSxHQUFvQkEsRUFBRUEsQ0FBQ0E7b0JBQzlCQSxrQkFBYUEsR0FBR0EsSUFBSUEsbUJBQVlBLEVBQUVBLENBQUNBO2dCQW1COUNBLENBQUNBO2dCQWpCVUQsK0NBQWVBLEdBQXRCQSxVQUF3QkEsTUFBTUE7b0JBQzFCRSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxJQUFJQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDN0NBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBO3dCQUMzQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xDQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ0pBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLHVCQUF1QkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3hGQSxDQUFDQTtvQkFDREEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdDQSxDQUFDQTtnQkFFT0YsdURBQXVCQSxHQUEvQkEsVUFBaUNBLGdCQUF3QkE7b0JBQ3JERyxFQUFFQSxDQUFBQSxDQUFDQSxnQkFBZ0JBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN2QkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2RBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDSkEsTUFBTUEsQ0FBQ0EsZ0JBQWdCQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDaENBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFqQ0xIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGVBQWVBO3dCQUN6QkEsTUFBTUEsRUFBRUEsQ0FBQ0EsWUFBWUEsRUFBRUEsU0FBU0EsQ0FBQ0E7d0JBQ2pDQSxPQUFPQSxFQUFFQSxDQUFDQSxlQUFlQSxDQUFDQTt3QkFDMUJBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsRUFBRUEsZ0NBQXNCQSxDQUFDQTt3QkFDdkRBLFFBQVFBLEVBQUVBLG9SQUtUQTtxQkFDSkEsQ0FBQ0E7OzBDQXVCREE7Z0JBQURBLDRCQUFDQTtZQUFEQSxDQWxDQSxBQWtDQ0EsSUFBQTtZQWxDRCwyQ0FrQ0MsQ0FBQSIsImZpbGUiOiJzZWFyY2gvU29ydGluZ1BhbmVsQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NPTU1PTl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IFNvcnRpbmdCdXR0b25Db21wb25lbnQgZnJvbSAnLi9Tb3J0aW5nQnV0dG9uQ29tcG9uZW50JztcbmltcG9ydCB7U29ydGluZ0Rlc2NyaXB0b3IsIFNvcnRpbmdPcHRpb259IGZyb20gXCIuL3NlYXJjaFwiO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzb3J0aW5nLXBhbmVsJyxcbiAgICBpbnB1dHM6IFsnZGVzY3JpcHRvcicsICdvcHRpb25zJ10sXG4gICAgb3V0cHV0czogWydzb3J0aW5nQ2hhbmdlJ10sXG4gICAgZGlyZWN0aXZlczogW0NPTU1PTl9ESVJFQ1RJVkVTLCBTb3J0aW5nQnV0dG9uQ29tcG9uZW50XSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c29ydGluZy1idXR0b24gKm5nRm9yPVwiI29wdGlvbiBvZiBvcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdG9yXT1cImRlc2NyaXB0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3Byb3BlcnR5XT1cIm9wdGlvbi5wcm9wZXJ0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoc29ydGluZ0NoYW5nZSk9XCJvblNvcnRpbmdDaGFuZ2Uob3B0aW9uKVwiPnt7IG9wdGlvbi5uYW1lIH19PC9zb3J0aW5nLWJ1dHRvbj5cbiAgICBgXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydGluZ1BhbmVsQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgZGVzY3JpcHRvcjpTb3J0aW5nRGVzY3JpcHRvciA9IHtkaXJlY3Rpb246IDAsIHByb3BlcnR5OiAnJ307XG4gICAgcHVibGljIG9wdGlvbnM6IFNvcnRpbmdPcHRpb25bXSA9IFtdO1xuICAgIHB1YmxpYyBzb3J0aW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHVibGljIG9uU29ydGluZ0NoYW5nZSAob3B0aW9uKSB7XG4gICAgICAgIGlmKHRoaXMuZGVzY3JpcHRvci5wcm9wZXJ0eSAhPSBvcHRpb24ucHJvcGVydHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRvci5wcm9wZXJ0eSA9IG9wdGlvbi5wcm9wZXJ0eTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRvci5kaXJlY3Rpb24gPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdG9yLmRpcmVjdGlvbiA9IHRoaXMuZ2V0TmV4dFNvcnRpbmdEaXJlY3Rpb24odGhpcy5kZXNjcmlwdG9yLmRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3J0aW5nQ2hhbmdlLmVtaXQodGhpcy5kZXNjcmlwdG9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE5leHRTb3J0aW5nRGlyZWN0aW9uIChzb3J0aW5nRGlyZWN0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgaWYoc29ydGluZ0RpcmVjdGlvbiA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydGluZ0RpcmVjdGlvbiArIDE7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
