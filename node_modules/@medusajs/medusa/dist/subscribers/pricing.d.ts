import { CacheService, EventBusService } from "../services";
declare class PricingSubscriber {
    protected readonly eventBus_: EventBusService;
    protected readonly cacheService_: CacheService;
    constructor({ eventBusService, cacheService }: {
        eventBusService: any;
        cacheService: any;
    });
}
export default PricingSubscriber;
