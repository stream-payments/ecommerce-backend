import { Region } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import "reflect-metadata";
import { FlagRouter } from "../../../../utils/flag-router";
declare const _default: (app: any, featureFlagRouter: FlagRouter) => any;
export default _default;
export declare const defaultAdminRegionFields: (keyof Region)[];
export declare const defaultAdminRegionRelations: string[];
/**
 * @schema AdminRegionsRes
 * type: object
 * properties:
 *   region:
 *     $ref: "#/components/schemas/Region"
 */
export declare class AdminRegionsRes {
    region: Region;
}
/**
 * @schema AdminRegionsListRes
 * type: object
 * properties:
 *   regions:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Region"
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
export declare type AdminRegionsListRes = PaginatedResponse & {
    regions: Region[];
};
/**
 * @schema AdminRegionsDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Region.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: region
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export declare type AdminRegionsDeleteRes = DeleteResponse;
export declare class FulfillmentOption {
    provider_id: string;
    options: unknown[];
}
/**
 * @schema AdminGetRegionsRegionFulfillmentOptionsRes
 * type: object
 * properties:
 *   fulfillment_options:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         provider_id:
 *           type: string
 *           description: ID of the fulfillment provider
 *         options:
 *           type: array
 *           description: fulfillment provider options
 *           example:
 *             - id: "manual-fulfillment"
 *             - id: "manual-fulfillment-return"
 *               is_return: true
 */
export declare class AdminGetRegionsRegionFulfillmentOptionsRes {
    fulfillment_options: FulfillmentOption[];
}
export * from "./list-regions";
export * from "./update-region";
export * from "./create-region";
export * from "./add-country";
export * from "./add-payment-provider";
export * from "./add-fulfillment-provider";
