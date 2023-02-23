import { PaymentProvider, Store, TaxProvider } from "./../../../../";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminStoresRes
 * type: object
 * properties:
 *   store:
 *     $ref: "#/components/schemas/Store"
 */
export declare type AdminStoresRes = {
    store: Store;
};
/**
 * @schema AdminTaxProvidersList
 * type: object
 * properties:
 *   tax_providers:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/TaxProvider"
 */
export declare type AdminTaxProvidersList = {
    tax_providers: TaxProvider[];
};
/**
 * @schema AdminPaymentProvidersList
 * type: object
 * properties:
 *   payment_providers:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/PaymentProvider"
 */
export declare type AdminPaymentProvidersList = {
    payment_providers: PaymentProvider[];
};
export * from "./update-store";
