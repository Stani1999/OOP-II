// Lab IV.1.5.
import { ProductFeature } from "./ProductFeature"; // Import by VSCode after typing "implements Pr.." end press enter

export class SubscriptionFeature implements ProductFeature {
    readonly isUnique = true; // <IV.5.3./> To avoid duplicates (different durations => different features)
    constructor(public readonly durationInDays: number) {}
}