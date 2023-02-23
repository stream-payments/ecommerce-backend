export declare type CreateProductCategoryInput = {
    name: string;
    handle?: string;
    is_internal?: boolean;
    is_active?: boolean;
    parent_category_id?: string | null;
};
export declare type UpdateProductCategoryInput = {
    name?: string;
    handle?: string;
    is_internal?: boolean;
    is_active?: boolean;
    parent_category_id?: string | null;
};
export declare class AdminProductCategoriesReqBase {
    handle?: string;
    is_internal?: boolean;
    is_active?: boolean;
    parent_category_id?: string | null;
}
export declare class ProductBatchProductCategory {
    id: string;
}
