import { ProductVariant } from "../../../../models/product-variant";
import { PaginatedResponse } from "../../../../types/common";
import { PricedVariant } from "../../../../types/pricing";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminVariantRelations: string[];
export declare const defaultAdminVariantFields: (keyof ProductVariant)[];
/**
 * @schema AdminVariantsListRes
 * type: object
 * properties:
 *   variants:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ProductVariant"
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
export declare type AdminVariantsListRes = PaginatedResponse & {
    variants: PricedVariant[];
};
export * from "./list-variants";
export * from "./get-inventory";
