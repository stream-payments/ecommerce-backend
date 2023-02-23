import { DistributedTransaction } from "../../../../../utils/transaction";
import { EntityManager } from "typeorm";
import { IInventoryService } from "../../../../../interfaces";
import { ProductVariantInventoryService, ProductVariantService } from "../../../../../services";
import { CreateProductVariantInput } from "../../../../../types/product-variant";
declare type InjectedDependencies = {
    manager: EntityManager;
    productVariantService: ProductVariantService;
    productVariantInventoryService: ProductVariantInventoryService;
    inventoryService?: IInventoryService;
};
export declare const createVariantTransaction: (dependencies: InjectedDependencies, productId: string, input: CreateProductVariantInput) => Promise<DistributedTransaction>;
export declare const revertVariantTransaction: (dependencies: InjectedDependencies, transaction: DistributedTransaction) => Promise<void>;
export {};
