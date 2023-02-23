import { Oauth } from "../../../..";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminAppsRes
 * type: object
 * properties:
 *   apps:
 *     $ref: "#/components/schemas/OAuth"
 */
export declare type AdminAppsRes = {
    apps: Oauth;
};
/**
 * @schema AdminAppsListRes
 * type: object
 * properties:
 *   apps:
 *      type: array
 *      items:
 *        $ref: "#/components/schemas/OAuth"
 */
export declare type AdminAppsListRes = {
    apps: Oauth[];
};
