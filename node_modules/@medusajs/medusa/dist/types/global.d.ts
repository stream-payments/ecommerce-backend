import { AwilixContainer } from "awilix";
import { Request } from "express";
import { LoggerOptions } from "typeorm";
import { Logger as _Logger } from "winston";
import { Customer, User } from "../models";
import { FindConfig, RequestQueryFields } from "./common";
declare global {
    namespace Express {
        interface Request {
            user?: (User | Customer) & {
                customer_id?: string;
                userId?: string;
            };
            scope: MedusaContainer;
            validatedQuery: RequestQueryFields & Record<string, unknown>;
            validatedBody: unknown;
            listConfig: FindConfig<unknown>;
            retrieveConfig: FindConfig<unknown>;
            filterableFields: Record<string, unknown>;
            allowedProperties: string[];
            errors: string[];
        }
    }
}
export declare type ExtendedRequest<TEntity> = Request & {
    resource: TEntity;
};
export declare type ClassConstructor<T> = {
    new (...args: unknown[]): T;
};
export declare type MedusaContainer = AwilixContainer & {
    registerAdd: <T>(name: string, registration: T) => MedusaContainer;
};
export declare type Logger = _Logger & {
    progress: (activityId: string, msg: string) => void;
    info: (msg: string) => void;
    warn: (msg: string) => void;
};
export declare enum MODULE_SCOPE {
    INTERNAL = "internal",
    EXTERNAL = "external"
}
export declare enum MODULE_RESOURCE_TYPE {
    SHARED = "shared",
    ISOLATED = "isolated"
}
export declare type ConfigurableModuleDeclaration = {
    scope: MODULE_SCOPE.INTERNAL;
    resources: MODULE_RESOURCE_TYPE;
    resolve?: string;
    options?: Record<string, unknown>;
};
export declare type ModuleResolution = {
    resolutionPath: string | false;
    definition: ModuleDefinition;
    options?: Record<string, unknown>;
    moduleDeclaration?: ConfigurableModuleDeclaration;
};
export declare type ModuleDefinition = {
    key: string;
    registrationName: string;
    defaultPackage: string | false;
    label: string;
    canOverride?: boolean;
    isRequired?: boolean;
    defaultModuleDeclaration: ConfigurableModuleDeclaration;
};
export declare type LoaderOptions = {
    container: MedusaContainer;
    configModule: ConfigModule;
    options?: Record<string, unknown>;
    logger?: Logger;
};
export declare type Constructor<T> = new (...args: any[]) => T;
export declare type ModuleExports = {
    loaders: ((options: LoaderOptions, moduleDeclaration?: ConfigurableModuleDeclaration) => Promise<void>)[];
    service: Constructor<any>;
    migrations?: any[];
    models?: Constructor<any>[];
};
declare type SessionOptions = {
    name?: string;
    resave?: boolean;
    rolling?: boolean;
    saveUninitialized?: boolean;
    secret?: string;
    ttl?: number;
};
export declare type ConfigModule = {
    projectConfig: {
        redis_url?: string;
        session_options?: SessionOptions;
        jwt_secret?: string;
        cookie_secret?: string;
        database_url?: string;
        database_type: string;
        database_database?: string;
        database_schema?: string;
        database_logging: LoggerOptions;
        database_extra?: Record<string, unknown> & {
            ssl: {
                rejectUnauthorized: false;
            };
        };
        store_cors?: string;
        admin_cors?: string;
    };
    featureFlags: Record<string, boolean | string>;
    modules?: Record<string, false | string | Partial<ConfigurableModuleDeclaration>>;
    moduleResolutions?: Record<string, ModuleResolution>;
    plugins: ({
        resolve: string;
        options: Record<string, unknown>;
    } | string)[];
};
export {};
