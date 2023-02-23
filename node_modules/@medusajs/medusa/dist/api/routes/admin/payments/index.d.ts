import "reflect-metadata";
import { Payment, Refund } from "../../../../models";
declare const _default: (app: any, container: any) => any;
export default _default;
export declare const defaultPaymentFields: string[];
/**
 * @schema AdminPaymentRes
 * type: object
 * properties:
 *   payment:
 *     $ref: "#/components/schemas/Payment"
 */
export declare type AdminPaymentRes = {
    payment: Payment;
};
/**
 * @schema AdminRefundRes
 * type: object
 * properties:
 *   refund:
 *     $ref: "#/components/schemas/Refund"
 */
export declare type AdminRefundRes = {
    refund: Refund;
};
export * from "./get-payment";
export * from "./refund-payment";
