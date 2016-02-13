(function () {
    'use strict';

    var products = [
        {name: 'Coffee', price: '$5'},
        {name: 'Tea', price: '$4'},
        {name: 'Yerba', price: '$6'}
    ];

    //4/ We need to render list of products
    products.forEach(function (product) {
        var productComponent = new ProductComponent(product);
        document.body.appendChild(productComponent.getDOMElement());
    });
})();
