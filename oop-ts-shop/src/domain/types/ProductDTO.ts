// Lab VI.2.6.
type ProductDTO = {
    id: string;
    name: string;
    price: number;
};

function isProductDTO(obj: unknown): obj is ProductDTO {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        "id" in obj &&
        "name" in obj &&
        "price" in obj
    );
}

// Use: 
// const data: unknown = JSON.parse(input);
// if (isProductDTO(data)) {
// console.log(data.name);
// }