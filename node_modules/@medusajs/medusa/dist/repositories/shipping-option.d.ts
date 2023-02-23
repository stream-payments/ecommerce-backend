import { Repository } from "typeorm";
import { ShippingOption } from "../models/shipping-option";
export declare class ShippingOptionRepository extends Repository<ShippingOption> {
    upsertShippingProfile(shippingOptionIds: string[], shippingProfileId: string): Promise<ShippingOption[]>;
}
