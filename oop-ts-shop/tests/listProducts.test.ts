// Lab II.2.7.
import { describe, it, expect } from "vitest";
import { InMemoryProductRepository } from "../src/infra/InMemoryProductRepository";
import { ListProducts } from "../src/app/ListProducts";
// <II.2.14.>
import { FakeProductRepository } from "../src/infra/FakeProductRepository";
import { Product } from "../src/oop/Product";

describe("ListProducts - Additional Task Features", () => {
    it("returns products added via create method (Testing FakeProductRepository, Create method and Generics)", async () => {
        const geneRepo = new FakeProductRepository(); 
        const geneUseCase = new ListProducts(geneRepo);
        const geneProduct = new Product("1", "OLED TV", 300000); 

        await geneRepo.create(geneProduct);
        const geneResult = await geneUseCase.execute();

        expect(geneResult).toContain(geneProduct);
        expect(geneResult.length).toBe(1);
    });
});
// </II.2.14.>
    
describe("ListProducts", () => {
    it("returns products", async () => {

        const repo = new InMemoryProductRepository();
        const useCase = new ListProducts(repo);

        const result = await useCase.execute();

        expect(result.length).toBeGreaterThan(0);
    });
});