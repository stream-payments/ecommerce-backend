import "reflect-metadata";
import { Product } from "../../../..";
import { FlagRouter } from "../../../../utils/flag-router";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any, featureFlagRouter: FlagRouter) => any;
export default _default;
export declare const defaultStoreProductsRelations: string[];
export declare const defaultStoreProductsFields: (keyof Product)[];
export declare const allowedStoreProductsFields: string[];
export declare const allowedStoreProductsRelations: string[];
export * from "./list-products";
export * from "./search";
/**
 * @schema StoreProductsRes
 * type: object
 * properties:
 *   product:
 *     $ref: "#/components/schemas/PricedProduct"
 */
export declare type StoreProductsRes = {
    product: Product;
};
/**
 * @schema StorePostSearchRes
 * type: object
 * properties:
 *   hits:
 *     type: array
 *     description: Array of results. The format of the items depends on the search engine installed on the server.
 */
export declare type StorePostSearchRes = {
    hits: unknown[];
    [k: string]: unknown;
};
/**
 * @schema StoreProductsListRes
 * type: object
 * properties:
 *   products:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/PricedProduct"
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
export declare type StoreProductsListRes = PaginatedResponse & {
    products: Product[];
};
