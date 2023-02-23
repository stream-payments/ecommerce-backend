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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
var lodash_1 = require("lodash");
var typeorm_1 = require("typeorm");
var models_1 = require("../models");
var repository_1 = require("../utils/repository");
var ProductRepository = /** @class */ (function (_super) {
    __extends(ProductRepository, _super);
    function ProductRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductRepository.prototype.mergeEntitiesWithRelations = function (entitiesAndRelations) {
        var entitiesAndRelationsById = (0, lodash_1.groupBy)(entitiesAndRelations, "id");
        return (0, lodash_1.map)(entitiesAndRelationsById, function (entityAndRelations) {
            return lodash_1.merge.apply(void 0, __spreadArray([{}], __read(entityAndRelations), false));
        });
    };
    ProductRepository.prototype.queryProducts = function (optionsWithoutRelations, shouldCount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (shouldCount === void 0) { shouldCount = false; }
        return __awaiter(this, void 0, void 0, function () {
            var productAlias, tags, price_lists, sales_channels, categories, include_category_children, discount_condition_id, qb, categoryIds, categoryRepository, categories_2, _loop_1, categories_1, categories_1_1, category, e_1_1, joinedWithPriceLists, entities, count, result;
            var e_1, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        productAlias = "product";
                        tags = (_a = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _a === void 0 ? void 0 : _a.tags;
                        (_b = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _b === void 0 ? true : delete _b.tags;
                        price_lists = (_c = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _c === void 0 ? void 0 : _c.price_list_id;
                        (_d = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _d === void 0 ? true : delete _d.price_list_id;
                        sales_channels = (_e = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _e === void 0 ? void 0 : _e.sales_channel_id;
                        (_f = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _f === void 0 ? true : delete _f.sales_channel_id;
                        categories = (_g = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _g === void 0 ? void 0 : _g.category_id;
                        (_h = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _h === void 0 ? true : delete _h.category_id;
                        include_category_children = (_j = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _j === void 0 ? void 0 : _j.include_category_children;
                        (_k = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _k === void 0 ? true : delete _k.include_category_children;
                        discount_condition_id = (_l = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _l === void 0 ? void 0 : _l.discount_condition_id;
                        (_m = optionsWithoutRelations === null || optionsWithoutRelations === void 0 ? void 0 : optionsWithoutRelations.where) === null || _m === void 0 ? true : delete _m.discount_condition_id;
                        qb = this.createQueryBuilder(productAlias)
                            .select(["".concat(productAlias, ".id")])
                            .skip(optionsWithoutRelations.skip)
                            .take(optionsWithoutRelations.take);
                        if (optionsWithoutRelations.where) {
                            qb.where(optionsWithoutRelations.where);
                        }
                        if (tags) {
                            qb.leftJoin("".concat(productAlias, ".tags"), "tags").andWhere("tags.id IN (:...tag_ids)", {
                                tag_ids: tags.value,
                            });
                        }
                        if (price_lists) {
                            qb.leftJoin("".concat(productAlias, ".variants"), "variants")
                                .leftJoin("variants.prices", "prices")
                                .andWhere("prices.price_list_id IN (:...price_list_ids)", {
                                price_list_ids: price_lists.value,
                            });
                        }
                        if (sales_channels) {
                            qb.innerJoin("".concat(productAlias, ".sales_channels"), "sales_channels", "sales_channels.id IN (:...sales_channels_ids)", { sales_channels_ids: sales_channels.value });
                        }
                        if (!categories) return [3 /*break*/, 10];
                        categoryIds = categories.value;
                        if (!include_category_children) return [3 /*break*/, 9];
                        categoryRepository = this.manager.getTreeRepository(models_1.ProductCategory);
                        return [4 /*yield*/, categoryRepository.find({
                                where: { id: (0, typeorm_1.In)(categoryIds) },
                            })];
                    case 1:
                        categories_2 = _q.sent();
                        categoryIds = [];
                        _loop_1 = function (category) {
                            var categoryChildren, getAllIdsRecursively;
                            return __generator(this, function (_r) {
                                switch (_r.label) {
                                    case 0: return [4 /*yield*/, categoryRepository.findDescendantsTree(category)];
                                    case 1:
                                        categoryChildren = _r.sent();
                                        getAllIdsRecursively = function (productCategory) {
                                            var result = [productCategory.id];
                                            (productCategory.category_children || []).forEach(function (child) {
                                                result = result.concat(getAllIdsRecursively(child));
                                            });
                                            return result;
                                        };
                                        categoryIds = categoryIds.concat(getAllIdsRecursively(categoryChildren));
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _q.label = 2;
                    case 2:
                        _q.trys.push([2, 7, 8, 9]);
                        categories_1 = __values(categories_2), categories_1_1 = categories_1.next();
                        _q.label = 3;
                    case 3:
                        if (!!categories_1_1.done) return [3 /*break*/, 6];
                        category = categories_1_1.value;
                        return [5 /*yield**/, _loop_1(category)];
                    case 4:
                        _q.sent();
                        _q.label = 5;
                    case 5:
                        categories_1_1 = categories_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _q.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (categories_1_1 && !categories_1_1.done && (_p = categories_1.return)) _p.call(categories_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        if (categoryIds.length) {
                            qb.innerJoin("".concat(productAlias, ".categories"), "categories", "categories.id IN (:...categoryIds)", { categoryIds: categoryIds });
                        }
                        _q.label = 10;
                    case 10:
                        if (discount_condition_id) {
                            qb.innerJoin("discount_condition_product", "dc_product", "dc_product.product_id = ".concat(productAlias, ".id AND dc_product.condition_id = :dcId"), { dcId: discount_condition_id });
                        }
                        joinedWithPriceLists = !!price_lists;
                        (0, repository_1.applyOrdering)({
                            repository: this,
                            order: (_o = optionsWithoutRelations.order) !== null && _o !== void 0 ? _o : {},
                            qb: qb,
                            alias: productAlias,
                            shouldJoin: function (relation) { return relation !== "prices" || !joinedWithPriceLists; },
                        });
                        if (optionsWithoutRelations.withDeleted) {
                            qb.withDeleted();
                        }
                        count = 0;
                        if (!shouldCount) return [3 /*break*/, 12];
                        return [4 /*yield*/, qb.getManyAndCount()];
                    case 11:
                        result = _q.sent();
                        entities = result[0];
                        count = result[1];
                        return [3 /*break*/, 14];
                    case 12: return [4 /*yield*/, qb.getMany()];
                    case 13:
                        entities = _q.sent();
                        _q.label = 14;
                    case 14: return [2 /*return*/, [entities, count]];
                }
            });
        });
    };
    ProductRepository.prototype.getGroupedRelations = function (relations) {
        var e_2, _a;
        var groupedRelations = {};
        try {
            for (var relations_1 = __values(relations), relations_1_1 = relations_1.next(); !relations_1_1.done; relations_1_1 = relations_1.next()) {
                var rel = relations_1_1.value;
                var _b = __read(rel.split("."), 1), topLevel = _b[0];
                if (groupedRelations[topLevel]) {
                    groupedRelations[topLevel].push(rel);
                }
                else {
                    groupedRelations[topLevel] = [rel];
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (relations_1_1 && !relations_1_1.done && (_a = relations_1.return)) _a.call(relations_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return groupedRelations;
    };
    ProductRepository.prototype.queryProductsWithIds = function (entityIds, groupedRelations, withDeleted, select, order) {
        if (withDeleted === void 0) { withDeleted = false; }
        if (select === void 0) { select = []; }
        if (order === void 0) { order = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var entitiesIdsWithRelations;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(Object.entries(groupedRelations).map(function (_a) {
                            var _b = __read(_a, 2), toplevel = _b[0], rels = _b[1];
                            return __awaiter(_this, void 0, void 0, function () {
                                var querybuilder, rels_1, rels_1_1, rel, _c, _1, rest;
                                var e_3, _d;
                                return __generator(this, function (_e) {
                                    querybuilder = this.createQueryBuilder("products");
                                    if (select && select.length) {
                                        querybuilder.select(select.map(function (f) { return "products.".concat(f); }));
                                    }
                                    if (toplevel === "variants") {
                                        querybuilder = querybuilder.leftJoinAndSelect("products.".concat(toplevel), toplevel, "variants.deleted_at IS NULL");
                                        if (!Object.keys(order).some(function (key) { return key.startsWith("variants"); })) {
                                            // variant_rank being select false, apply the filter here directly
                                            querybuilder.addOrderBy("".concat(toplevel, ".variant_rank"), "ASC");
                                        }
                                    }
                                    else {
                                        querybuilder = querybuilder.leftJoinAndSelect("products.".concat(toplevel), toplevel);
                                    }
                                    try {
                                        for (rels_1 = __values(rels), rels_1_1 = rels_1.next(); !rels_1_1.done; rels_1_1 = rels_1.next()) {
                                            rel = rels_1_1.value;
                                            _c = __read(rel.split("."), 2), _1 = _c[0], rest = _c[1];
                                            if (!rest) {
                                                continue;
                                            }
                                            // Regex matches all '.' except the rightmost
                                            querybuilder = querybuilder.leftJoinAndSelect(rel.replace(/\.(?=[^.]*\.)/g, "__"), rel.replace(".", "__"));
                                        }
                                    }
                                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                    finally {
                                        try {
                                            if (rels_1_1 && !rels_1_1.done && (_d = rels_1.return)) _d.call(rels_1);
                                        }
                                        finally { if (e_3) throw e_3.error; }
                                    }
                                    if (withDeleted) {
                                        querybuilder = querybuilder
                                            .where("products.id IN (:...entitiesIds)", {
                                            entitiesIds: entityIds,
                                        })
                                            .withDeleted();
                                    }
                                    else {
                                        querybuilder = querybuilder.where("products.deleted_at IS NULL AND products.id IN (:...entitiesIds)", {
                                            entitiesIds: entityIds,
                                        });
                                    }
                                    return [2 /*return*/, querybuilder.getMany()];
                                });
                            });
                        })).then(lodash_1.flatten)];
                    case 1:
                        entitiesIdsWithRelations = _a.sent();
                        return [2 /*return*/, entitiesIdsWithRelations];
                }
            });
        });
    };
    ProductRepository.prototype.findWithRelationsAndCount = function (relations, idsOrOptionsWithoutRelations) {
        var _a;
        if (relations === void 0) { relations = []; }
        if (idsOrOptionsWithoutRelations === void 0) { idsOrOptionsWithoutRelations = { where: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var count, entities, result, entitiesIds, options, toReturn, groupedRelations, entitiesIdsWithRelations, entitiesAndRelations, entitiesToReturn;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Array.isArray(idsOrOptionsWithoutRelations)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findByIds(idsOrOptionsWithoutRelations, {
                                withDeleted: (_a = idsOrOptionsWithoutRelations.withDeleted) !== null && _a !== void 0 ? _a : false,
                            })];
                    case 1:
                        entities = _b.sent();
                        count = entities.length;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.queryProducts(idsOrOptionsWithoutRelations, true)];
                    case 3:
                        result = _b.sent();
                        entities = result[0];
                        count = result[1];
                        _b.label = 4;
                    case 4:
                        entitiesIds = entities.map(function (_a) {
                            var id = _a.id;
                            return id;
                        });
                        if (entitiesIds.length === 0) {
                            // no need to continue
                            return [2 /*return*/, [[], count]];
                        }
                        if (!(relations.length === 0)) return [3 /*break*/, 6];
                        options = __assign({}, idsOrOptionsWithoutRelations);
                        // Since we are finding by the ids that have been retrieved above and those ids are already
                        // applying skip/take. Remove those options to avoid getting no results
                        delete options.skip;
                        delete options.take;
                        return [4 /*yield*/, this.findByIds(entitiesIds, options)];
                    case 5:
                        toReturn = _b.sent();
                        return [2 /*return*/, [toReturn, toReturn.length]];
                    case 6:
                        groupedRelations = this.getGroupedRelations(relations);
                        return [4 /*yield*/, this.queryProductsWithIds(entitiesIds, groupedRelations, idsOrOptionsWithoutRelations.withDeleted, idsOrOptionsWithoutRelations.select, idsOrOptionsWithoutRelations.order)];
                    case 7:
                        entitiesIdsWithRelations = _b.sent();
                        entitiesAndRelations = (0, lodash_1.groupBy)(entitiesIdsWithRelations, "id");
                        entitiesToReturn = (0, lodash_1.map)(entitiesIds, function (id) {
                            return lodash_1.merge.apply(void 0, __spreadArray([{}], __read(entitiesAndRelations[id]), false));
                        });
                        return [2 /*return*/, [entitiesToReturn, count]];
                }
            });
        });
    };
    ProductRepository.prototype.findWithRelations = function (relations, idsOrOptionsWithoutRelations, withDeleted) {
        if (relations === void 0) { relations = []; }
        if (idsOrOptionsWithoutRelations === void 0) { idsOrOptionsWithoutRelations = {
            where: {},
        }; }
        if (withDeleted === void 0) { withDeleted = false; }
        return __awaiter(this, void 0, void 0, function () {
            var entities, result, entitiesIds, groupedRelations, entitiesIdsWithRelations, entitiesAndRelations, entitiesToReturn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Array.isArray(idsOrOptionsWithoutRelations)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findByIds(idsOrOptionsWithoutRelations, {
                                withDeleted: withDeleted,
                            })];
                    case 1:
                        entities = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.queryProducts(idsOrOptionsWithoutRelations, false)];
                    case 3:
                        result = _a.sent();
                        entities = result[0];
                        _a.label = 4;
                    case 4:
                        entitiesIds = entities.map(function (_a) {
                            var id = _a.id;
                            return id;
                        });
                        if (entitiesIds.length === 0) {
                            // no need to continue
                            return [2 /*return*/, []];
                        }
                        if (!(relations.length === 0 &&
                            !Array.isArray(idsOrOptionsWithoutRelations))) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.findByIds(entitiesIds, idsOrOptionsWithoutRelations)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6:
                        groupedRelations = this.getGroupedRelations(relations);
                        return [4 /*yield*/, this.queryProductsWithIds(entitiesIds, groupedRelations, withDeleted)];
                    case 7:
                        entitiesIdsWithRelations = _a.sent();
                        entitiesAndRelations = entitiesIdsWithRelations.concat(entities);
                        entitiesToReturn = this.mergeEntitiesWithRelations(entitiesAndRelations);
                        return [2 /*return*/, entitiesToReturn];
                }
            });
        });
    };
    ProductRepository.prototype.findOneWithRelations = function (relations, optionsWithoutRelations) {
        if (relations === void 0) { relations = []; }
        if (optionsWithoutRelations === void 0) { optionsWithoutRelations = { where: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Limit 1
                        optionsWithoutRelations.take = 1;
                        return [4 /*yield*/, this.findWithRelations(relations, optionsWithoutRelations)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result[0]];
                }
            });
        });
    };
    ProductRepository.prototype.bulkAddToCollection = function (productIds, collectionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .update(models_1.Product)
                            .set({ collection_id: collectionId })
                            .where({ id: (0, typeorm_1.In)(productIds) })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.findByIds(productIds)];
                }
            });
        });
    };
    ProductRepository.prototype.bulkRemoveFromCollection = function (productIds, collectionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .update(models_1.Product)
                            .set({ collection_id: null })
                            .where({ id: (0, typeorm_1.In)(productIds), collection_id: collectionId })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.findByIds(productIds)];
                }
            });
        });
    };
    ProductRepository.prototype.getFreeTextSearchResultsAndCount = function (q, options, relations) {
        var _a;
        if (options === void 0) { options = { where: {} }; }
        if (relations === void 0) { relations = []; }
        return __awaiter(this, void 0, void 0, function () {
            var productAlias, pricesAlias, variantsAlias, collectionAlias, tagsAlias, tags, price_lists, sales_channels, discount_condition_id, cleanedOptions, qb, variantPricesAlias, joinedWithTags, joinedWithPriceLists, _b, results, count, orderedResultsSet, products, productsMap, orderedProducts;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        productAlias = "product";
                        pricesAlias = "prices";
                        variantsAlias = "variants";
                        collectionAlias = "collection";
                        tagsAlias = "tags";
                        tags = options.where.tags;
                        delete options.where.tags;
                        price_lists = options.where.price_list_id;
                        delete options.where.price_list_id;
                        sales_channels = options.where.sales_channel_id;
                        delete options.where.sales_channel_id;
                        discount_condition_id = options.where.discount_condition_id;
                        delete options.where.discount_condition_id;
                        cleanedOptions = this._cleanOptions(options);
                        qb = this.createQueryBuilder("".concat(productAlias))
                            .leftJoinAndSelect("".concat(productAlias, ".variants"), variantsAlias)
                            .leftJoinAndSelect("".concat(productAlias, ".collection"), "".concat(collectionAlias))
                            .select(["".concat(productAlias, ".id")])
                            .where(cleanedOptions.where)
                            .andWhere(new typeorm_1.Brackets(function (qb) {
                            qb.where("".concat(productAlias, ".description ILIKE :q"), { q: "%".concat(q, "%") })
                                .orWhere("".concat(productAlias, ".title ILIKE :q"), { q: "%".concat(q, "%") })
                                .orWhere("".concat(variantsAlias, ".title ILIKE :q"), { q: "%".concat(q, "%") })
                                .orWhere("".concat(variantsAlias, ".sku ILIKE :q"), { q: "%".concat(q, "%") })
                                .orWhere("".concat(collectionAlias, ".title ILIKE :q"), { q: "%".concat(q, "%") });
                        }))
                            .skip(cleanedOptions.skip)
                            .take(cleanedOptions.take);
                        if (discount_condition_id) {
                            qb.innerJoin("discount_condition_product", "dc_product", "dc_product.product_id = ".concat(productAlias, ".id AND dc_product.condition_id = :dcId"), { dcId: discount_condition_id });
                        }
                        if (tags) {
                            qb.leftJoin("".concat(productAlias, ".tags"), tagsAlias).andWhere("".concat(tagsAlias, ".id IN (:...tag_ids)"), {
                                tag_ids: tags.value,
                            });
                        }
                        if (price_lists) {
                            variantPricesAlias = "".concat(variantsAlias, "_prices");
                            qb.leftJoin("".concat(productAlias, ".variants"), variantPricesAlias)
                                .leftJoin("".concat(variantPricesAlias, ".prices"), pricesAlias)
                                .andWhere("".concat(pricesAlias, ".price_list_id IN (:...price_list_ids)"), {
                                price_list_ids: price_lists.value,
                            });
                        }
                        if (sales_channels) {
                            qb.innerJoin("".concat(productAlias, ".sales_channels"), "sales_channels", "sales_channels.id IN (:...sales_channels_ids)", { sales_channels_ids: sales_channels.value });
                        }
                        joinedWithTags = !!tags;
                        joinedWithPriceLists = !!price_lists;
                        (0, repository_1.applyOrdering)({
                            repository: this,
                            order: (_a = options.order) !== null && _a !== void 0 ? _a : {},
                            qb: qb,
                            alias: productAlias,
                            shouldJoin: function (relation) {
                                return relation !== variantsAlias &&
                                    (relation !== pricesAlias || !joinedWithPriceLists) &&
                                    (relation !== tagsAlias || !joinedWithTags);
                            },
                        });
                        if (cleanedOptions.withDeleted) {
                            qb = qb.withDeleted();
                        }
                        return [4 /*yield*/, qb.getManyAndCount()];
                    case 1:
                        _b = __read.apply(void 0, [_c.sent(), 2]), results = _b[0], count = _b[1];
                        orderedResultsSet = new Set(results.map(function (p) { return p.id; }));
                        return [4 /*yield*/, this.findWithRelations(relations, __spreadArray([], __read(orderedResultsSet), false), cleanedOptions.withDeleted)];
                    case 2:
                        products = _c.sent();
                        productsMap = new Map(products.map(function (p) { return [p.id, p]; }));
                        orderedProducts = [];
                        orderedResultsSet.forEach(function (id) {
                            orderedProducts.push(productsMap.get(id));
                        });
                        return [2 /*return*/, [orderedProducts, count]];
                }
            });
        });
    };
    ProductRepository.prototype.isProductInSalesChannels = function (id, salesChannelIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder("product")
                            .leftJoin("product.sales_channels", "sales_channels", "sales_channels.id IN (:...salesChannelIds)", { salesChannelIds: salesChannelIds })
                            .getCount()];
                    case 1: return [2 /*return*/, ((_a.sent()) > 0)];
                }
            });
        });
    };
    /**
     * Upserts shipping profile for products
     * @param productIds IDs of products to update
     * @param shippingProfileId ID of shipping profile to assign to products
     * @returns updated products
     */
    ProductRepository.prototype.upsertShippingProfile = function (productIds, shippingProfileId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .update(models_1.Product)
                            .set({ profile_id: shippingProfileId })
                            .where({ id: (0, typeorm_1.In)(productIds) })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.findByIds(productIds)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductRepository.prototype._cleanOptions = function (options) {
        var _a;
        var where = (_a = options.where) !== null && _a !== void 0 ? _a : {};
        if ("description" in where) {
            delete where.description;
        }
        if ("title" in where) {
            delete where.title;
        }
        if ("price_list_id" in where) {
            where === null || where === void 0 ? true : delete where.price_list_id;
        }
        if ("discount_condition_id" in where) {
            where === null || where === void 0 ? true : delete where.discount_condition_id;
        }
        return __assign(__assign({}, options), { where: where });
    };
    ProductRepository = __decorate([
        (0, typeorm_1.EntityRepository)(models_1.Product)
    ], ProductRepository);
    return ProductRepository;
}(typeorm_1.Repository));
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.js.map