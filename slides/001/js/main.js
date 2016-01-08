(function () {
    'use strict';

    var productComponent = new ProductComponent({name: 'Cofee', price: '$5'});
    document.body.appendChild(productComponent.getDOMElement());
})();
