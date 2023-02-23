import { Redis } from "ioredis";
import { ICacheService } from "../interfaces";
export default class CacheService implements ICacheService {
    protected readonly redis_: Redis;
    constructor({ redisClient }: {
        redisClient: any;
    });
    /**
     * Set a key/value pair to the cache.
     * It is also possible to manage the ttl through environment variable using CACHE_TTL. If the ttl is 0 it will
     * act like the value should not be cached at all.
     * @param key
     * @param data
     * @param ttl
     */
    set(key: string, data: Record<string, unknown>, ttl?: number): Promise<void>;
    /**
     * Retrieve a cached value belonging to the given key.
     * @param cacheKey
     */
    get<T>(cacheKey: string): Promise<T | null>;
    /**
     * Invalidate cache for a specific key. a key can be either a specific key or more global such as "ps:*".
     * @param key
     */
    invalidate(key: string): Promise<void>;
}
