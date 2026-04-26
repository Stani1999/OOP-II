// Lab IV.1.3. 
import { ProductFeature } from "./ProductFeature"; // Import by VSCode after clicking on ProductFeatur

export class ShippingFeature implements ProductFeature {
    readonly isUnique = true; // <IV.5.3./> To avoid duplicates
    constructor( 
    public readonly weight: number
    ) {}
}