// Lab IV.1.4. 
import { ProductFeature } from "./ProductFeature"; // Import by VSCode after typing "implements Pr.." end press enter

export class DownloadFeature implements ProductFeature {
    readonly isUnique = false; // <IV.5.4./> To allow duplicates (different servers => different links)
    constructor(
        public readonly url: string
    ) {}
}