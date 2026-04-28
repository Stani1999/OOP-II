// <IV.1.> ! This Version is outdated ! 
// New version of Product class is in src/oop/products/Product.ts
/* Lab I.3.1.
export class Product {
    constructor(
        public readonly id:string,
        public name:string,
        public price:number
    ) {}
}
*/
// Lab II.1.1.

import { Money } from "../domain/Money";                // <III.1.2./> add import line for Money

export class Product {
    private readonly _id:string;
    private _name:string;
    // <III.1.2.> number -> Money
    private _price: Money;                   

    constructor(id:string, name:string, price:Money) {

        if (price.amount < 0) throw new Error("Product price cannot be negative");  // price -> price.amount
        // </III.1.2.> 
        if (!id) throw new Error("Product id cannot be empty");
        if (!name) throw new Error("Product name cannot be empty");

        this._id = id;
        this._name = name;
        this._price = new Money(price.amount);     // <III.1.2./> price -> new Money(price)
    }
    
    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }   

    get price(): Money {                            // <III.1.2./> number -> Money
        return this._price;
    }
}
// </IV.1.>