import "reflect-metadata";
import { Order } from "../../../..";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreOrdersRelations: string[];
export declare const allowedStoreOrdersRelations: string[];
export declare const defaultStoreOrdersFields: (keyof Order)[];
export declare const allowedStoreOrdersFields: string[];
/**
 * @schema StoreOrdersRes
 * type: object
 * properties:
 *   order:
 *     $ref: "#/components/schemas/Order"
 */
export declare type StoreOrdersRes = {
    order: Order;
};
export * from "./lookup-order";
export * from "./confirm-order-request";
export * from "./request-order";
