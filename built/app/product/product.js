System.register(["angular2/core", './entities/Product', './repositories/StaticJsonProductRepository', './repositories/InMemoryProductRepository', './components/ProductComponent', './components/ProductListComponent', './components/PromotedProductListComponent', './pipes/ProductFilterPipe', './pipes/ProductSortPipe', "./components/ProductListWithSearchingComponent", './components/RoutableProductComponent', "./directives/PromotedDirective"], function(exports_1) {
    var core_1, Product_1, StaticJsonProductRepository_1, InMemoryProductRepository_1, ProductComponent_1, ProductListComponent_1, PromotedProductListComponent_1, ProductFilterPipe_1, ProductSortPipe_1, ProductListWithSearchingComponent_1, RoutableProductComponent_1, PromotedDirective_1;
    var PRODUCT_PIPES, PRODUCT_DIRECTIVES, PRODUCT_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Product_1_1) {
                Product_1 = Product_1_1;
            },
            function (StaticJsonProductRepository_1_1) {
                StaticJsonProductRepository_1 = StaticJsonProductRepository_1_1;
            },
            function (InMemoryProductRepository_1_1) {
                InMemoryProductRepository_1 = InMemoryProductRepository_1_1;
            },
            function (ProductComponent_1_1) {
                ProductComponent_1 = ProductComponent_1_1;
            },
            function (ProductListComponent_1_1) {
                ProductListComponent_1 = ProductListComponent_1_1;
            },
            function (PromotedProductListComponent_1_1) {
                PromotedProductListComponent_1 = PromotedProductListComponent_1_1;
            },
            function (ProductFilterPipe_1_1) {
                ProductFilterPipe_1 = ProductFilterPipe_1_1;
            },
            function (ProductSortPipe_1_1) {
                ProductSortPipe_1 = ProductSortPipe_1_1;
            },
            function (ProductListWithSearchingComponent_1_1) {
                ProductListWithSearchingComponent_1 = ProductListWithSearchingComponent_1_1;
            },
            function (RoutableProductComponent_1_1) {
                RoutableProductComponent_1 = RoutableProductComponent_1_1;
            },
            function (PromotedDirective_1_1) {
                PromotedDirective_1 = PromotedDirective_1_1;
            }],
        execute: function() {
            PRODUCT_PIPES = [ProductFilterPipe_1.default, ProductSortPipe_1.default];
            PRODUCT_DIRECTIVES = [
                ProductComponent_1.default,
                ProductListComponent_1.default,
                PromotedProductListComponent_1.default,
                ProductListWithSearchingComponent_1.default,
                RoutableProductComponent_1.default,
                PromotedDirective_1.default
            ];
            PRODUCT_PROVIDERS = [
                core_1.provide("ProductRepository", { useClass: StaticJsonProductRepository_1.default }),
                StaticJsonProductRepository_1.default,
                InMemoryProductRepository_1.default
            ];
            exports_1("Product", Product_1.default);
            exports_1("StaticJsonProductRepository", StaticJsonProductRepository_1.default);
            exports_1("InMemoryProductRepository", InMemoryProductRepository_1.default);
            exports_1("ProductComponent", ProductComponent_1.default);
            exports_1("RoutableProductComponent", RoutableProductComponent_1.default);
            exports_1("ProductListComponent", ProductListComponent_1.default);
            exports_1("PromotedProductListComponent", PromotedProductListComponent_1.default);
            exports_1("ProductListWithSearchingComponent", ProductListWithSearchingComponent_1.default);
            exports_1("PromotedDirective", PromotedDirective_1.default);
            exports_1("ProductFilterPipe", ProductFilterPipe_1.default);
            exports_1("ProductSortPipe", ProductSortPipe_1.default);
            exports_1("PRODUCT_DIRECTIVES", PRODUCT_DIRECTIVES);
            exports_1("PRODUCT_PIPES", PRODUCT_PIPES);
            exports_1("PRODUCT_PROVIDERS", PRODUCT_PROVIDERS);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0L3Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFlTSxhQUFhLEVBQ2Isa0JBQWtCLEVBUWxCLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVRqQixhQUFhLEdBQUcsQ0FBQywyQkFBaUIsRUFBRSx5QkFBZSxDQUFDLENBQUM7WUFDckQsa0JBQWtCLEdBQUc7Z0JBQ3ZCLDBCQUFnQjtnQkFDaEIsOEJBQW9CO2dCQUNwQixzQ0FBNEI7Z0JBQzVCLDJDQUFpQztnQkFDakMsa0NBQXdCO2dCQUN4QiwyQkFBaUI7YUFDcEIsQ0FBQztZQUNJLGlCQUFpQixHQUFHO2dCQUN0QixjQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxRQUFRLEVBQUUscUNBQTJCLEVBQUMsQ0FBQztnQkFDckUscUNBQTJCO2dCQUMzQixtQ0FBeUI7YUFDNUIsQ0FBQztZQUVNLHVDQUFPO1lBQXFCLCtFQUEyQjtZQUFFLDJFQUF5QjtZQUNsRix5REFBZ0I7WUFBRSx5RUFBd0I7WUFBRSxpRUFBb0I7WUFBRSxpRkFBNEI7WUFBRSwyRkFBaUM7WUFDakksMkRBQWlCO1lBQ2pCLDJEQUFpQjtZQUFFLHVEQUFlO1lBQ2xDLG1EQUFrQjtZQUFFLHlDQUFhO1lBQUUsaURBQWlCIiwiZmlsZSI6ImFwcC9wcm9kdWN0L3Byb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb3ZpZGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vZW50aXRpZXMvUHJvZHVjdCc7XG5pbXBvcnQge1Byb2R1Y3RSZXBvc2l0b3J5fSBmcm9tICcuL3JlcG9zaXRvcmllcy9Qcm9kdWN0UmVwb3NpdG9yeSc7XG5pbXBvcnQgU3RhdGljSnNvblByb2R1Y3RSZXBvc2l0b3J5IGZyb20gJy4vcmVwb3NpdG9yaWVzL1N0YXRpY0pzb25Qcm9kdWN0UmVwb3NpdG9yeSc7XG5pbXBvcnQgSW5NZW1vcnlQcm9kdWN0UmVwb3NpdG9yeSBmcm9tICcuL3JlcG9zaXRvcmllcy9Jbk1lbW9yeVByb2R1Y3RSZXBvc2l0b3J5JztcbmltcG9ydCBQcm9kdWN0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0Q29tcG9uZW50JztcbmltcG9ydCBQcm9kdWN0TGlzdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUHJvZHVjdExpc3RDb21wb25lbnQnO1xuaW1wb3J0IFByb21vdGVkUHJvZHVjdExpc3RDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1Byb21vdGVkUHJvZHVjdExpc3RDb21wb25lbnQnO1xuaW1wb3J0IFByb2R1Y3RGaWx0ZXJQaXBlIGZyb20gJy4vcGlwZXMvUHJvZHVjdEZpbHRlclBpcGUnO1xuaW1wb3J0IFByb2R1Y3RTb3J0UGlwZSBmcm9tICcuL3BpcGVzL1Byb2R1Y3RTb3J0UGlwZSc7XG5pbXBvcnQgUHJvZHVjdExpc3RXaXRoU2VhcmNoaW5nQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvUHJvZHVjdExpc3RXaXRoU2VhcmNoaW5nQ29tcG9uZW50XCI7XG5pbXBvcnQgUm91dGFibGVQcm9kdWN0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9Sb3V0YWJsZVByb2R1Y3RDb21wb25lbnQnO1xuaW1wb3J0IFByb21vdGVkRGlyZWN0aXZlIGZyb20gXCIuL2RpcmVjdGl2ZXMvUHJvbW90ZWREaXJlY3RpdmVcIjtcblxuY29uc3QgUFJPRFVDVF9QSVBFUyA9IFtQcm9kdWN0RmlsdGVyUGlwZSwgUHJvZHVjdFNvcnRQaXBlXTtcbmNvbnN0IFBST0RVQ1RfRElSRUNUSVZFUyA9IFtcbiAgICBQcm9kdWN0Q29tcG9uZW50LFxuICAgIFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgIFByb21vdGVkUHJvZHVjdExpc3RDb21wb25lbnQsXG4gICAgUHJvZHVjdExpc3RXaXRoU2VhcmNoaW5nQ29tcG9uZW50LFxuICAgIFJvdXRhYmxlUHJvZHVjdENvbXBvbmVudCxcbiAgICBQcm9tb3RlZERpcmVjdGl2ZVxuXTtcbmNvbnN0IFBST0RVQ1RfUFJPVklERVJTID0gW1xuICAgIHByb3ZpZGUoXCJQcm9kdWN0UmVwb3NpdG9yeVwiLCB7dXNlQ2xhc3M6IFN0YXRpY0pzb25Qcm9kdWN0UmVwb3NpdG9yeX0pLFxuICAgIFN0YXRpY0pzb25Qcm9kdWN0UmVwb3NpdG9yeSxcbiAgICBJbk1lbW9yeVByb2R1Y3RSZXBvc2l0b3J5XG5dO1xuXG5leHBvcnQge1Byb2R1Y3QsIFByb2R1Y3RSZXBvc2l0b3J5LCBTdGF0aWNKc29uUHJvZHVjdFJlcG9zaXRvcnksIEluTWVtb3J5UHJvZHVjdFJlcG9zaXRvcnksXG4gICAgICAgIFByb2R1Y3RDb21wb25lbnQsIFJvdXRhYmxlUHJvZHVjdENvbXBvbmVudCwgUHJvZHVjdExpc3RDb21wb25lbnQsIFByb21vdGVkUHJvZHVjdExpc3RDb21wb25lbnQsIFByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudCxcbiAgICAgICAgUHJvbW90ZWREaXJlY3RpdmUsXG4gICAgICAgIFByb2R1Y3RGaWx0ZXJQaXBlLCBQcm9kdWN0U29ydFBpcGUsXG4gICAgICAgIFBST0RVQ1RfRElSRUNUSVZFUywgUFJPRFVDVF9QSVBFUywgUFJPRFVDVF9QUk9WSURFUlN9O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
