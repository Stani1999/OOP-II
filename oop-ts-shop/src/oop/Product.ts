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
export class Product {
    private readonly _id:string;
    private _name:string;
    private _price:number;

    constructor(id:string, name:string, price:number) {
        if (!id) throw new Error("Product id cannot be empty");
        if (!name) throw new Error("Product name cannot be empty");
        if (price < 0) throw new Error("Product price cannot be negative");

        this._id = id;
        this._name = name;
        this._price = price;
    }
    
    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }   

    get price(): number {
        return this._price;
    }
}