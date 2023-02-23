"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODULE_DEFINITIONS = void 0;
var global_1 = require("../../types/global");
exports.MODULE_DEFINITIONS = [
    {
        key: "stockLocationService",
        registrationName: "stockLocationService",
        defaultPackage: false,
        label: "StockLocationService",
        isRequired: false,
        canOverride: true,
        defaultModuleDeclaration: {
            scope: global_1.MODULE_SCOPE.INTERNAL,
            resources: global_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    {
        key: "inventoryService",
        registrationName: "inventoryService",
        defaultPackage: false,
        label: "InventoryService",
        isRequired: false,
        canOverride: true,
        defaultModuleDeclaration: {
            scope: global_1.MODULE_SCOPE.INTERNAL,
            resources: global_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
];
exports.default = exports.MODULE_DEFINITIONS;
//# sourceMappingURL=definitions.js.map