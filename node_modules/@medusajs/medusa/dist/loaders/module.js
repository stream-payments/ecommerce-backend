"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleHelper = void 0;
var awilix_1 = require("awilix");
var medusa_telemetry_1 = require("medusa-telemetry");
var global_1 = require("../types/global");
var module_helper_1 = require("../utils/module-helper");
exports.moduleHelper = new module_helper_1.ModulesHelper();
var registerModule = function (container, resolution, configModule, logger) { return __awaiter(void 0, void 0, void 0, function () {
    var constainerName, _a, scope, resources, message, loadedModule, error_1, moduleService, moduleModels, moduleLoaders, moduleLoaders_1, moduleLoaders_1_1, loader, e_1_1, err_1;
    var _b, _c, _d, e_1, _e;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                constainerName = resolution.definition.registrationName;
                _a = (_f = resolution.moduleDeclaration) !== null && _f !== void 0 ? _f : {}, scope = _a.scope, resources = _a.resources;
                if (!scope || (scope === global_1.MODULE_SCOPE.INTERNAL && !resources)) {
                    message = "The module ".concat(resolution.definition.label, " has to define its scope (internal | external)");
                    if (scope && !resources) {
                        message = "The module ".concat(resolution.definition.label, " is missing its resources config");
                    }
                    container.register((_b = {},
                        _b[constainerName] = (0, awilix_1.asValue)(undefined),
                        _b));
                    return [2 /*return*/, {
                            error: new Error(message),
                        }];
                }
                if (!resolution.resolutionPath) {
                    container.register((_c = {},
                        _c[constainerName] = (0, awilix_1.asValue)(undefined),
                        _c));
                    return [2 /*return*/];
                }
                _g.label = 1;
            case 1:
                _g.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(resolution.resolutionPath)); })];
            case 2:
                loadedModule = (_g.sent()).default;
                return [3 /*break*/, 4];
            case 3:
                error_1 = _g.sent();
                return [2 /*return*/, { error: error_1 }];
            case 4:
                moduleService = (loadedModule === null || loadedModule === void 0 ? void 0 : loadedModule.service) || null;
                if (!moduleService) {
                    return [2 /*return*/, {
                            error: new Error("No service found in module. Make sure that your module exports a service."),
                        }];
                }
                if (scope === global_1.MODULE_SCOPE.INTERNAL &&
                    resources === global_1.MODULE_RESOURCE_TYPE.SHARED) {
                    moduleModels = (loadedModule === null || loadedModule === void 0 ? void 0 : loadedModule.models) || null;
                    if (moduleModels) {
                        moduleModels.map(function (val) {
                            container.registerAdd("db_entities", (0, awilix_1.asValue)(val));
                        });
                    }
                }
                // TODO: "cradle" should only contain dependent Modules and the EntityManager if module scope is shared
                container.register((_d = {},
                    _d[constainerName] = (0, awilix_1.asFunction)(function (cradle) {
                        return new moduleService(cradle, resolution.options, resolution.moduleDeclaration);
                    }).singleton(),
                    _d));
                moduleLoaders = (loadedModule === null || loadedModule === void 0 ? void 0 : loadedModule.loaders) || [];
                _g.label = 5;
            case 5:
                _g.trys.push([5, 14, , 15]);
                _g.label = 6;
            case 6:
                _g.trys.push([6, 11, 12, 13]);
                moduleLoaders_1 = __values(moduleLoaders), moduleLoaders_1_1 = moduleLoaders_1.next();
                _g.label = 7;
            case 7:
                if (!!moduleLoaders_1_1.done) return [3 /*break*/, 10];
                loader = moduleLoaders_1_1.value;
                return [4 /*yield*/, loader({
                        container: container,
                        configModule: configModule,
                        logger: logger,
                        options: resolution.options,
                    }, resolution.moduleDeclaration)];
            case 8:
                _g.sent();
                _g.label = 9;
            case 9:
                moduleLoaders_1_1 = moduleLoaders_1.next();
                return [3 /*break*/, 7];
            case 10: return [3 /*break*/, 13];
            case 11:
                e_1_1 = _g.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 13];
            case 12:
                try {
                    if (moduleLoaders_1_1 && !moduleLoaders_1_1.done && (_e = moduleLoaders_1.return)) _e.call(moduleLoaders_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 13: return [3 /*break*/, 15];
            case 14:
                err_1 = _g.sent();
                return [2 /*return*/, {
                        error: new Error("Loaders for module ".concat(resolution.definition.label, " failed: ").concat(err_1.message)),
                    }];
            case 15:
                (0, medusa_telemetry_1.trackInstallation)({
                    module: resolution.definition.key,
                    resolution: resolution.resolutionPath,
                }, "module");
                return [2 /*return*/];
        }
    });
}); };
exports.default = (function (_a) {
    var container = _a.container, configModule = _a.configModule, logger = _a.logger;
    return __awaiter(void 0, void 0, void 0, function () {
        var moduleResolutions, _b, _c, resolution, registrationResult, error, e_2_1;
        var e_2, _d;
        var _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    moduleResolutions = (_e = configModule === null || configModule === void 0 ? void 0 : configModule.moduleResolutions) !== null && _e !== void 0 ? _e : {};
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 6, 7, 8]);
                    _b = __values(Object.values(moduleResolutions)), _c = _b.next();
                    _f.label = 2;
                case 2:
                    if (!!_c.done) return [3 /*break*/, 5];
                    resolution = _c.value;
                    return [4 /*yield*/, registerModule(container, resolution, configModule, logger)];
                case 3:
                    registrationResult = _f.sent();
                    if (registrationResult === null || registrationResult === void 0 ? void 0 : registrationResult.error) {
                        error = registrationResult.error;
                        if (resolution.definition.isRequired) {
                            logger === null || logger === void 0 ? void 0 : logger.warn("Could not resolve required module: ".concat(resolution.definition.label, ". Error: ").concat(error.message));
                            throw error;
                        }
                        logger === null || logger === void 0 ? void 0 : logger.warn("Could not resolve module: ".concat(resolution.definition.label, ". Error: ").concat(error.message));
                    }
                    _f.label = 4;
                case 4:
                    _c = _b.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_2_1 = _f.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 8:
                    exports.moduleHelper.setModules(Object.entries(moduleResolutions).reduce(function (acc, _a) {
                        var _b = __read(_a, 2), k = _b[0], v = _b[1];
                        if (v.resolutionPath) {
                            acc[k] = v;
                        }
                        return acc;
                    }, {}));
                    container.register({
                        modulesHelper: (0, awilix_1.asValue)(exports.moduleHelper),
                    });
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=module.js.map