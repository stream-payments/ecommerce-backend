import { Return } from "./../../../../models/return";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema StoreReturnsRes
 * type: object
 * properties:
 *   return:
 *     $ref: "#/components/schemas/Return"
 */
export declare type StoreReturnsRes = {
    return: Return;
};
export * from "./create-return";
