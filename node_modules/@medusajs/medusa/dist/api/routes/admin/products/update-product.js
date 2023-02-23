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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostProductsProductReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var product_1 = require("../../../../types/product");
var class_transformer_1 = require("class-transformer");
var sales_channels_1 = __importDefault(require("../../../../loaders/feature-flags/sales-channels"));
var models_1 = require("../../../../models");
var product_variant_1 = require("../../../../types/product-variant");
var feature_flag_decorators_1 = require("../../../../utils/feature-flag-decorators");
var validator_1 = require("../../../../utils/validator");
var medusa_core_utils_1 = require("medusa-core-utils");
var create_product_variant_1 = require("./transaction/create-product-variant");
/**
 * @oas [post] /products/{id}
 * operationId: "PostProductsProduct"
 * summary: "Update a Product"
 * description: "Updates a Product"
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Product.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductsProductReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.products.update(product_id, {
 *         title: 'Shirt',
 *         images: []
 *       })
 *       .then(({ product }) => {
 *         console.log(product.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/products/{id}' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "title": "Size"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Product
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminProductsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, validated, logger, productService, pricingService, productVariantService, productVariantInventoryService, inventoryService, manager, rawProduct, _a, product;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostProductsProductReq, req.body)];
            case 1:
                validated = _b.sent();
                logger = req.scope.resolve("logger");
                productService = req.scope.resolve("productService");
                pricingService = req.scope.resolve("pricingService");
                productVariantService = req.scope.resolve("productVariantService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                inventoryService = req.scope.resolve("inventoryService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        var variants, product, _loop_1, _a, _b, variant, e_1_1, allVariantTransactions, transactionDependencies, _loop_2, _c, _d, _e, index, newVariant, e_2_1;
                        var e_1, _f, e_2, _g;
                        return __generator(this, function (_h) {
                            switch (_h.label) {
                                case 0:
                                    variants = validated.variants;
                                    delete validated.variants;
                                    return [4 /*yield*/, productService
                                            .withTransaction(transactionManager)
                                            .update(id, validated)];
                                case 1:
                                    _h.sent();
                                    if (!variants) {
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, productService
                                            .withTransaction(transactionManager)
                                            .retrieve(id, {
                                            relations: ["variants"],
                                        })
                                        // Iterate product variants and update their properties accordingly
                                    ];
                                case 2:
                                    product = _h.sent();
                                    _loop_1 = function (variant) {
                                        var exists;
                                        return __generator(this, function (_j) {
                                            switch (_j.label) {
                                                case 0:
                                                    exists = variants.find(function (v) { return v.id && variant.id === v.id; });
                                                    if (!!exists) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, productVariantService
                                                            .withTransaction(transactionManager)
                                                            .delete(variant.id)];
                                                case 1:
                                                    _j.sent();
                                                    _j.label = 2;
                                                case 2: return [2 /*return*/];
                                            }
                                        });
                                    };
                                    _h.label = 3;
                                case 3:
                                    _h.trys.push([3, 8, 9, 10]);
                                    _a = __values(product.variants), _b = _a.next();
                                    _h.label = 4;
                                case 4:
                                    if (!!_b.done) return [3 /*break*/, 7];
                                    variant = _b.value;
                                    return [5 /*yield**/, _loop_1(variant)];
                                case 5:
                                    _h.sent();
                                    _h.label = 6;
                                case 6:
                                    _b = _a.next();
                                    return [3 /*break*/, 4];
                                case 7: return [3 /*break*/, 10];
                                case 8:
                                    e_1_1 = _h.sent();
                                    e_1 = { error: e_1_1 };
                                    return [3 /*break*/, 10];
                                case 9:
                                    try {
                                        if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                    return [7 /*endfinally*/];
                                case 10:
                                    allVariantTransactions = [];
                                    transactionDependencies = {
                                        manager: transactionManager,
                                        inventoryService: inventoryService,
                                        productVariantInventoryService: productVariantInventoryService,
                                        productVariantService: productVariantService,
                                    };
                                    _loop_2 = function (index, newVariant) {
                                        var variantRank, variant, input, varTransation, e_3;
                                        return __generator(this, function (_k) {
                                            switch (_k.label) {
                                                case 0:
                                                    variantRank = index;
                                                    if (!newVariant.id) return [3 /*break*/, 2];
                                                    variant = product.variants.find(function (v) { return v.id === newVariant.id; });
                                                    if (!variant) {
                                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Variant with id: ".concat(newVariant.id, " is not associated with this product"));
                                                    }
                                                    return [4 /*yield*/, productVariantService
                                                            .withTransaction(transactionManager)
                                                            .update(variant, __assign(__assign({}, newVariant), { variant_rank: variantRank, product_id: variant.product_id }))];
                                                case 1:
                                                    _k.sent();
                                                    return [3 /*break*/, 6];
                                                case 2:
                                                    _k.trys.push([2, 4, , 6]);
                                                    input = __assign(__assign({}, newVariant), { variant_rank: variantRank, options: newVariant.options || [], prices: newVariant.prices || [] });
                                                    return [4 /*yield*/, (0, create_product_variant_1.createVariantTransaction)(transactionDependencies, product.id, input)];
                                                case 3:
                                                    varTransation = _k.sent();
                                                    allVariantTransactions.push(varTransation);
                                                    return [3 /*break*/, 6];
                                                case 4:
                                                    e_3 = _k.sent();
                                                    return [4 /*yield*/, Promise.all(allVariantTransactions.map(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                                                            return __generator(this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0: return [4 /*yield*/, (0, create_product_variant_1.revertVariantTransaction)(transactionDependencies, transaction).catch(function () { return logger.warn("Transaction couldn't be reverted."); })];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); }))];
                                                case 5:
                                                    _k.sent();
                                                    throw e_3;
                                                case 6: return [2 /*return*/];
                                            }
                                        });
                                    };
                                    _h.label = 11;
                                case 11:
                                    _h.trys.push([11, 16, 17, 18]);
                                    _c = __values(variants.entries()), _d = _c.next();
                                    _h.label = 12;
                                case 12:
                                    if (!!_d.done) return [3 /*break*/, 15];
                                    _e = __read(_d.value, 2), index = _e[0], newVariant = _e[1];
                                    return [5 /*yield**/, _loop_2(index, newVariant)];
                                case 13:
                                    _h.sent();
                                    _h.label = 14;
                                case 14:
                                    _d = _c.next();
                                    return [3 /*break*/, 12];
                                case 15: return [3 /*break*/, 18];
                                case 16:
                                    e_2_1 = _h.sent();
                                    e_2 = { error: e_2_1 };
                                    return [3 /*break*/, 18];
                                case 17:
                                    try {
                                        if (_d && !_d.done && (_g = _c.return)) _g.call(_c);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                    return [7 /*endfinally*/];
                                case 18: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _b.sent();
                return [4 /*yield*/, productService.retrieve(id, {
                        select: _1.defaultAdminProductFields,
                        relations: _1.defaultAdminProductRelations,
                    })];
            case 3:
                rawProduct = _b.sent();
                return [4 /*yield*/, pricingService.setProductPrices([rawProduct])];
            case 4:
                _a = __read.apply(void 0, [_b.sent(), 1]), product = _a[0];
                res.json({ product: product });
                return [2 /*return*/];
        }
    });
}); });
var ProductVariantOptionReq = /** @class */ (function () {
    function ProductVariantOptionReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProductVariantOptionReq.prototype, "value", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProductVariantOptionReq.prototype, "option_id", void 0);
    return ProductVariantOptionReq;
}());
var ProductVariantReq = /** @class */ (function () {
    function ProductVariantReq() {
        this.options = [];
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "sku", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "ean", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "upc", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "barcode", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "hs_code", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ProductVariantReq.prototype, "inventory_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], ProductVariantReq.prototype, "allow_backorder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], ProductVariantReq.prototype, "manage_inventory", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ProductVariantReq.prototype, "weight", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ProductVariantReq.prototype, "length", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ProductVariantReq.prototype, "height", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ProductVariantReq.prototype, "width", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "origin_country", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "mid_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "material", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], ProductVariantReq.prototype, "metadata", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return product_variant_1.ProductVariantPricesUpdateReq; }),
        __metadata("design:type", Array)
    ], ProductVariantReq.prototype, "prices", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return ProductVariantOptionReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], ProductVariantReq.prototype, "options", void 0);
    return ProductVariantReq;
}());
/**
 * @schema AdminPostProductsProductReq
 * type: object
 * properties:
 *   title:
 *     description: "The title of the Product"
 *     type: string
 *   subtitle:
 *     description: "The subtitle of the Product"
 *     type: string
 *   description:
 *     description: "A description of the Product."
 *     type: string
 *   discountable:
 *     description: A flag to indicate if discounts can be applied to the LineItems generated from this Product
 *     type: boolean
 *   images:
 *     description: Images of the Product.
 *     type: array
 *     items:
 *       type: string
 *   thumbnail:
 *     description: The thumbnail to use for the Product.
 *     type: string
 *   handle:
 *     description: A unique handle to identify the Product by.
 *     type: string
 *   status:
 *     description: The status of the product.
 *     type: string
 *     enum: [draft, proposed, published, rejected]
 *   type:
 *     description: The Product Type to associate the Product with.
 *     type: object
 *     required:
 *       - value
 *     properties:
 *       id:
 *         description: The ID of the Product Type.
 *         type: string
 *       value:
 *         description: The value of the Product Type.
 *         type: string
 *   collection_id:
 *     description: The ID of the Collection the Product should belong to.
 *     type: string
 *   tags:
 *     description: Tags to associate the Product with.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - value
 *       properties:
 *         id:
 *           description: The ID of an existing Tag.
 *           type: string
 *         value:
 *           description: The value of the Tag, these will be upserted.
 *           type: string
 *   sales_channels:
 *     description: "[EXPERIMENTAL] Sales channels to associate the Product with."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The ID of an existing Sales channel.
 *           type: string
 *   categories:
 *     description: "Categories to add the Product to."
 *     type: array
 *     items:
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The ID of a Product Category.
 *           type: string
 *   variants:
 *     description: A list of Product Variants to create with the Product.
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         id:
 *           description: The ID of the Product Variant.
 *           type: string
 *         title:
 *           description: The title to identify the Product Variant by.
 *           type: string
 *         sku:
 *           description: The unique SKU for the Product Variant.
 *           type: string
 *         ean:
 *           description: The EAN number of the item.
 *           type: string
 *         upc:
 *           description: The UPC number of the item.
 *           type: string
 *         barcode:
 *           description: A generic GTIN field for the Product Variant.
 *           type: string
 *         hs_code:
 *           description: The Harmonized System code for the Product Variant.
 *           type: string
 *         inventory_quantity:
 *           description: The amount of stock kept for the Product Variant.
 *           type: integer
 *         allow_backorder:
 *           description: Whether the Product Variant can be purchased when out of stock.
 *           type: boolean
 *         manage_inventory:
 *           description: Whether Medusa should keep track of the inventory for this Product Variant.
 *           type: boolean
 *         weight:
 *           description: The wieght of the Product Variant.
 *           type: number
 *         length:
 *           description: The length of the Product Variant.
 *           type: number
 *         height:
 *           description: The height of the Product Variant.
 *           type: number
 *         width:
 *           description: The width of the Product Variant.
 *           type: number
 *         origin_country:
 *           description: The country of origin of the Product Variant.
 *           type: string
 *         mid_code:
 *           description: The Manufacturer Identification code for the Product Variant.
 *           type: string
 *         material:
 *           description: The material composition of the Product Variant.
 *           type: string
 *         metadata:
 *           description: An optional set of key-value pairs with additional information.
 *           type: object
 *         prices:
 *           type: array
 *           items:
 *             type: object
 *             required:
 *               - amount
 *             properties:
 *               id:
 *                 description: The ID of the Price.
 *                 type: string
 *               region_id:
 *                 description: The ID of the Region for which the price is used. Only required if currency_code is not provided.
 *                 type: string
 *               currency_code:
 *                 description: The 3 character ISO currency code for which the price will be used. Only required if region_id is not provided.
 *                 type: string
 *                 externalDocs:
 *                   url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *                   description: See a list of codes.
 *               amount:
 *                 description: The amount to charge for the Product Variant.
 *                 type: integer
 *               min_quantity:
 *                 description: The minimum quantity for which the price will be used.
 *                 type: integer
 *               max_quantity:
 *                 description: The maximum quantity for which the price will be used.
 *                 type: integer
 *         options:
 *           type: array
 *           items:
 *             type: object
 *             required:
 *               - option_id
 *               - value
 *             properties:
 *               option_id:
 *                 description: The ID of the Option.
 *                 type: string
 *               value:
 *                 description: The value to give for the Product Option at the same index in the Product's `options` field.
 *                 type: string
 *   weight:
 *     description: The wieght of the Product.
 *     type: number
 *   length:
 *     description: The length of the Product.
 *     type: number
 *   height:
 *     description: The height of the Product.
 *     type: number
 *   width:
 *     description: The width of the Product.
 *     type: number
 *   origin_country:
 *     description: The country of origin of the Product.
 *     type: string
 *   mid_code:
 *     description: The Manufacturer Identification code for the Product.
 *     type: string
 *   material:
 *     description: The material composition of the Product.
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 */
var AdminPostProductsProductReq = /** @class */ (function () {
    function AdminPostProductsProductReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "subtitle", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostProductsProductReq.prototype, "discountable", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminPostProductsProductReq.prototype, "images", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "thumbnail", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "handle", void 0);
    __decorate([
        (0, class_validator_1.IsEnum)(models_1.ProductStatus),
        (0, class_validator_1.NotEquals)(null),
        (0, class_validator_1.ValidateIf)(function (object, value) { return value !== undefined; }),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return product_1.ProductTypeReq; }),
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", product_1.ProductTypeReq)
    ], AdminPostProductsProductReq.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "collection_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return product_1.ProductTagReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostProductsProductReq.prototype, "tags", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(sales_channels_1.default.key, [
            (0, class_validator_1.IsOptional)(),
            (0, class_transformer_1.Type)(function () { return product_1.ProductSalesChannelReq; }),
            (0, class_validator_1.ValidateNested)({ each: true }),
            (0, class_validator_1.IsArray)(),
        ]),
        __metadata("design:type", Object)
    ], AdminPostProductsProductReq.prototype, "sales_channels", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return product_1.ProductProductCategoryReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostProductsProductReq.prototype, "categories", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return ProductVariantReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostProductsProductReq.prototype, "variants", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductReq.prototype, "weight", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductReq.prototype, "length", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductReq.prototype, "height", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductReq.prototype, "width", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "hs_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "origin_country", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "mid_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "material", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostProductsProductReq.prototype, "metadata", void 0);
    return AdminPostProductsProductReq;
}());
exports.AdminPostProductsProductReq = AdminPostProductsProductReq;
//# sourceMappingURL=update-product.js.map