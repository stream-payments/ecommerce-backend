import Bull from "bull";
import Redis from "ioredis";
import { EntityManager } from "typeorm";
import { StagedJob } from "../models";
import { StagedJobRepository } from "../repositories/staged-job";
import { ConfigModule, Logger } from "../types/global";
import JobSchedulerService, { CreateJobOptions } from "./job-scheduler";
declare type InjectedDependencies = {
    manager: EntityManager;
    logger: Logger;
    stagedJobRepository: typeof StagedJobRepository;
    jobSchedulerService: JobSchedulerService;
    redisClient: Redis.Redis;
    redisSubscriber: Redis.Redis;
};
declare type Subscriber<T = unknown> = (data: T, eventName: string) => Promise<void>;
declare type SubscriberContext = {
    subscriberId: string;
};
declare type BullJob<T> = {
    update: (data: unknown) => void;
    attemptsMade: number;
    opts: EmitOptions;
    data: {
        eventName: string;
        data: T;
        completedSubscriberIds: string[] | undefined;
    };
};
declare type SubscriberDescriptor = {
    id: string;
    subscriber: Subscriber;
};
declare type EmitOptions = {
    delay?: number;
    attempts: number;
    backoff?: {
        type: "fixed" | "exponential";
        delay: number;
    };
};
/**
 * Can keep track of multiple subscribers to different events and run the
 * subscribers when events happen. Events will run asynchronously.
 */
export default class EventBusService {
    protected readonly config_: ConfigModule;
    protected readonly manager_: EntityManager;
    protected readonly logger_: Logger;
    protected readonly stagedJobRepository_: typeof StagedJobRepository;
    protected readonly jobSchedulerService_: JobSchedulerService;
    protected readonly eventToSubscribersMap_: Map<string | symbol, SubscriberDescriptor[]>;
    protected readonly redisClient_: Redis.Redis;
    protected readonly redisSubscriber_: Redis.Redis;
    protected queue_: Bull;
    protected shouldEnqueuerRun: boolean;
    protected transactionManager_: EntityManager | undefined;
    protected enqueue_: Promise<void>;
    constructor({ manager, logger, stagedJobRepository, redisClient, redisSubscriber, jobSchedulerService, }: InjectedDependencies, config: ConfigModule, singleton?: boolean);
    withTransaction(transactionManager: any): this | EventBusService;
    /**
     * Adds a function to a list of event subscribers.
     * @param event - the event that the subscriber will listen for.
     * @param subscriber - the function to be called when a certain event
     * @param context - context to use when attaching subscriber
     * happens. Subscribers must return a Promise.
     * @return this
     */
    subscribe(event: string | symbol, subscriber: Subscriber, context?: SubscriberContext): this;
    /**
     * Adds a function to a list of event subscribers.
     * @param event - the event that the subscriber will listen for.
     * @param subscriber - the function to be called when a certain event
     * happens. Subscribers must return a Promise.
     * @return this
     */
    unsubscribe(event: string | symbol, subscriber: Subscriber): this;
    /**
     * Calls all subscribers when an event occurs.
     * @param {string} eventName - the name of the event to be process.
     * @param data - the data to send to the subscriber.
     * @param options - options to add the job with
     * @return the job from our queue
     */
    emit<T>(eventName: string, data: T, options?: Record<string, unknown> & EmitOptions): Promise<StagedJob | void>;
    startEnqueuer(): void;
    stopEnqueuer(): Promise<void>;
    enqueuer_(): Promise<void>;
    /**
     * Handles incoming jobs.
     * @param job The job object
     * @return resolves to the results of the subscriber calls.
     */
    worker_: <T>(job: BullJob<T>) => Promise<unknown>;
    /**
     * Registers a cron job.
     * @deprecated All cron job logic has been refactored to the `JobSchedulerService`. This method will be removed in a future release.
     * @param eventName - the name of the event
     * @param data - the data to be sent with the event
     * @param cron - the cron pattern
     * @param handler - the handler to call on each cron job
     * @return void
     */
    createCronJob<T>(eventName: string, data: T, cron: string, handler: Subscriber, options?: CreateJobOptions): Promise<void>;
}
export {};
