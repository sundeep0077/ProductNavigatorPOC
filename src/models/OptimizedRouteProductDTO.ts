import { ReasonNotToBuy } from './reasonsNotToBuyEnum';

export class OptimizedRouteProductDTO {
    productId: number;
    departmentName: string;
    categoryName: string;
    productName: string;
    count: number;
    direction: string;
    aisle: string;
    row: number;
    buy: boolean;
    reasonNotToBuy: ReasonNotToBuy;
}
