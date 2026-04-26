import { ProductFeature } from "./ProductFeature";  // <IV.2.0./>

// Lab IV.1.1.
export class Product      // <IV.2.0./> Add implements ProductFeature 
    {
    constructor(
        public readonly id:string,
        public readonly name:string,
        public readonly features: ProductFeature[] = []
    ) {
        // <IV.6.1.> Validation for unique features
        const uniqueFeatures = features.filter(f => f.isUnique);
        const uniqueFeatureTypes = new Set(uniqueFeatures.map(f => f.constructor));

        const hasDuplicates = uniqueFeatures.length !== uniqueFeatureTypes.size; 
        if (hasDuplicates) {
            throw new Error("Product cannot have duplicate unique features."); 
        }
        // </IV.6.1.>
    }
    
    // <IV.3.1.>
    getFeature<T>(type: new (...args: any[]) =>T): T[] | undefined {// <IV.5.2.> T -> T[]
        return this.features.filter                                 // find -> filter
        (f => f instanceof type) as T[];                            // </IV.5.2.> T -> T[]    
    }
    // </IV.3.1.>
}