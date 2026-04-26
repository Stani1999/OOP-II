// Lab IV.5.1.
import { ProductFeature } from "./ProductFeature";

export class ReturnPolicyFeature implements ProductFeature
{
    readonly isUnique = true; // <IV.5.4./> To avoid duplicates
    constructor(
        public readonly returnPeriodInDays: number
    ) {
    }
}