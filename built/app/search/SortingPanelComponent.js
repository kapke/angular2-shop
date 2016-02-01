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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWFyY2gvU29ydGluZ1BhbmVsQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlNvcnRpbmdQYW5lbENvbXBvbmVudCIsIlNvcnRpbmdQYW5lbENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlNvcnRpbmdQYW5lbENvbXBvbmVudC5vblNvcnRpbmdDaGFuZ2UiLCJTb3J0aW5nUGFuZWxDb21wb25lbnQuZ2V0TmV4dFNvcnRpbmdEaXJlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUFBQTtvQkFhV0MsZUFBVUEsR0FBcUJBLEVBQUNBLFNBQVNBLEVBQUVBLENBQUNBLEVBQUVBLFFBQVFBLEVBQUVBLEVBQUVBLEVBQUNBLENBQUNBO29CQUM1REEsWUFBT0EsR0FBb0JBLEVBQUVBLENBQUNBO29CQUM5QkEsa0JBQWFBLEdBQUdBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtnQkFtQjlDQSxDQUFDQTtnQkFqQlVELCtDQUFlQSxHQUF0QkEsVUFBd0JBLE1BQU1BO29CQUMxQkUsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsSUFBSUEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQzdDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFDM0NBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBO29CQUNsQ0EsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNKQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSx1QkFBdUJBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO29CQUN4RkEsQ0FBQ0E7b0JBQ0RBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO2dCQUM3Q0EsQ0FBQ0E7Z0JBRU9GLHVEQUF1QkEsR0FBL0JBLFVBQWlDQSxnQkFBd0JBO29CQUNyREcsRUFBRUEsQ0FBQUEsQ0FBQ0EsZ0JBQWdCQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDdkJBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNkQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ0pBLE1BQU1BLENBQUNBLGdCQUFnQkEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2hDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBakNMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxlQUFlQTt3QkFDekJBLE1BQU1BLEVBQUVBLENBQUNBLFlBQVlBLEVBQUVBLFNBQVNBLENBQUNBO3dCQUNqQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7d0JBQzFCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLGdDQUFzQkEsQ0FBQ0E7d0JBQ3ZEQSxRQUFRQSxFQUFFQSxvUkFLVEE7cUJBQ0pBLENBQUNBOzswQ0F1QkRBO2dCQUFEQSw0QkFBQ0E7WUFBREEsQ0FsQ0EsQUFrQ0NBLElBQUE7WUFsQ0QsMkNBa0NDLENBQUEiLCJmaWxlIjoiYXBwL3NlYXJjaC9Tb3J0aW5nUGFuZWxDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09NTU9OX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQgU29ydGluZ0J1dHRvbkNvbXBvbmVudCBmcm9tICcuL1NvcnRpbmdCdXR0b25Db21wb25lbnQnO1xuaW1wb3J0IHtTb3J0aW5nRGVzY3JpcHRvciwgU29ydGluZ09wdGlvbn0gZnJvbSBcIi4vc2VhcmNoXCI7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NvcnRpbmctcGFuZWwnLFxuICAgIGlucHV0czogWydkZXNjcmlwdG9yJywgJ29wdGlvbnMnXSxcbiAgICBvdXRwdXRzOiBbJ3NvcnRpbmdDaGFuZ2UnXSxcbiAgICBkaXJlY3RpdmVzOiBbQ09NTU9OX0RJUkVDVElWRVMsIFNvcnRpbmdCdXR0b25Db21wb25lbnRdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzb3J0aW5nLWJ1dHRvbiAqbmdGb3I9XCIjb3B0aW9uIG9mIG9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0b3JdPVwiZGVzY3JpcHRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcHJvcGVydHldPVwib3B0aW9uLnByb3BlcnR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzb3J0aW5nQ2hhbmdlKT1cIm9uU29ydGluZ0NoYW5nZShvcHRpb24pXCI+e3sgb3B0aW9uLm5hbWUgfX08L3NvcnRpbmctYnV0dG9uPlxuICAgIGBcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0aW5nUGFuZWxDb21wb25lbnQge1xuICAgIHB1YmxpYyBkZXNjcmlwdG9yOlNvcnRpbmdEZXNjcmlwdG9yID0ge2RpcmVjdGlvbjogMCwgcHJvcGVydHk6ICcnfTtcbiAgICBwdWJsaWMgb3B0aW9uczogU29ydGluZ09wdGlvbltdID0gW107XG4gICAgcHVibGljIHNvcnRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwdWJsaWMgb25Tb3J0aW5nQ2hhbmdlIChvcHRpb24pIHtcbiAgICAgICAgaWYodGhpcy5kZXNjcmlwdG9yLnByb3BlcnR5ICE9IG9wdGlvbi5wcm9wZXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdG9yLnByb3BlcnR5ID0gb3B0aW9uLnByb3BlcnR5O1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdG9yLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0b3IuZGlyZWN0aW9uID0gdGhpcy5nZXROZXh0U29ydGluZ0RpcmVjdGlvbih0aGlzLmRlc2NyaXB0b3IuZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvcnRpbmdDaGFuZ2UuZW1pdCh0aGlzLmRlc2NyaXB0b3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TmV4dFNvcnRpbmdEaXJlY3Rpb24gKHNvcnRpbmdEaXJlY3Rpb246IG51bWJlcikge1xuICAgICAgICBpZihzb3J0aW5nRGlyZWN0aW9uID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzb3J0aW5nRGlyZWN0aW9uICsgMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
