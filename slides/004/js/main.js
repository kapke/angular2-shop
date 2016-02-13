(function () {
    'use strict';

    var promotedProducts = [
        {name: 'Latte', price: '$10'},
        {name: 'Green Tea', price: '$7'}
    ];

    var products = [
        {name: 'Coffee', price: '$5'},
        {name: 'Tea', price: '$4'},
        {name: 'Yerba', price: '$6'}
    ];

    //5/ Finally we can render 2 lists of products in simple way
    var promotedProductList = new ProductList(promotedProducts);
    document.body.appendChild(promotedProductList.getDOMElement());

    var productList = new ProductList(products);
    document.body.appendChild(productList.getDOMElement());
})();
