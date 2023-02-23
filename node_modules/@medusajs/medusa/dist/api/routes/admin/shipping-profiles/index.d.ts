import "reflect-metadata";
import { ShippingProfile } from "../../../..";
import { DeleteResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminShippingProfilesFields: (keyof ShippingProfile)[];
export declare const defaultAdminShippingProfilesRelations: (keyof ShippingProfile)[];
/**
 * @schema AdminDeleteShippingProfileRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Shipping Profile.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: shipping_profile
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export declare type AdminDeleteShippingProfileRes = DeleteResponse;
/**
 * @schema AdminShippingProfilesRes
 * type: object
 * properties:
 *   shipping_profile:
 *     $ref: "#/components/schemas/ShippingProfile"
 */
export declare type AdminShippingProfilesRes = {
    shipping_profile: ShippingProfile;
};
/**
 * @schema AdminShippingProfilesListRes
 * type: object
 * properties:
 *   shipping_profiles:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ShippingProfile"
 */
export declare type AdminShippingProfilesListRes = {
    shipping_profiles: ShippingProfile[];
};
export * from "./create-shipping-profile";
export * from "./delete-shipping-profile";
export * from "./update-shipping-profile";
