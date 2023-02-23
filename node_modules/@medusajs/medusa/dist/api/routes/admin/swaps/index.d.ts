import { Swap } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminSwapRelations: string[];
export declare const defaultAdminSwapFields: string[];
/**
 * @schema AdminSwapsListRes
 * type: object
 * properties:
 *   swaps:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Swap"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of items skipped before these items
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export declare type AdminSwapsListRes = PaginatedResponse & {
    swaps: Swap[];
};
/**
 * @schema AdminSwapsRes
 * type: object
 * properties:
 *   swap:
 *     $ref: "#/components/schemas/Swap"
 */
export declare type AdminSwapsRes = {
    swap: Swap;
};
export * from "./get-swap";
export * from "./list-swaps";
