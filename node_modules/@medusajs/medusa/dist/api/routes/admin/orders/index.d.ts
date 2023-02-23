import "reflect-metadata";
import { Order } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
import { FlagRouter } from "../../../../utils/flag-router";
declare const _default: (app: any, featureFlagRouter: FlagRouter) => any;
export default _default;
/**
 * @schema AdminOrdersRes
 * type: object
 * properties:
 *   order:
 *     $ref: "#/components/schemas/Order"
 */
export declare type AdminOrdersRes = {
    order: Order;
};
/**
 * @schema AdminOrdersListRes
 * type: object
 * properties:
 *   orders:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Order"
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
export declare type AdminOrdersListRes = PaginatedResponse & {
    orders: Order[];
};
export declare const defaultAdminOrdersRelations: string[];
export declare const defaultAdminOrdersFields: (keyof Order)[];
export declare const filterableAdminOrdersFields: string[];
export declare const AvailableOrderIncludesFields: {
    RETURNABLE_ITEMS: string;
};
export declare const allowedOrderIncludesFields: string[];
export * from "./add-shipping-method";
export * from "./archive-order";
export * from "./cancel-claim";
export * from "./cancel-fulfillment";
export * from "./cancel-fulfillment-claim";
export * from "./cancel-fulfillment-swap";
export * from "./cancel-order";
export * from "./cancel-swap";
export * from "./capture-payment";
export * from "./complete-order";
export * from "./create-claim";
export * from "./create-claim-shipment";
export * from "./create-fulfillment";
export * from "./create-shipment";
export * from "./create-swap";
export * from "./create-swap-shipment";
export * from "./fulfill-claim";
export * from "./fulfill-swap";
export * from "./get-order";
export * from "./list-orders";
export * from "./process-swap-payment";
export * from "./refund-payment";
export * from "./request-return";
export * from "./update-claim";
export * from "./update-order";
