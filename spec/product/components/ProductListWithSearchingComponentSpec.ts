import {ProductListWithSearchingComponent} from '../../../app/product/product';
import productRepositoryMock from '../../specHelpers/productRepositoryMock';

describe('ProductListWithSearchingComponent', function () {
    beforeEach(function () {
        this.productRepository = productRepositoryMock();
        this.productListWithSearchingComponent = new ProductListWithSearchingComponent(this.productRepository);
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

    function checkIfUpdatedProducts () {
        expect(this.productRepository.getProducts).toHaveBeenCalled();
        expect(this.productRepository.getPromotedProducts).toHaveBeenCalled();
    }
});
