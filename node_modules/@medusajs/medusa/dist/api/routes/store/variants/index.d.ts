import { ProductVariant } from "../../../../";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreVariantRelations: string[];
/**
 * @schema StoreVariantsRes
 * type: object
 * properties:
 *   variant:
 *     $ref: "#/components/schemas/PricedVariant"
 */
export declare type StoreVariantsRes = {
    variant: ProductVariant;
};
/**
 * @schema StoreVariantsListRes
 * type: object
 * properties:
 *   variants:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/PricedVariant"
 */
export declare type StoreVariantsListRes = {
    variants: ProductVariant[];
};
export * from "./list-variants";
export * from "./get-variant";
