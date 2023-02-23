import { Customer, Order } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any, container: any) => any;
export default _default;
export declare const defaultStoreCustomersRelations: string[];
export declare const defaultStoreCustomersFields: (keyof Customer)[];
export declare const allowedStoreCustomersRelations: string[];
export declare const allowedStoreCustomersFields: string[];
/**
 * @schema StoreCustomersRes
 * type: object
 * properties:
 *   customer:
 *     $ref: "#/components/schemas/Customer"
 */
export declare type StoreCustomersRes = {
    customer: Omit<Customer, "password_hash">;
};
/**
 * @schema StoreCustomersListOrdersRes
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
export declare type StoreCustomersListOrdersRes = PaginatedResponse & {
    orders: Order[];
};
/**
 * @schema StoreCustomersListPaymentMethodsRes
 * type: object
 * properties:
 *   payment_methods:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         provider_id:
 *           type: string
 *           description: The id of the Payment Provider where the payment method is saved.
 *         data:
 *           type: object
 *           description: The data needed for the Payment Provider to use the saved payment method.
 */
export declare type StoreCustomersListPaymentMethodsRes = {
    payment_methods: {
        provider_id: string;
        data: object;
    }[];
};
export * from "./create-address";
export * from "./create-customer";
export * from "./list-orders";
export * from "./reset-password";
export * from "./reset-password-token";
export * from "./update-address";
export * from "./update-customer";
