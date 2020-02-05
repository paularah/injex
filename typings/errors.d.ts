import { ModuleName } from "./utils/metadata";
export declare class ModuleDependencyNotFoundError extends Error {
    constructor(moduleName: ModuleName, dependencyName: ModuleName);
}
export declare class InitializeMuduleError extends Error {
    constructor(moduleName: ModuleName);
}
export declare class DuplicateDefinitionError extends Error {
    constructor(moduleName: ModuleName);
}
