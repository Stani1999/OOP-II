// Lab IV.1.3. 
import { Size } from "../../domain/Size";           // <V.5.6./> 
import { ProductFeature } from "./ProductFeature";  // Import by VSCode after clicking on ProductFeatur

export class ShippingFeature implements ProductFeature {
    readonly isUnique = true; // <IV.5.3./> To avoid duplicates
    constructor( 
    public readonly size: Size                      // <V.5.6./> weight: number 
    ) {}
}