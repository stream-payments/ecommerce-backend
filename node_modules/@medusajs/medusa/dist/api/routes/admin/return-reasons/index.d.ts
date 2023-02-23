import { ReturnReason } from "../../../..";
import { DeleteResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminReturnReasonsFields: (keyof ReturnReason)[];
export declare const defaultAdminReturnReasonsRelations: (keyof ReturnReason)[];
/**
 * @schema AdminReturnReasonsRes
 * type: object
 * properties:
 *   return_reason:
 *     $ref: "#/components/schemas/ReturnReason"
 */
export declare type AdminReturnReasonsRes = {
    return_reason: ReturnReason;
};
/**
 * @schema AdminReturnReasonsListRes
 * type: object
 * properties:
 *   return_reasons:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ReturnReason"
 */
export declare type AdminReturnReasonsListRes = {
    return_reasons: ReturnReason[];
};
/**
 * @schema AdminReturnReasonsDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted return reason
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: return_reason
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export declare type AdminReturnReasonsDeleteRes = DeleteResponse;
export * from "./create-reason";
export * from "./update-reason";
