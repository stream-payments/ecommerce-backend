import { OrderEdit } from "../../../../models";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema StoreOrderEditsRes
 * type: object
 * properties:
 *   order_edit:
 *     $ref: "#/components/schemas/OrderEdit"
 */
export declare type StoreOrderEditsRes = {
    order_edit: Omit<OrderEdit, "internal_note" | "created_by" | "confirmed_by" | "canceled_by">;
};
export * from "./decline-order-edit";
