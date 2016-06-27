import {Component} from '@angular/core';

@Component({
	selector: 's-order-form',
	template: `
		<form #form="ngForm" (ngSubmit)="sendForm(form.value)">
			<label>Name: <input type="text" name="name" ngModel /></label>
			<label>Surname: <input type="text" name="surname" ngModel /></label>
			<label>E-mail: <input type="text" name="eMail" ngModel /></label>
			<fieldset ngModelGroup="address">
				<header>Address</header>
				<label>Street: <input type="text" name="street" ngModel /></label>
				<label>ZIP/Postal code: <input type="text" name="postalCode" ngModel /></label>
				<label>City: <input type="text" name="city" ngModel /></label>
			</fieldset>
			<label>Product name: <input type="text" name="product" ngModel /></label>
			<label>Count: <input type="text" name="count" ngModel /></label>
			<button type="submit">Submit</button>
		</form>
	`,
	styles: [`
		label {
			display: flex;
			width: 30em;
			justify-content: space-between;
			flex-direction: row;
			margin: 0.5em 0.25em;
		}
		fieldset {
			margin: 0;
			padding: 0;
			border: none;
		}
		input {
			width: 20em;
		}
	`]
})
export class OrderFormComponent {
	sendForm (value: any) {
		console.log(value);
	}
}