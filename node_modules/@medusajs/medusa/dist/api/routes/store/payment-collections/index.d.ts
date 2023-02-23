import "reflect-metadata";
import { PaymentCollection, PaymentSession } from "../../../../models";
declare const _default: (app: any, container: any) => any;
export default _default;
export declare const defaultPaymentCollectionFields: string[];
export declare const defaultPaymentCollectionRelations: string[];
/**
 * @schema StorePaymentCollectionsRes
 * type: object
 * properties:
 *   payment_collection:
 *     $ref: "#/components/schemas/PaymentCollection"
 */
export declare type StorePaymentCollectionsRes = {
    payment_collection: PaymentCollection;
};
/**
 * @schema StorePaymentCollectionsSessionRes
 * type: object
 * properties:
 *   payment_session:
 *     $ref: "#/components/schemas/PaymentSession"
 */
export declare type StorePaymentCollectionsSessionRes = {
    payment_session: PaymentSession;
};
export * from "./authorize-batch-payment-sessions";
export * from "./get-payment-collection";
export * from "./manage-batch-payment-sessions";
export * from "./manage-payment-session";
export * from "./refresh-payment-session";
