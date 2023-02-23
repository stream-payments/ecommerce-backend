import { EntityManager } from "typeorm";
import { IInventoryService } from "../interfaces/services";
import { SalesChannelLocationService, EventBusService } from "./";
declare type InjectedDependencies = {
    inventoryService: IInventoryService;
    salesChannelLocationService: SalesChannelLocationService;
    eventBusService: EventBusService;
    manager: EntityManager;
};
declare class SalesChannelInventoryService {
    protected manager_: EntityManager;
    protected readonly salesChannelLocationService_: SalesChannelLocationService;
    protected readonly eventBusService_: EventBusService;
    protected readonly inventoryService_: IInventoryService;
    constructor({ salesChannelLocationService, inventoryService, eventBusService, manager, }: InjectedDependencies);
    /**
     * Retrieves the available quantity of an item across all sales channel locations
     * @param salesChannelId Sales channel id
     * @param inventoryItemId Item id
     * @returns available quantity of item across all sales channel locations
     */
    retrieveAvailableItemQuantity(salesChannelId: string, inventoryItemId: string): Promise<number>;
}
export default SalesChannelInventoryService;
