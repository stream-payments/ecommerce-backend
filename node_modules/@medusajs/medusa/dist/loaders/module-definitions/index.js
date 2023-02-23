"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolve_cwd_1 = __importDefault(require("resolve-cwd"));
var definitions_1 = __importDefault(require("./definitions"));
exports.default = (function (_a) {
    var e_1, _b;
    var _c;
    var modules = _a.modules;
    var moduleResolutions = {};
    var projectModules = modules !== null && modules !== void 0 ? modules : {};
    try {
        for (var MODULE_DEFINITIONS_1 = __values(definitions_1.default), MODULE_DEFINITIONS_1_1 = MODULE_DEFINITIONS_1.next(); !MODULE_DEFINITIONS_1_1.done; MODULE_DEFINITIONS_1_1 = MODULE_DEFINITIONS_1.next()) {
            var definition = MODULE_DEFINITIONS_1_1.value;
            var resolutionPath = definition.defaultPackage;
            var moduleConfiguration = projectModules[definition.key];
            if (typeof moduleConfiguration === "boolean") {
                if (!moduleConfiguration && definition.isRequired) {
                    throw new Error("Module: ".concat(definition.label, " is required"));
                }
                if (!moduleConfiguration) {
                    moduleResolutions[definition.key] = {
                        resolutionPath: false,
                        definition: definition,
                        options: {},
                    };
                    continue;
                }
            }
            // If user added a module and it's overridable, we resolve that instead
            if (definition.canOverride &&
                (typeof moduleConfiguration === "string" ||
                    (typeof moduleConfiguration === "object" &&
                        moduleConfiguration.resolve))) {
                resolutionPath = (0, resolve_cwd_1.default)(typeof moduleConfiguration === "string"
                    ? moduleConfiguration
                    : moduleConfiguration.resolve);
            }
            var moduleDeclaration = typeof moduleConfiguration === "object" ? moduleConfiguration : {};
            moduleResolutions[definition.key] = {
                resolutionPath: resolutionPath,
                definition: definition,
                moduleDeclaration: __assign(__assign({}, definition.defaultModuleDeclaration), moduleDeclaration),
                options: typeof moduleConfiguration === "object"
                    ? (_c = moduleConfiguration.options) !== null && _c !== void 0 ? _c : {}
                    : {},
            };
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (MODULE_DEFINITIONS_1_1 && !MODULE_DEFINITIONS_1_1.done && (_b = MODULE_DEFINITIONS_1.return)) _b.call(MODULE_DEFINITIONS_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return moduleResolutions;
});
//# sourceMappingURL=index.js.map