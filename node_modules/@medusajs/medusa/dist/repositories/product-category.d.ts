import { TreeRepository, DeleteResult } from "typeorm";
import { ProductCategory } from "../models/product-category";
import { ExtendedFindConfig, Selector, QuerySelector } from "../types/common";
export declare class ProductCategoryRepository extends TreeRepository<ProductCategory> {
    getFreeTextSearchResultsAndCount(options: ExtendedFindConfig<ProductCategory, Selector<ProductCategory>> | undefined, q: string | undefined, treeScope?: QuerySelector<ProductCategory>): Promise<[ProductCategory[], number]>;
    addProducts(productCategoryId: string, productIds: string[]): Promise<void>;
    removeProducts(productCategoryId: string, productIds: string[]): Promise<DeleteResult>;
}
