import { ProductVariantInventoryService, ProductVariantService } from "../../../../../services";
import { InventoryItemDTO } from "../../../../../types/inventory";
import { ProductVariant } from "../../../../../models";
export declare type InventoryItemsWithVariants = Partial<InventoryItemDTO> & {
    variants?: ProductVariant[];
};
export declare const getVariantsByInventoryItemId: (inventoryItems: InventoryItemDTO[], productVariantInventoryService: ProductVariantInventoryService, productVariantService: ProductVariantService) => Promise<Record<string, InventoryItemsWithVariants>>;
