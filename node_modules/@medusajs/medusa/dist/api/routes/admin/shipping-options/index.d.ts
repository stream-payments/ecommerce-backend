import { ShippingOption } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import { FlagRouter } from "../../../../utils/flag-router";
declare const _default: (app: any, featureFlagRouter: FlagRouter) => any;
export default _default;
export declare const defaultFields: string[];
export declare const defaultRelations: string[];
/**
 * @schema AdminShippingOptionsListRes
 * type: object
 * properties:
 *   shipping_options:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ShippingOption"
 *   count:
 *     type: integer
 *     description: The total number of items available
 */
export declare type AdminShippingOptionsListRes = PaginatedResponse & {
    shipping_options: ShippingOption[];
};
/**
 * @schema AdminShippingOptionsRes
 * type: object
 * properties:
 *   shipping_option:
 *     $ref: "#/components/schemas/ShippingOption"
 */
export declare type AdminShippingOptionsRes = {
    shipping_option: ShippingOption;
};
/**
 * @schema AdminShippingOptionsDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Shipping Option.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: shipping-option
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export declare type AdminShippingOptionsDeleteRes = DeleteResponse;
export * from "./create-shipping-option";
export * from "./delete-shipping-option";
export * from "./get-shipping-option";
export * from "./list-shipping-options";
export * from "./update-shipping-option";
