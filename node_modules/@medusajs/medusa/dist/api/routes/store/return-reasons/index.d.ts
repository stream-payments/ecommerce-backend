import { ReturnReason } from "./../../../../";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreReturnReasonFields: (keyof ReturnReason)[];
export declare const defaultStoreReturnReasonRelations: (keyof ReturnReason)[];
/**
 * @schema StoreReturnReasonsListRes
 * type: object
 * properties:
 *   return_reasons:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ReturnReason"
 */
export declare type StoreReturnReasonsListRes = {
    return_reasons: ReturnReason[];
};
/**
 * @schema StoreReturnReasonsRes
 * type: object
 * properties:
 *   return_reason:
 *     $ref: "#/components/schemas/ReturnReason"
 */
export declare type StoreReturnReasonsRes = {
    return_reason: ReturnReason;
};
export * from "./get-reason";
