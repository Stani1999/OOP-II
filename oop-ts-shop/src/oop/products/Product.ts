// Lab IV.1.1.
// Old version of Product in src/oop/Product.ts
import { Money } from "../../domain/Money";         // <V.2.2.>
import { ProductFeature } from "./ProductFeature";  // <IV.2.0./>

export class Product
    {
    constructor(
        //<V.2.2.>  Encapsulation by public -> private + _ prefix
        private readonly _id:string,                       
        private readonly _name:string, 
        private readonly _price: Money,                                             // <V.2.2./> Money from old Product   
        private readonly _features: ProductFeature[] = []
        //</V.2.2.>     
    ) {
        // <IV.6.1.> Validation for unique features
        const uniqueFeatures = this._features.filter(f => f.isUnique);              // <V.2.2./> this.features -> this._features
        const uniqueFeatureTypes = new Set(uniqueFeatures.map(f => f.constructor));

        const hasDuplicates = uniqueFeatures.length !== uniqueFeatureTypes.size; 
        if (hasDuplicates) {
            throw new Error("Product cannot have duplicate unique features."); 
        }
        // </IV.6.1.>
    } 
    
    // <IV.3.1.>
    getFeature<T>(type: new (...args: any[]) =>T): T[] | undefined {// <IV.5.2.> T -> T[]
        return this._features.                                                      // <V.2.2./> this.features -> this._features
        filter                                                      // find -> filter, 
        (f => f instanceof type) as T[];                            // </IV.5.2.> T -> T[]    
    }
    // </IV.3.1.>

    // <V.2.2.> Add getters for id, name, price (methods from old Product)
    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }   

    get price(): Money {
        return this._price;
    }
    // <IV.2.1.>
}