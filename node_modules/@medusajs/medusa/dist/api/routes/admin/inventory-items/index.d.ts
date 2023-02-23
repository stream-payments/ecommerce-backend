import "reflect-metadata";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import { InventoryItemDTO, InventoryLevelDTO } from "../../../../types/inventory";
import { ProductVariant } from "../../../../models";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminInventoryItemFields: (keyof InventoryItemDTO)[];
export declare const defaultAdminInventoryItemRelations: never[];
/**
 * @schema AdminInventoryItemsRes
 * type: object
 * properties:
 *   inventory_item:
 *     $ref: "#/components/schemas/InventoryItemDTO"
 */
export declare type AdminInventoryItemsRes = {
    inventory_item: InventoryItemDTO;
};
/**
 * @schema AdminInventoryItemsDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Inventory Item.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     format: inventory_item
 *   deleted:
 *     type: boolean
 *     description: Whether or not the Inventory Item was deleted.
 *     default: true
 */
export declare type AdminInventoryItemsDeleteRes = DeleteResponse;
/**
 * @schema AdminInventoryItemsListRes
 * type: object
 * properties:
 *   inventory_items:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/InventoryItemDTO"
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
export declare type AdminInventoryItemsListRes = PaginatedResponse & {
    inventory_items: InventoryItemDTO[];
};
/**
 * @schema AdminInventoryItemsListWithVariantsAndLocationLevelsRes
 * type: object
 * properties:
 *   inventory_items:
 *     type: array
 *     items:
 *       allOf:
 *         - $ref: "#/components/schemas/InventoryItemDTO"
 *         - type: object
 *           properties:
 *             location_levels:
 *               type: array
 *               items:
 *                 allOf:
 *                   - $ref: "#/components/schemas/InventoryLevelDTO"
 *             variants:
 *               type: array
 *               items:
 *                 allOf:
 *                   - $ref: "#/components/schemas/ProductVariant"
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
export declare type AdminInventoryItemsListWithVariantsAndLocationLevelsRes = Partial<InventoryItemDTO> & {
    location_levels?: InventoryLevelDTO[];
    variants?: ProductVariant[];
};
/**
 * @schema AdminInventoryItemsLocationLevelsRes
 * type: object
 * properties:
 *   id:
 *     description: The id of the location
 *   location_levels:
 *     description: List of stock levels at a given location
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/InventoryLevelDTO"
 */
export declare type AdminInventoryItemsLocationLevelsRes = {
    inventory_item: {
        id: any;
        location_levels: InventoryLevelDTO[];
    };
};
export * from "./list-inventory-items";
export * from "./get-inventory-item";
export * from "./update-inventory-item";
export * from "./list-location-levels";
export * from "./create-location-level";
export * from "./update-location-level";
