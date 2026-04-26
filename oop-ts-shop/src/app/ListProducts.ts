// Lab II.2.3
import { IProductRepository } from "../domain/IProductRepository";

export class ListProducts {
    constructor(private readonly repo: IProductRepository) {}

    async execute() {
        return await this.repo.list();
    }
}