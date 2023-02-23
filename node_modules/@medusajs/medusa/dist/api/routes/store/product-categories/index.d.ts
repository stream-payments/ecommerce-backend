import { ProductCategory } from "../../../../models";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreProductCategoryRelations: string[];
export declare const defaultStoreScope: {
    is_internal: boolean;
    is_active: boolean;
};
export declare const defaultStoreProductCategoryFields: string[];
export declare const allowedStoreProductCategoryFields: string[];
/**
 * @schema StoreGetProductCategoriesCategoryRes
 * type: object
 * properties:
 *   product_category:
 *     $ref: "#/components/schemas/ProductCategory"
 */
export declare type StoreGetProductCategoriesCategoryRes = {
    product_category: ProductCategory;
};
/**
 * @schema StoreProductCategoriesListRes
 * type: object
 * properties:
 *   product_categories:
 *      type: array
 *      items:
 *        $ref: "#/components/schemas/ProductCategory"
 *   count:
 *      type: integer
 *      description: The total number of items available
 *   offset:
 *      type: integer
 *      description: The number of items skipped before these items
 *   limit:
 *      type: integer
 *      description: The number of items per page
 */
export declare type StoreProductCategoriesListRes = PaginatedResponse & {
    product_categories: ProductCategory[];
};
export * from "./get-product-category";
export * from "./list-product-categories";
