import { FindOperator, Repository } from "typeorm";
import { PriceList, Product, SalesChannel } from "../models";
import { ExtendedFindConfig, Selector } from "../types/common";
export declare type ProductSelector = Omit<Selector<Product>, "tags"> & {
    tags: FindOperator<string[]>;
};
export declare type DefaultWithoutRelations = Omit<ExtendedFindConfig<Product, ProductSelector>, "relations">;
export declare type FindWithoutRelationsOptions = DefaultWithoutRelations & {
    where: DefaultWithoutRelations["where"] & {
        price_list_id?: FindOperator<PriceList>;
        sales_channel_id?: FindOperator<SalesChannel>;
        category_id?: {
            value: string[];
        };
        include_category_children?: boolean;
        discount_condition_id?: string;
    };
};
export declare class ProductRepository extends Repository<Product> {
    private mergeEntitiesWithRelations;
    private queryProducts;
    private getGroupedRelations;
    private queryProductsWithIds;
    findWithRelationsAndCount(relations?: string[], idsOrOptionsWithoutRelations?: FindWithoutRelationsOptions): Promise<[Product[], number]>;
    findWithRelations(relations?: string[], idsOrOptionsWithoutRelations?: FindWithoutRelationsOptions | string[], withDeleted?: boolean): Promise<Product[]>;
    findOneWithRelations(relations?: string[], optionsWithoutRelations?: FindWithoutRelationsOptions): Promise<Product>;
    bulkAddToCollection(productIds: string[], collectionId: string): Promise<Product[]>;
    bulkRemoveFromCollection(productIds: string[], collectionId: string): Promise<Product[]>;
    getFreeTextSearchResultsAndCount(q: string, options?: FindWithoutRelationsOptions, relations?: string[]): Promise<[Product[], number]>;
    isProductInSalesChannels(id: string, salesChannelIds: string[]): Promise<boolean>;
    /**
     * Upserts shipping profile for products
     * @param productIds IDs of products to update
     * @param shippingProfileId ID of shipping profile to assign to products
     * @returns updated products
     */
    upsertShippingProfile(productIds: string[], shippingProfileId: string): Promise<Product[]>;
    private _cleanOptions;
}
