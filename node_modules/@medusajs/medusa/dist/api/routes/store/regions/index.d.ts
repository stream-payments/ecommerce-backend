import { Region } from "./../../../../";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema StoreRegionsListRes
 * type: object
 * properties:
 *   regions:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Region"
 */
export declare type StoreRegionsListRes = {
    regions: Region[];
};
/**
 * @schema StoreRegionsRes
 * type: object
 * properties:
 *   region:
 *     $ref: "#/components/schemas/Region"
 */
export declare type StoreRegionsRes = {
    region: Region;
};
export * from "./get-region";
export * from "./list-regions";
