// Lab V.5.6.
import { Unit } from "./Unit";

export class Size {
    constructor(
        public readonly value: number,
        public readonly unit: Unit
    ) {}

    toString(): string {
        return `${this.value} ${this.unit}`;
    }
}