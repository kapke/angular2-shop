System.register(['../../../app/product/product', '../../specHelpers/productRepositoryMock'], function(exports_1) {
    var product_1, productRepositoryMock_1;
    return {
        setters:[
            function (product_1_1) {
                product_1 = product_1_1;
            },
            function (productRepositoryMock_1_1) {
                productRepositoryMock_1 = productRepositoryMock_1_1;
            }],
        execute: function() {
            describe('ProductListWithSearchingComponent', function () {
                beforeEach(function () {
                    this.productRepository = productRepositoryMock_1.default();
                    this.productListWithSearchingComponent = new product_1.ProductListWithSearchingComponent(this.productRepository);
                });
                describe('should update products when ', function () {
                    it('component is instantiated', function () {
                        checkIfUpdatedProducts.call(this);
                    });
                    it('filter text changed', function () {
                        this.productListWithSearchingComponent.onFilterChange('aaa');
                        checkIfUpdatedProducts.call(this);
                    });
                    it('sorting options changed', function () {
                        this.productListWithSearchingComponent.onSortChange({});
                        checkIfUpdatedProducts.call(this);
                    });
                });
                function checkIfUpdatedProducts() {
                    expect(this.productRepository.getProducts).toHaveBeenCalled();
                    expect(this.productRepository.getPromotedProducts).toHaveBeenCalled();
                }
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvcHJvZHVjdC9jb21wb25lbnRzL1Byb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudFNwZWMudHMiXSwibmFtZXMiOlsiY2hlY2tJZlVwZGF0ZWRQcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFHQSxRQUFRLENBQUMsbUNBQW1DLEVBQUU7Z0JBQzFDLFVBQVUsQ0FBQztvQkFDUCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsK0JBQXFCLEVBQUUsQ0FBQztvQkFDakQsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLElBQUksMkNBQWlDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQzNHLENBQUMsQ0FBQyxDQUFDO2dCQUVILFFBQVEsQ0FBQyw4QkFBOEIsRUFBRTtvQkFDckMsRUFBRSxDQUFDLDJCQUEyQixFQUFFO3dCQUM1QixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLENBQUMsQ0FBQyxDQUFDO29CQUVILEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFFN0Qsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QyxDQUFDLENBQUMsQ0FBQztvQkFFSCxFQUFFLENBQUMseUJBQXlCLEVBQUU7d0JBQzFCLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBRXhELHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7Z0JBRUg7b0JBQ0lBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtvQkFDOURBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLENBQUNBO2dCQUMxRUEsQ0FBQ0E7WUFDTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJzcGVjL3Byb2R1Y3QvY29tcG9uZW50cy9Qcm9kdWN0TGlzdFdpdGhTZWFyY2hpbmdDb21wb25lbnRTcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9kdWN0TGlzdFdpdGhTZWFyY2hpbmdDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL2FwcC9wcm9kdWN0L3Byb2R1Y3QnO1xuaW1wb3J0IHByb2R1Y3RSZXBvc2l0b3J5TW9jayBmcm9tICcuLi8uLi9zcGVjSGVscGVycy9wcm9kdWN0UmVwb3NpdG9yeU1vY2snO1xuXG5kZXNjcmliZSgnUHJvZHVjdExpc3RXaXRoU2VhcmNoaW5nQ29tcG9uZW50JywgZnVuY3Rpb24gKCkge1xuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RSZXBvc2l0b3J5ID0gcHJvZHVjdFJlcG9zaXRvcnlNb2NrKCk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3RXaXRoU2VhcmNoaW5nQ29tcG9uZW50ID0gbmV3IFByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudCh0aGlzLnByb2R1Y3RSZXBvc2l0b3J5KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdzaG91bGQgdXBkYXRlIHByb2R1Y3RzIHdoZW4gJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpdCgnY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNoZWNrSWZVcGRhdGVkUHJvZHVjdHMuY2FsbCh0aGlzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ2ZpbHRlciB0ZXh0IGNoYW5nZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudC5vbkZpbHRlckNoYW5nZSgnYWFhJyk7XG5cbiAgICAgICAgICAgIGNoZWNrSWZVcGRhdGVkUHJvZHVjdHMuY2FsbCh0aGlzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3NvcnRpbmcgb3B0aW9ucyBjaGFuZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGlzdFdpdGhTZWFyY2hpbmdDb21wb25lbnQub25Tb3J0Q2hhbmdlKHt9KTtcblxuICAgICAgICAgICAgY2hlY2tJZlVwZGF0ZWRQcm9kdWN0cy5jYWxsKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrSWZVcGRhdGVkUHJvZHVjdHMgKCkge1xuICAgICAgICBleHBlY3QodGhpcy5wcm9kdWN0UmVwb3NpdG9yeS5nZXRQcm9kdWN0cykudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICBleHBlY3QodGhpcy5wcm9kdWN0UmVwb3NpdG9yeS5nZXRQcm9tb3RlZFByb2R1Y3RzKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
