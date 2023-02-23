"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var product_variant_inventory_item_1 = require("../models/product-variant-inventory-item");
var ProductVariantInventoryService = /** @class */ (function (_super) {
    __extends(ProductVariantInventoryService, _super);
    function ProductVariantInventoryService(_a) {
        var manager = _a.manager, stockLocationService = _a.stockLocationService, salesChannelLocationService = _a.salesChannelLocationService, salesChannelInventoryService = _a.salesChannelInventoryService, productVariantService = _a.productVariantService, inventoryService = _a.inventoryService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.manager_ = manager;
        _this.salesChannelLocationService_ = salesChannelLocationService;
        _this.salesChannelInventoryService_ = salesChannelInventoryService;
        _this.stockLocationService_ = stockLocationService;
        _this.productVariantService_ = productVariantService;
        _this.inventoryService_ = inventoryService;
        return _this;
    }
    /**
     * confirms if requested inventory is available
     * @param variantId id of the variant to confirm inventory for
     * @param quantity quantity of inventory to confirm is available
     * @param context optionally include a sales channel if applicable
     * @returns boolean indicating if inventory is available
     */
    ProductVariantInventoryService.prototype.confirmInventory = function (variantId, quantity, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, productVariant, variantInventory, locations, stockLocations, hasInventory;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!variantId) {
                            return [2 /*return*/, true];
                        }
                        manager = this.transactionManager_ || this.manager_;
                        return [4 /*yield*/, this.productVariantService_
                                .withTransaction(manager)
                                .retrieve(variantId, {
                                select: [
                                    "id",
                                    "allow_backorder",
                                    "manage_inventory",
                                    "inventory_quantity",
                                ],
                            })
                            // If the variant allows backorders or if inventory isn't managed we
                            // don't need to check inventory
                        ];
                    case 1:
                        productVariant = _a.sent();
                        // If the variant allows backorders or if inventory isn't managed we
                        // don't need to check inventory
                        if (productVariant.allow_backorder || !productVariant.manage_inventory) {
                            return [2 /*return*/, true];
                        }
                        if (!this.inventoryService_) {
                            return [2 /*return*/, productVariant.inventory_quantity >= quantity];
                        }
                        return [4 /*yield*/, this.listByVariant(variantId)
                            // If there are no inventory items attached to the variant we default
                            // to true
                        ];
                    case 2:
                        variantInventory = _a.sent();
                        // If there are no inventory items attached to the variant we default
                        // to true
                        if (variantInventory.length === 0) {
                            return [2 /*return*/, true];
                        }
                        locations = [];
                        if (!context.salesChannelId) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.salesChannelLocationService_.listLocations(context.salesChannelId)];
                    case 3:
                        locations = _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.stockLocationService_.list({}, { select: ["id"] })];
                    case 5:
                        stockLocations = _a.sent();
                        locations = stockLocations.map(function (l) { return l.id; });
                        _a.label = 6;
                    case 6: return [4 /*yield*/, Promise.all(variantInventory.map(function (inventoryPart) { return __awaiter(_this, void 0, void 0, function () {
                            var itemQuantity;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        itemQuantity = inventoryPart.required_quantity * quantity;
                                        return [4 /*yield*/, this.inventoryService_
                                                .withTransaction(manager)
                                                .confirmInventory(inventoryPart.inventory_item_id, locations, itemQuantity)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); }))];
                    case 7:
                        hasInventory = _a.sent();
                        return [2 /*return*/, hasInventory.every(Boolean)];
                }
            });
        });
    };
    /**
     * Retrieves a product variant inventory item by its inventory item ID and variant ID.
     *
     * @param inventoryItemId - The ID of the inventory item to retrieve.
     * @param variantId - The ID of the variant to retrieve.
     * @returns A promise that resolves with the product variant inventory item.
     */
    ProductVariantInventoryService.prototype.retrieve = function (inventoryItemId, variantId) {
        return __awaiter(this, void 0, void 0, function () {
            var manager, variantInventoryRepo, variantInventory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.transactionManager_ || this.manager_;
                        variantInventoryRepo = manager.getRepository(product_variant_inventory_item_1.ProductVariantInventoryItem);
                        return [4 /*yield*/, variantInventoryRepo.findOne({
                                where: { inventory_item_id: inventoryItemId, variant_id: variantId },
                            })];
                    case 1:
                        variantInventory = _a.sent();
                        if (!variantInventory) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Inventory item with id ".concat(inventoryItemId, " not found"));
                        }
                        return [2 /*return*/, variantInventory];
                }
            });
        });
    };
    /**
     * list registered inventory items
     * @param itemIds list inventory item ids
     * @returns list of inventory items
     */
    ProductVariantInventoryService.prototype.listByItem = function (itemIds) {
        return __awaiter(this, void 0, void 0, function () {
            var manager, variantInventoryRepo, variantInventory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.transactionManager_ || this.manager_;
                        variantInventoryRepo = manager.getRepository(product_variant_inventory_item_1.ProductVariantInventoryItem);
                        return [4 /*yield*/, variantInventoryRepo.find({
                                where: { inventory_item_id: (0, typeorm_1.In)(itemIds) },
                            })];
                    case 1:
                        variantInventory = _a.sent();
                        return [2 /*return*/, variantInventory];
                }
            });
        });
    };
    /**
     * List inventory items for a specific variant
     * @param variantId variant id
     * @returns variant inventory items for the variant id
     */
    ProductVariantInventoryService.prototype.listByVariant = function (variantId) {
        return __awaiter(this, void 0, void 0, function () {
            var manager, variantInventoryRepo, ids, variantInventory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.transactionManager_ || this.manager_;
                        variantInventoryRepo = manager.getRepository(product_variant_inventory_item_1.ProductVariantInventoryItem);
                        ids = Array.isArray(variantId) ? variantId : [variantId];
                        return [4 /*yield*/, variantInventoryRepo.find({
                                where: { variant_id: (0, typeorm_1.In)(ids) },
                            })];
                    case 1:
                        variantInventory = _a.sent();
                        return [2 /*return*/, variantInventory];
                }
            });
        });
    };
    /**
     * lists variant by inventory item id
     * @param itemId item id
     * @returns a list of product variants that are associated with the item id
     */
    ProductVariantInventoryService.prototype.listVariantsByItem = function (itemId) {
        return __awaiter(this, void 0, void 0, function () {
            var variantInventory, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this.listByItem([itemId])];
                    case 1:
                        variantInventory = _a.sent();
                        return [4 /*yield*/, this.productVariantService_.list({
                                id: variantInventory.map(function (i) { return i.variant_id; }),
                            })];
                    case 2:
                        items = _a.sent();
                        return [2 /*return*/, items];
                }
            });
        });
    };
    /**
     * lists inventory items for a given variant
     * @param variantId variant id
     * @returns lidt of inventory items for the variant
     */
    ProductVariantInventoryService.prototype.listInventoryItemsByVariant = function (variantId) {
        return __awaiter(this, void 0, void 0, function () {
            var variantInventory, _a, items;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this.listByVariant(variantId)];
                    case 1:
                        variantInventory = _b.sent();
                        return [4 /*yield*/, this.inventoryService_.listInventoryItems({
                                id: variantInventory.map(function (i) { return i.inventory_item_id; }),
                            })];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 1]), items = _a[0];
                        return [2 /*return*/, items];
                }
            });
        });
    };
    /**
     * Attach a variant to an inventory item
     * @param variantId variant id
     * @param inventoryItemId inventory item id
     * @param requiredQuantity quantity of variant to attach
     * @returns the variant inventory item
     */
    ProductVariantInventoryService.prototype.attachInventoryItem = function (variantId, inventoryItemId, requiredQuantity) {
        return __awaiter(this, void 0, void 0, function () {
            var manager, variantInventoryRepo, existing, quantityToStore, variantInventory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.transactionManager_ || this.manager_;
                        // Verify that variant exists
                        return [4 /*yield*/, this.productVariantService_
                                .withTransaction(manager)
                                .retrieve(variantId, {
                                select: ["id"],
                            })
                            // Verify that item exists
                        ];
                    case 1:
                        // Verify that variant exists
                        _a.sent();
                        // Verify that item exists
                        return [4 /*yield*/, this.inventoryService_
                                .withTransaction(manager)
                                .retrieveInventoryItem(inventoryItemId, {
                                select: ["id"],
                            })];
                    case 2:
                        // Verify that item exists
                        _a.sent();
                        variantInventoryRepo = manager.getRepository(product_variant_inventory_item_1.ProductVariantInventoryItem);
                        return [4 /*yield*/, variantInventoryRepo.findOne({
                                where: {
                                    variant_id: variantId,
                                    inventory_item_id: inventoryItemId,
                                },
                            })];
                    case 3:
                        existing = _a.sent();
                        if (existing) {
                            return [2 /*return*/, existing];
                        }
                        quantityToStore = 1;
                        if (typeof requiredQuantity !== "undefined") {
                            if (requiredQuantity < 1) {
                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Quantity must be greater than 0");
                            }
                            else {
                                quantityToStore = requiredQuantity;
                            }
                        }
                        variantInventory = variantInventoryRepo.create({
                            variant_id: variantId,
                            inventory_item_id: inventoryItemId,
                            required_quantity: quantityToStore,
                        });
                        return [4 /*yield*/, variantInventoryRepo.save(variantInventory)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Remove a variant from an inventory item
     * @param variantId variant id or undefined if all the variants will be affected
     * @param inventoryItemId inventory item id
     */
    ProductVariantInventoryService.prototype.detachInventoryItem = function (inventoryItemId, variantId) {
        return __awaiter(this, void 0, void 0, function () {
            var manager, variantInventoryRepo, where, varInvItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.transactionManager_ || this.manager_;
                        variantInventoryRepo = manager.getRepository(product_variant_inventory_item_1.ProductVariantInventoryItem);
                        where = {
                            inventory_item_id: inventoryItemId,
                        };
                        if (variantId) {
                            where.variant_id = variantId;
                        }
                        return [4 /*yield*/, variantInventoryRepo.find({
                                where: where,
                            })];
                    case 1:
                        varInvItems = _a.sent();
                        if (!varInvItems.length) return [3 /*break*/, 3];
                        return [4 /*yield*/, variantInventoryRepo.remove(varInvItems)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reserves a quantity of a variant
     * @param variantId variant id
     * @param quantity quantity to reserve
     * @param context optional parameters
     */
    ProductVariantInventoryService.prototype.reserveQuantity = function (variantId, quantity, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, toReserve, variantInventory, locationId, locations;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.transactionManager_ || this.manager_;
                        if (!this.inventoryService_) {
                            return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                    var variantServiceTx, variant;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                variantServiceTx = this.productVariantService_.withTransaction(manager);
                                                return [4 /*yield*/, variantServiceTx.retrieve(variantId, {
                                                        select: ["id", "inventory_quantity"],
                                                    })];
                                            case 1:
                                                variant = _a.sent();
                                                return [4 /*yield*/, variantServiceTx.update(variant.id, {
                                                        inventory_quantity: variant.inventory_quantity - quantity,
                                                    })];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        }
                        toReserve = {
                            type: "order",
                            line_item_id: context.lineItemId,
                        };
                        return [4 /*yield*/, this.listByVariant(variantId)];
                    case 1:
                        variantInventory = _a.sent();
                        if (variantInventory.length === 0) {
                            return [2 /*return*/];
                        }
                        locationId = context.locationId;
                        if (!(!(0, medusa_core_utils_1.isDefined)(locationId) && context.salesChannelId)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.salesChannelLocationService_
                                .withTransaction(manager)
                                .listLocations(context.salesChannelId)];
                    case 2:
                        locations = _a.sent();
                        if (!locations.length) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Must provide location_id or sales_channel_id to a Sales Channel that has associated Stock Locations");
                        }
                        locationId = locations[0];
                        _a.label = 3;
                    case 3: return [4 /*yield*/, Promise.all(variantInventory.map(function (inventoryPart) { return __awaiter(_this, void 0, void 0, function () {
                            var itemQuantity;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        itemQuantity = inventoryPart.required_quantity * quantity;
                                        return [4 /*yield*/, this.inventoryService_
                                                .withTransaction(manager)
                                                .createReservationItem(__assign(__assign({}, toReserve), { location_id: locationId, inventory_item_id: inventoryPart.inventory_item_id, quantity: itemQuantity }))];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); }))];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adjusts the quantity of reservations for a line item by a given amount.
     * @param {string} lineItemId - The ID of the line item
     * @param {string} variantId - The ID of the variant
     * @param {string} locationId - The ID of the location to prefer adjusting quantities at
     * @param {number} quantity - The amount to adjust the quantity by
     */
    ProductVariantInventoryService.prototype.adjustReservationsQuantityByLineItem = function (lineItemId, variantId, locationId, quantity) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var manager, _b, reservations, reservationCount, reservation, productVariantInventory, reservationQtyUpdate;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                    var variantServiceTx, variant;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                variantServiceTx = this.productVariantService_.withTransaction(manager);
                                                return [4 /*yield*/, variantServiceTx.retrieve(variantId, {
                                                        select: ["id", "inventory_quantity", "manage_inventory"],
                                                    })];
                                            case 1:
                                                variant = _a.sent();
                                                if (!variant.manage_inventory) {
                                                    return [2 /*return*/];
                                                }
                                                return [4 /*yield*/, variantServiceTx.update(variantId, {
                                                        inventory_quantity: variant.inventory_quantity - quantity,
                                                    })];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        }
                        manager = this.transactionManager_ || this.manager_;
                        return [4 /*yield*/, this.inventoryService_
                                .withTransaction(manager)
                                .listReservationItems({
                                line_item_id: lineItemId,
                            }, {
                                order: { created_at: "DESC" },
                            })];
                    case 1:
                        _b = __read.apply(void 0, [_c.sent(), 2]), reservations = _b[0], reservationCount = _b[1];
                        if (!reservationCount) return [3 /*break*/, 6];
                        reservation = reservations[0];
                        reservation =
                            (_a = reservations.find(function (r) { return r.location_id === locationId && r.quantity >= quantity; })) !== null && _a !== void 0 ? _a : reservation;
                        return [4 /*yield*/, this.retrieve(reservation.inventory_item_id, variantId)];
                    case 2:
                        productVariantInventory = _c.sent();
                        reservationQtyUpdate = reservation.quantity -
                            quantity * productVariantInventory.required_quantity;
                        if (!(reservationQtyUpdate === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.inventoryService_
                                .withTransaction(manager)
                                .deleteReservationItem(reservation.id)];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.inventoryService_
                            .withTransaction(manager)
                            .updateReservationItem(reservation.id, {
                            quantity: reservationQtyUpdate,
                        })];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Validate stock at a location for fulfillment items
     * @param items Fulfillment Line items to validate quantities for
     * @param locationId Location to validate stock at
     * @returns nothing if successful, throws error if not
     */
    ProductVariantInventoryService.prototype.validateInventoryAtLocation = function (items, locationId) {
        return __awaiter(this, void 0, void 0, function () {
            var itemsToValidate, itemsToValidate_1, itemsToValidate_1_1, item, pvInventoryItems, _a, inventoryLevels, pviMap, inventoryLevels_1, inventoryLevels_1_1, inventoryLevel, pvInventoryItem, e_1_1;
            var e_1, _b, e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/];
                        }
                        itemsToValidate = items.filter(function (item) { return item.variant_id; });
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        itemsToValidate_1 = __values(itemsToValidate), itemsToValidate_1_1 = itemsToValidate_1.next();
                        _d.label = 2;
                    case 2:
                        if (!!itemsToValidate_1_1.done) return [3 /*break*/, 6];
                        item = itemsToValidate_1_1.value;
                        return [4 /*yield*/, this.listByVariant(item.variant_id)];
                    case 3:
                        pvInventoryItems = _d.sent();
                        return [4 /*yield*/, this.inventoryService_.listInventoryLevels({
                                inventory_item_id: pvInventoryItems.map(function (i) { return i.inventory_item_id; }),
                                location_id: locationId,
                            })];
                    case 4:
                        _a = __read.apply(void 0, [_d.sent(), 1]), inventoryLevels = _a[0];
                        pviMap = new Map(pvInventoryItems.map(function (pvi) { return [pvi.inventory_item_id, pvi]; }));
                        try {
                            for (inventoryLevels_1 = (e_2 = void 0, __values(inventoryLevels)), inventoryLevels_1_1 = inventoryLevels_1.next(); !inventoryLevels_1_1.done; inventoryLevels_1_1 = inventoryLevels_1.next()) {
                                inventoryLevel = inventoryLevels_1_1.value;
                                pvInventoryItem = pviMap[inventoryLevel.inventory_item_id];
                                if (!pvInventoryItem ||
                                    pvInventoryItem.quantity * item.quantity >
                                        inventoryLevel.stocked_quantity) {
                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Insufficient stock for item: ".concat(item.title));
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (inventoryLevels_1_1 && !inventoryLevels_1_1.done && (_c = inventoryLevels_1.return)) _c.call(inventoryLevels_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        _d.label = 5;
                    case 5:
                        itemsToValidate_1_1 = itemsToValidate_1.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (itemsToValidate_1_1 && !itemsToValidate_1_1.done && (_b = itemsToValidate_1.return)) _b.call(itemsToValidate_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * delete a reservation of variant quantity
     * @param lineItemId line item id
     * @param variantId variant id
     * @param quantity quantity to release
     */
    ProductVariantInventoryService.prototype.deleteReservationsByLineItem = function (lineItemId, variantId, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var manager;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                    var productVariantServiceTx, variant;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                productVariantServiceTx = this.productVariantService_.withTransaction(manager);
                                                return [4 /*yield*/, productVariantServiceTx.retrieve(variantId, {
                                                        select: ["id", "inventory_quantity", "manage_inventory"],
                                                    })];
                                            case 1:
                                                variant = _a.sent();
                                                if (!variant.manage_inventory) {
                                                    return [2 /*return*/];
                                                }
                                                return [4 /*yield*/, productVariantServiceTx.update(variantId, {
                                                        inventory_quantity: variant.inventory_quantity + quantity,
                                                    })];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        }
                        manager = this.transactionManager_ || this.manager_;
                        return [4 /*yield*/, this.inventoryService_
                                .withTransaction(manager)
                                .deleteReservationItemsByLineItem(lineItemId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Adjusts inventory of a variant on a location
     * @param variantId variant id
     * @param locationId location id
     * @param quantity quantity to adjust
     */
    ProductVariantInventoryService.prototype.adjustInventory = function (variantId, locationId, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var manager_1, variantInventory;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.inventoryService_) return [3 /*break*/, 1];
                        return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var productVariantServiceTx, variant;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            productVariantServiceTx = this.productVariantService_.withTransaction(manager);
                                            return [4 /*yield*/, productVariantServiceTx.retrieve(variantId, {
                                                    select: ["id", "inventory_quantity", "manage_inventory"],
                                                })];
                                        case 1:
                                            variant = _a.sent();
                                            if (!variant.manage_inventory) {
                                                return [2 /*return*/];
                                            }
                                            return [4 /*yield*/, productVariantServiceTx.update(variantId, {
                                                    inventory_quantity: variant.inventory_quantity + quantity,
                                                })];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        manager_1 = this.transactionManager_ || this.manager_;
                        return [4 /*yield*/, this.listByVariant(variantId)];
                    case 2:
                        variantInventory = _a.sent();
                        if (variantInventory.length === 0) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Promise.all(variantInventory.map(function (inventoryPart) { return __awaiter(_this, void 0, void 0, function () {
                                var itemQuantity;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            itemQuantity = inventoryPart.required_quantity * quantity;
                                            return [4 /*yield*/, this.inventoryService_
                                                    .withTransaction(manager_1)
                                                    .adjustInventory(inventoryPart.inventory_item_id, locationId, itemQuantity)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductVariantInventoryService.prototype.setVariantAvailability = function (variants, salesChannelId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.inventoryService_) {
                            return [2 /*return*/, variants];
                        }
                        return [4 /*yield*/, Promise.all(variants.map(function (variant) { return __awaiter(_this, void 0, void 0, function () {
                                var variantInventory, _a, _b, _c, _d, _e;
                                var _this = this;
                                return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0:
                                            if (!variant.id) {
                                                return [2 /*return*/, variant];
                                            }
                                            if (!salesChannelId) {
                                                delete variant.inventory_quantity;
                                                return [2 /*return*/, variant];
                                            }
                                            return [4 /*yield*/, this.listByVariant(variant.id)
                                                // the inventory quantity of the variant should be equal to the inventory
                                                // item with the smallest stock, adjusted for quantity required to fulfill
                                                // the given variant
                                            ];
                                        case 1:
                                            variantInventory = _f.sent();
                                            // the inventory quantity of the variant should be equal to the inventory
                                            // item with the smallest stock, adjusted for quantity required to fulfill
                                            // the given variant
                                            _a = variant;
                                            _c = (_b = Math.min).apply;
                                            _d = [Math];
                                            _e = [[]];
                                            return [4 /*yield*/, Promise.all(variantInventory.map(function (variantInventory) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, this.salesChannelInventoryService_.retrieveAvailableItemQuantity(salesChannelId, variantInventory.inventory_item_id)];
                                                            case 1: 
                                                            // get the total available quantity for the given sales channel
                                                            // divided by the required quantity to account for how many of the
                                                            // variant we can fulfill at the current time. Take the minimum we
                                                            // can fulfill and set that as quantity
                                                            return [2 /*return*/, (
                                                                // eslint-disable-next-line max-len
                                                                (_a.sent()) / variantInventory.required_quantity)];
                                                        }
                                                    });
                                                }); }))];
                                        case 2:
                                            // the inventory quantity of the variant should be equal to the inventory
                                            // item with the smallest stock, adjusted for quantity required to fulfill
                                            // the given variant
                                            _a.inventory_quantity = _c.apply(_b, _d.concat([__spreadArray.apply(void 0, _e.concat([__read.apply(void 0, [(_f.sent())]), false]))]));
                                            return [2 /*return*/, variant];
                                    }
                                });
                            }); }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductVariantInventoryService.prototype.setProductAvailability = function (products, salesChannelId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(products.map(function (product) { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!product.variants || product.variants.length === 0) {
                                            return [2 /*return*/, product];
                                        }
                                        _a = product;
                                        return [4 /*yield*/, this.setVariantAvailability(product.variants, salesChannelId)];
                                    case 1:
                                        _a.variants = _b.sent();
                                        return [2 /*return*/, product];
                                }
                            });
                        }); }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ProductVariantInventoryService;
}(interfaces_1.TransactionBaseService));
exports.default = ProductVariantInventoryService;
//# sourceMappingURL=product-variant-inventory.js.map