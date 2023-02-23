export function getInternalModules(configModule: any): {
    moduleDeclaration: import("../..").ConfigurableModuleDeclaration | undefined;
    loadedModule: any;
}[];
declare function _default(directory: any, featureFlagRouter: any): {
    coreMigrations: any;
};
export default _default;
export function getEnabledMigrations(migrationDirs: any, isFlagEnabled: any): any;
export function getModuleMigrations(configModule: any, isFlagEnabled: any): {
    moduleDeclaration: import("../..").ConfigurableModuleDeclaration | undefined;
    models: any;
    migrations: any;
    externalMigrations: {};
}[];
export function getModuleSharedResources(configModule: any, featureFlagsRouter: any): {
    models: any[];
    migrations: any[];
};
