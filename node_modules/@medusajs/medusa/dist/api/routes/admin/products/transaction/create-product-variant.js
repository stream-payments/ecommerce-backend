"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.revertVariantTransaction = exports.createVariantTransaction = void 0;
var transaction_1 = require("../../../../../utils/transaction");
var ulid_1 = require("ulid");
var medusa_core_utils_1 = require("medusa-core-utils");
var actions;
(function (actions) {
    actions["createVariant"] = "createVariant";
    actions["createInventoryItem"] = "createInventoryItem";
    actions["attachInventoryItem"] = "attachInventoryItem";
})(actions || (actions = {}));
var simpleFlow = {
    next: {
        action: actions.createVariant,
    },
};
var flowWithInventory = {
    next: {
        action: actions.createVariant,
        saveResponse: true,
        next: {
            action: actions.createInventoryItem,
            saveResponse: true,
            next: {
                action: actions.attachInventoryItem,
                noCompensation: true,
            },
        },
    },
};
var createSimpleVariantStrategy = new transaction_1.TransactionOrchestrator("create-variant", simpleFlow);
var createVariantStrategyWithInventory = new transaction_1.TransactionOrchestrator("create-variant-with-inventory", flowWithInventory);
var createVariantTransaction = function (dependencies, productId, input) { return __awaiter(void 0, void 0, void 0, function () {
    function createVariant(variantInput) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productVariantServiceTx.create(productId, variantInput)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function removeVariant(variant) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!variant) return [3 /*break*/, 2];
                        return [4 /*yield*/, productVariantServiceTx.delete(variant.id)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    function createInventoryItem(variant) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!variant.manage_inventory) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, inventoryServiceTx.createInventoryItem({
                                sku: variant.sku,
                                origin_country: variant.origin_country,
                                hs_code: variant.hs_code,
                                mid_code: variant.mid_code,
                                material: variant.material,
                                weight: variant.weight,
                                length: variant.length,
                                height: variant.height,
                                width: variant.width,
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function removeInventoryItem(inventoryItem) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!inventoryItem) return [3 /*break*/, 2];
                        return [4 /*yield*/, inventoryServiceTx.deleteInventoryItem(inventoryItem.id)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    function attachInventoryItem(variant, inventoryItem) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!variant.manage_inventory) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, productVariantInventoryServiceTx.attachInventoryItem(variant.id, inventoryItem.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function transactionHandler(actionId, type, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var command;
            var _a, _b, _c, _d;
            var _this = this;
            return __generator(this, function (_e) {
                command = (_a = {},
                    _a[actions.createVariant] = (_b = {},
                        _b[transaction_1.TransactionHandlerType.INVOKE] = function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, createVariant(data)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); },
                        _b[transaction_1.TransactionHandlerType.COMPENSATE] = function (data, _a) {
                            var invoke = _a.invoke;
                            return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, removeVariant(invoke[actions.createVariant])];
                                        case 1:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        },
                        _b),
                    _a[actions.createInventoryItem] = (_c = {},
                        _c[transaction_1.TransactionHandlerType.INVOKE] = function (data, _a) {
                            var invoke = _a.invoke;
                            return __awaiter(_this, void 0, void 0, function () {
                                var _b, _c, variant;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            _b = invoke, _c = actions.createVariant, variant = _b[_c];
                                            return [4 /*yield*/, createInventoryItem(variant)];
                                        case 1: return [2 /*return*/, _d.sent()];
                                    }
                                });
                            });
                        },
                        _c[transaction_1.TransactionHandlerType.COMPENSATE] = function (data, _a) {
                            var invoke = _a.invoke;
                            return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, removeInventoryItem(invoke[actions.createInventoryItem])];
                                        case 1:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        },
                        _c),
                    _a[actions.attachInventoryItem] = (_d = {},
                        _d[transaction_1.TransactionHandlerType.INVOKE] = function (data, _a) {
                            var invoke = _a.invoke;
                            return __awaiter(_this, void 0, void 0, function () {
                                var _b, _c, variant, _d, inventoryItem;
                                return __generator(this, function (_e) {
                                    switch (_e.label) {
                                        case 0:
                                            _b = invoke, _c = actions.createVariant, variant = _b[_c], _d = actions.createInventoryItem, inventoryItem = _b[_d];
                                            return [4 /*yield*/, attachInventoryItem(variant, inventoryItem)];
                                        case 1: return [2 /*return*/, _e.sent()];
                                    }
                                });
                            });
                        },
                        _d),
                    _a);
                return [2 /*return*/, command[actionId][type](payload.data, payload.context)];
            });
        });
    }
    var manager, productVariantService, inventoryService, productVariantInventoryService, inventoryServiceTx, productVariantInventoryServiceTx, productVariantServiceTx, strategy, transaction;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                manager = dependencies.manager, productVariantService = dependencies.productVariantService, inventoryService = dependencies.inventoryService, productVariantInventoryService = dependencies.productVariantInventoryService;
                inventoryServiceTx = inventoryService === null || inventoryService === void 0 ? void 0 : inventoryService.withTransaction(manager);
                productVariantInventoryServiceTx = productVariantInventoryService.withTransaction(manager);
                productVariantServiceTx = productVariantService.withTransaction(manager);
                strategy = inventoryService
                    ? createVariantStrategyWithInventory
                    : createSimpleVariantStrategy;
                return [4 /*yield*/, strategy.beginTransaction((0, ulid_1.ulid)(), transactionHandler, input)];
            case 1:
                transaction = _a.sent();
                return [4 /*yield*/, strategy.resume(transaction)];
            case 2:
                _a.sent();
                if (transaction.getState() !== transaction_1.TransactionState.DONE) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, transaction
                        .getErrors()
                        .map(function (err) { var _a; return (_a = err.error) === null || _a === void 0 ? void 0 : _a.message; })
                        .join("\n"));
                }
                return [2 /*return*/, transaction];
        }
    });
}); };
exports.createVariantTransaction = createVariantTransaction;
var revertVariantTransaction = function (dependencies, transaction) { return __awaiter(void 0, void 0, void 0, function () {
    var inventoryService, strategy;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                inventoryService = dependencies.inventoryService;
                strategy = inventoryService
                    ? createVariantStrategyWithInventory
                    : createSimpleVariantStrategy;
                return [4 /*yield*/, strategy.cancelTransaction(transaction)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.revertVariantTransaction = revertVariantTransaction;
//# sourceMappingURL=create-product-variant.js.map