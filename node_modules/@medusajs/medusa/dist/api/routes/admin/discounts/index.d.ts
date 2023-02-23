import "reflect-metadata";
import { Discount } from "../../../..";
import { DiscountCondition } from "../../../../models";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminDiscountsFields: (keyof Discount)[];
export declare const defaultAdminDiscountsRelations: string[];
export declare const defaultAdminDiscountConditionFields: (keyof DiscountCondition)[];
export declare const defaultAdminDiscountConditionRelations: string[];
/**
 * @schema AdminDiscountsRes
 * type: object
 * properties:
 *   discount:
 *     $ref: "#/components/schemas/Discount"
 */
export declare type AdminDiscountsRes = {
    discount: Discount;
};
/**
 * @schema AdminDiscountConditionsRes
 * type: object
 * properties:
 *   discount_condition:
 *     $ref: "#/components/schemas/DiscountCondition"
 */
export declare type AdminDiscountConditionsRes = {
    discount_condition: DiscountCondition;
};
/**
 * @schema AdminDiscountsDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Discount
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: discount
 *   deleted:
 *     type: boolean
 *     description: Whether the discount was deleted successfully or not.
 *     default: true
 */
export declare type AdminDiscountsDeleteRes = DeleteResponse;
/**
 * @schema AdminDiscountConditionsDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted DiscountCondition
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: discount-condition
 *   deleted:
 *     type: boolean
 *     description: Whether the discount condition was deleted successfully or not.
 *     default: true
 *   discount:
 *     description: The Discount to which the condition used to belong
 *     $ref: "#/components/schemas/Discount"
 */
export declare type AdminDiscountConditionsDeleteRes = DeleteResponse & {
    discount: Discount;
};
/**
 * @schema AdminDiscountsListRes
 * type: object
 * properties:
 *   discounts:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Discount"
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
export declare type AdminDiscountsListRes = PaginatedResponse & {
    discounts: Discount[];
};
export * from "./add-region";
export * from "./create-condition";
export * from "./create-discount";
export * from "./create-dynamic-code";
export * from "./delete-condition";
export * from "./delete-discount";
export * from "./delete-dynamic-code";
export * from "./get-condition";
export * from "./get-discount";
export * from "./get-discount-by-code";
export * from "./list-discounts";
export * from "./remove-region";
export * from "./update-condition";
export * from "./update-discount";
export * from "./add-resources-to-condition-batch";
export * from "./delete-resources-from-condition-batch";
