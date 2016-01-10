import {ProductRepository} from '../../app/product/product';
import {Observable} from 'rxjs/Rx';

export default function productRepositoryMock (): ProductRepository {
    const mock = jasmine.createSpyObj('productRepository', ['getProducts', 'getPromotedProducts', 'getBySlug']);

    mock.getProducts.and.returnValue(Observable.from([[]]));
    mock.getPromotedProducts.and.returnValue(Observable.from([[]]));
    mock.getBySlug.and.returnValue(Observable.from([]));

    return mock;
}
