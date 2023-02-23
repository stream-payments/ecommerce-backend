import { ShippingOption } from "./../../../../";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema StoreShippingOptionsListRes
 * type: object
 * properties:
 *   shipping_options:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ShippingOption"
 */
export declare type StoreShippingOptionsListRes = {
    shipping_options: ShippingOption[];
};
export * from "./list-options";
export * from "./list-shipping-options";
