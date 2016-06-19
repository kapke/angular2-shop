import { Component } from '@angular/core';

@Component({
  selector: 's-app',
  template: `
    <div>
      <header>{{ product.name }}</header>
      <span>Price: \${{ product.price }}</span>
    </div>
  `
})
export class AppComponent {
  public product: {name: string, price: number} = {
    name: 'Coffee',
    price: 10
  };
}
