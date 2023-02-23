import { Cart, DraftOrder, Order } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminDraftOrdersRelations: string[];
export declare const defaultAdminDraftOrdersCartRelations: string[];
export declare const defaultAdminDraftOrdersCartFields: (keyof Cart)[];
export declare const defaultAdminDraftOrdersFields: (keyof DraftOrder)[];
/**
 * @schema AdminPostDraftOrdersDraftOrderRegisterPaymentRes
 * type: object
 * properties:
 *   order:
 *     $ref: "#/components/schemas/Order"
 */
export declare type AdminPostDraftOrdersDraftOrderRegisterPaymentRes = {
    order: Order;
};
/**
 * @schema AdminDraftOrdersRes
 * type: object
 * properties:
 *   draft_order:
 *     $ref: "#/components/schemas/DraftOrder"
 */
export declare type AdminDraftOrdersRes = {
    draft_order: DraftOrder;
};
/**
 * @schema AdminDraftOrdersDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Draft Order.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: draft-order
 *   deleted:
 *     type: boolean
 *     description: Whether the draft order was deleted successfully or not.
 *     default: true
 */
export declare type AdminDraftOrdersDeleteRes = DeleteResponse;
/**
 * @schema AdminDraftOrdersListRes
 * type: object
 * properties:
 *   draft_orders:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/DraftOrder"
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
export declare type AdminDraftOrdersListRes = PaginatedResponse & {
    draft_orders: DraftOrder[];
};
export * from "./create-draft-order";
export * from "./create-line-item";
export * from "./delete-draft-order";
export * from "./delete-line-item";
export * from "./get-draft-order";
export * from "./list-draft-orders";
export * from "./register-payment";
export * from "./update-draft-order";
export * from "./update-line-item";
