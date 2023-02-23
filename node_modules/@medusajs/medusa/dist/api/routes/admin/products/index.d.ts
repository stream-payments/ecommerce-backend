import "reflect-metadata";
import { Product, ProductTag, ProductType, ProductVariant } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
import { PricedProduct } from "../../../../types/pricing";
import { FlagRouter } from "../../../../utils/flag-router";
declare const _default: (app: any, featureFlagRouter: FlagRouter) => any;
export default _default;
export declare const defaultAdminProductRelations: string[];
export declare const defaultAdminProductFields: (keyof Product)[];
export declare const defaultAdminGetProductsVariantsFields: string[];
/**
 * @schema AdminProductsDeleteOptionRes
 * type: object
 * properties:
 *   option_id:
 *     type: string
 *     description: The ID of the deleted Product Option
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: option
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 *   product:
 *     $ref: "#/components/schemas/Product"
 */
export declare type AdminProductsDeleteOptionRes = {
    option_id: string;
    object: "option";
    deleted: boolean;
    product: Product;
};
/**
 * @schema AdminProductsDeleteVariantRes
 * type: object
 * properties:
 *   variant_id:
 *     type: string
 *     description: The ID of the deleted Product Variant.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: product-variant
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 *   product:
 *     $ref: "#/components/schemas/Product"
 */
export declare type AdminProductsDeleteVariantRes = {
    variant_id: string;
    object: "product-variant";
    deleted: boolean;
    product: Product;
};
/**
 * @schema AdminProductsDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Product.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: product
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export declare type AdminProductsDeleteRes = {
    id: string;
    object: "product";
    deleted: boolean;
};
/**
 * @schema AdminProductsListRes
 * type: object
 * properties:
 *   products:
 *     type: array
 *     items:
 *       oneOf:
 *         - $ref: "#/components/schemas/Product"
 *         - $ref: "#/components/schemas/PricedProduct"
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
export declare type AdminProductsListRes = PaginatedResponse & {
    products: (PricedProduct | Product)[];
};
/**
 * @schema AdminProductsListVariantsRes
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
export declare type AdminProductsListVariantsRes = PaginatedResponse & {
    variants: ProductVariant[];
};
/**
 * @schema AdminProductsListTypesRes
 * type: object
 * properties:
 *   types:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ProductType"
 */
export declare type AdminProductsListTypesRes = {
    types: ProductType[];
};
/**
 * @schema AdminProductsListTagsRes
 * type: object
 * properties:
 *   tags:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         id:
 *           description: The ID of the tag.
 *           type: string
 *         usage_count:
 *           description: The number of products that use this tag.
 *           type: string
 *         value:
 *           description: The value of the tag.
 *           type: string
 */
export declare type AdminProductsListTagsRes = {
    tags: Array<Pick<ProductTag, "id" | "value"> & {
        usage_count: number;
    }>;
};
/**
 * @schema AdminProductsRes
 * type: object
 * properties:
 *   product:
 *     $ref: "#/components/schemas/Product"
 */
export declare type AdminProductsRes = {
    product: Product;
};
export * from "./add-option";
export * from "./create-product";
export * from "./create-variant";
export * from "./delete-option";
export * from "./delete-product";
export * from "./delete-variant";
export * from "./get-product";
export * from "./list-products";
export * from "./list-tag-usage-count";
export * from "./list-types";
export * from "./list-variants";
export * from "./set-metadata";
export * from "./update-option";
export * from "./update-product";
export * from "./update-variant";
