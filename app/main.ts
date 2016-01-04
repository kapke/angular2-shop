import ProductListComponent from "./ProductListComponent";

const promotedProducts = [
    {name: 'Latte', price: '$10'},
    {name: 'Green Tea', price: '$7'}
];

const products = [
    {name: 'Coffee', price: '$5'},
    {name: 'Tea', price: '$4'},
    {name: 'Yerba', price: '$6'}
];

[promotedProducts, products].forEach(list => {
    const productList = new ProductListComponent(list);
    document.body.appendChild(productList.domElement);
});
