import { Customer } from "./../../../..";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema StoreAuthRes
 * type: object
 * properties:
 *   customer:
 *     $ref: "#/components/schemas/Customer"
 */
export declare type StoreAuthRes = {
    customer: Customer;
};
/**
 * @schema StoreGetAuthEmailRes
 * type: object
 * properties:
 *   exists:
 *     type: boolean
 *     description: Whether email exists or not.
 */
export declare type StoreGetAuthEmailRes = {
    exists: boolean;
};
export * from "./create-session";
export * from "./delete-session";
export * from "./exists";
export * from "./get-session";
