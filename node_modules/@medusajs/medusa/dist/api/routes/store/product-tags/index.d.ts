import { Router } from "express";
import { ProductTag } from "../../../../models";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: Router) => Router;
export default _default;
export declare const defaultStoreProductTagFields: string[];
export declare const allowedStoreProductTagFields: string[];
export declare const defaultStoreProductTagRelations: never[];
export declare type StoreProductTagsListRes = PaginatedResponse & {
    product_tags: ProductTag[];
};
export * from "./list-product-tags";
