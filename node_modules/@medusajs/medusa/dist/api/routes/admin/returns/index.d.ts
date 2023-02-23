import "reflect-metadata";
import { Order, Return } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminReturnsCancelRes
 * type: object
 * properties:
 *   order:
 *     $ref: "#/components/schemas/Order"
 */
export declare type AdminReturnsCancelRes = {
    order: Order;
};
/**
 * @schema AdminReturnsListRes
 * type: object
 * properties:
 *   returns:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Return"
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
export declare type AdminReturnsListRes = PaginatedResponse & {
    returns: Return[];
};
/**
 * @schema AdminReturnsRes
 * type: object
 * properties:
 *   return:
 *     $ref: "#/components/schemas/Return"
 */
export declare type AdminReturnsRes = {
    return: Return;
};
export * from "./list-returns";
export * from "./receive-return";
