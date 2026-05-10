// Lab VI.2.1.
export interface IRepository<T> {
    getById(id: string): Promise<T | null>;
    list(): Promise<T[]>;
}