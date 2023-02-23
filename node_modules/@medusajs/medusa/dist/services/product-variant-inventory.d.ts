import { EntityManager } from "typeorm";
import { IInventoryService, IStockLocationService, TransactionBaseService } from "../interfaces";
import { LineItem, Product, ProductVariant } from "../models";
import { ProductVariantInventoryItem } from "../models/product-variant-inventory-item";
import { InventoryItemDTO, ReservationItemDTO, ReserveQuantityContext } from "../types/inventory";
import { PricedProduct, PricedVariant } from "../types/pricing";
import { CacheService, ProductVariantService, SalesChannelInventoryService, SalesChannelLocationService } from "./";
declare type InjectedDependencies = {
    manager: EntityManager;
    salesChannelLocationService: SalesChannelLocationService;
    salesChannelInventoryService: SalesChannelInventoryService;
    productVariantService: ProductVariantService;
    stockLocationService: IStockLocationService;
    inventoryService: IInventoryService;
};
declare class ProductVariantInventoryService extends TransactionBaseService {
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected readonly salesChannelLocationService_: SalesChannelLocationService;
    protected readonly salesChannelInventoryService_: SalesChannelInventoryService;
    protected readonly productVariantService_: ProductVariantService;
    protected readonly stockLocationService_: IStockLocationService;
    protected readonly inventoryService_: IInventoryService;
    protected readonly cacheService_: CacheService;
    constructor({ manager, stockLocationService, salesChannelLocationService, salesChannelInventoryService, productVariantService, inventoryService, }: InjectedDependencies);
    /**
     * confirms if requested inventory is available
     * @param variantId id of the variant to confirm inventory for
     * @param quantity quantity of inventory to confirm is available
     * @param context optionally include a sales channel if applicable
     * @returns boolean indicating if inventory is available
     */
    confirmInventory(variantId: string, quantity: number, context?: {
        salesChannelId?: string | null;
    }): Promise<Boolean>;
    /**
     * Retrieves a product variant inventory item by its inventory item ID and variant ID.
     *
     * @param inventoryItemId - The ID of the inventory item to retrieve.
     * @param variantId - The ID of the variant to retrieve.
     * @returns A promise that resolves with the product variant inventory item.
     */
    retrieve(inventoryItemId: string, variantId: string): Promise<ProductVariantInventoryItem>;
    /**
     * list registered inventory items
     * @param itemIds list inventory item ids
     * @returns list of inventory items
     */
    listByItem(itemIds: string[]): Promise<ProductVariantInventoryItem[]>;
    /**
     * List inventory items for a specific variant
     * @param variantId variant id
     * @returns variant inventory items for the variant id
     */
    private listByVariant;
    /**
     * lists variant by inventory item id
     * @param itemId item id
     * @returns a list of product variants that are associated with the item id
     */
    listVariantsByItem(itemId: string): Promise<ProductVariant[]>;
    /**
     * lists inventory items for a given variant
     * @param variantId variant id
     * @returns lidt of inventory items for the variant
     */
    listInventoryItemsByVariant(variantId: string): Promise<InventoryItemDTO[]>;
    /**
     * Attach a variant to an inventory item
     * @param variantId variant id
     * @param inventoryItemId inventory item id
     * @param requiredQuantity quantity of variant to attach
     * @returns the variant inventory item
     */
    attachInventoryItem(variantId: string, inventoryItemId: string, requiredQuantity?: number): Promise<ProductVariantInventoryItem>;
    /**
     * Remove a variant from an inventory item
     * @param variantId variant id or undefined if all the variants will be affected
     * @param inventoryItemId inventory item id
     */
    detachInventoryItem(inventoryItemId: string, variantId?: string): Promise<void>;
    /**
     * Reserves a quantity of a variant
     * @param variantId variant id
     * @param quantity quantity to reserve
     * @param context optional parameters
     */
    reserveQuantity(variantId: string, quantity: number, context?: ReserveQuantityContext): Promise<void | ReservationItemDTO[]>;
    /**
     * Adjusts the quantity of reservations for a line item by a given amount.
     * @param {string} lineItemId - The ID of the line item
     * @param {string} variantId - The ID of the variant
     * @param {string} locationId - The ID of the location to prefer adjusting quantities at
     * @param {number} quantity - The amount to adjust the quantity by
     */
    adjustReservationsQuantityByLineItem(lineItemId: string, variantId: string, locationId: string, quantity: number): Promise<void>;
    /**
     * Validate stock at a location for fulfillment items
     * @param items Fulfillment Line items to validate quantities for
     * @param locationId Location to validate stock at
     * @returns nothing if successful, throws error if not
     */
    validateInventoryAtLocation(items: Omit<LineItem, "beforeInsert">[], locationId: string): Promise<void>;
    /**
     * delete a reservation of variant quantity
     * @param lineItemId line item id
     * @param variantId variant id
     * @param quantity quantity to release
     */
    deleteReservationsByLineItem(lineItemId: string, variantId: string, quantity: number): Promise<void>;
    /**
     * Adjusts inventory of a variant on a location
     * @param variantId variant id
     * @param locationId location id
     * @param quantity quantity to adjust
     */
    adjustInventory(variantId: string, locationId: string, quantity: number): Promise<void>;
    setVariantAvailability(variants: ProductVariant[] | PricedVariant[], salesChannelId: string | undefined): Promise<ProductVariant[] | PricedVariant[]>;
    setProductAvailability(products: (Product | PricedProduct)[], salesChannelId: string | undefined): Promise<(Product | PricedProduct)[]>;
}
export default ProductVariantInventoryService;
