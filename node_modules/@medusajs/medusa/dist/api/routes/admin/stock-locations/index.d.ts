import "reflect-metadata";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import { StockLocationDTO } from "../../../../types/stock-location";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminStockLocationFields: (keyof StockLocationDTO)[];
export declare const defaultAdminStockLocationRelations: never[];
/**
 * @schema AdminStockLocationsDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Stock Location.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: stock_location
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export declare type AdminStockLocationsDeleteRes = DeleteResponse;
/**
 * @schema AdminStockLocationsRes
 * type: object
 * properties:
 *   stock_location:
 *     $ref: "#/components/schemas/StockLocationDTO"
 */
export declare type AdminStockLocationsRes = {
    stock_location: StockLocationDTO;
};
/**
 * @schema AdminStockLocationsListRes
 * type: object
 * properties:
 *   stock_locations:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/StockLocationDTO"
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
export declare type AdminStockLocationsListRes = PaginatedResponse & {
    stock_locations: StockLocationDTO[];
};
export * from "./list-stock-locations";
export * from "./get-stock-location";
export * from "./create-stock-location";
export * from "./update-stock-location";
