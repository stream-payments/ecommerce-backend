import { EntityManager } from "typeorm";
import { IStockLocationService, TransactionBaseService } from "../interfaces";
import { SalesChannelService, EventBusService } from "./";
declare type InjectedDependencies = {
    stockLocationService: IStockLocationService;
    salesChannelService: SalesChannelService;
    eventBusService: EventBusService;
    manager: EntityManager;
};
/**
 * Service for managing the stock locations of sales channels
 */
declare class SalesChannelLocationService extends TransactionBaseService {
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected readonly salesChannelService_: SalesChannelService;
    protected readonly eventBusService: EventBusService;
    protected readonly stockLocationService: IStockLocationService;
    constructor({ salesChannelService, stockLocationService, eventBusService, manager, }: InjectedDependencies);
    /**
     * Removes an association between a sales channel and a stock location.
     * @param salesChannelId - The ID of the sales channel or undefined if all the sales channel will be affected.
     * @param locationId - The ID of the stock location.
     * @returns A promise that resolves when the association has been removed.
     */
    removeLocation(locationId: string, salesChannelId?: string): Promise<void>;
    /**
     * Associates a sales channel with a stock location.
     * @param salesChannelId - The ID of the sales channel.
     * @param locationId - The ID of the stock location.
     * @returns A promise that resolves when the association has been created.
     */
    associateLocation(salesChannelId: string, locationId: string): Promise<void>;
    /**
     * Lists the stock locations associated with a sales channel.
     * @param salesChannelId - The ID of the sales channel.
     * @returns A promise that resolves with an array of location IDs.
     */
    listLocations(salesChannelId: string): Promise<string[]>;
}
export default SalesChannelLocationService;
