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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var models_1 = require("../models");
var utils_1 = require("../utils");
/**
 * Helps retrieve payment providers
 */
var PaymentProviderService = /** @class */ (function (_super) {
    __extends(PaymentProviderService, _super);
    function PaymentProviderService(container) {
        var _this = _super.call(this, container) || this;
        _this.container_ = container;
        _this.manager_ = container.manager;
        _this.paymentSessionRepository_ = container.paymentSessionRepository;
        _this.paymentProviderRepository_ = container.paymentProviderRepository;
        _this.paymentRepository_ = container.paymentRepository;
        _this.refundRepository_ = container.refundRepository;
        _this.customerService_ = container.customerService;
        _this.featureFlagRouter_ = container.featureFlagRouter;
        _this.logger_ = container.logger;
        return _this;
    }
    PaymentProviderService.prototype.registerInstalledProviders = function (providerIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var model;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        model = transactionManager.getCustomRepository(this.paymentProviderRepository_);
                                        return [4 /*yield*/, model.update({}, { is_installed: false })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, Promise.all(providerIds.map(function (providerId) { return __awaiter(_this, void 0, void 0, function () {
                                                var provider;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            provider = model.create({
                                                                id: providerId,
                                                                is_installed: true,
                                                            });
                                                            return [4 /*yield*/, model.save(provider)];
                                                        case 1: return [2 /*return*/, _a.sent()];
                                                    }
                                                });
                                            }); }))];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ppRepo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ppRepo = this.manager_.getCustomRepository(this.paymentProviderRepository_);
                        return [4 /*yield*/, ppRepo.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.retrievePayment = function (id, relations) {
        if (relations === void 0) { relations = []; }
        return __awaiter(this, void 0, void 0, function () {
            var paymentRepo, query, payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        paymentRepo = this.manager_.getCustomRepository(this.paymentRepository_);
                        query = {
                            where: { id: id },
                            relations: [],
                        };
                        if (relations.length) {
                            query.relations = relations;
                        }
                        return [4 /*yield*/, paymentRepo.findOne(query)];
                    case 1:
                        payment = _a.sent();
                        if (!payment) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Payment with ".concat(id, " was not found"));
                        }
                        return [2 /*return*/, payment];
                }
            });
        });
    };
    PaymentProviderService.prototype.listPayments = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var payRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payRepo = this.manager_.getCustomRepository(this.paymentRepository_);
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, payRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.retrieveSession = function (id, relations) {
        if (relations === void 0) { relations = []; }
        return __awaiter(this, void 0, void 0, function () {
            var sessionRepo, query, session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sessionRepo = this.manager_.getCustomRepository(this.paymentSessionRepository_);
                        query = {
                            where: { id: id },
                            relations: [],
                        };
                        if (relations.length) {
                            query.relations = relations;
                        }
                        return [4 /*yield*/, sessionRepo.findOne(query)];
                    case 1:
                        session = _a.sent();
                        if (!session) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Payment Session with ".concat(id, " was not found"));
                        }
                        return [2 /*return*/, session];
                }
            });
        });
    };
    /**
     * Creates a payment session with the given provider.
     * @param providerIdOrSessionInput - the id of the provider to create payment with or the input data
     * @param cart - a cart object used to calculate the amount, etc. from
     * @return the payment session
     */
    PaymentProviderService.prototype.createSession = function (providerIdOrSessionInput) {
        var _a = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _a[_i - 1] = arguments[_i];
        }
        var _b = __read(_a, 1), cart = _b[0];
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var providerId, data, provider, context, paymentResponse, sessionData;
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        providerId = (0, utils_1.isString)(providerIdOrSessionInput)
                                            ? providerIdOrSessionInput
                                            : providerIdOrSessionInput.provider_id;
                                        data = ((0, utils_1.isString)(providerIdOrSessionInput) ? cart : providerIdOrSessionInput);
                                        provider = this.retrieveProvider(providerId);
                                        context = this.buildPaymentProcessorContext(data);
                                        if (!(0, medusa_core_utils_1.isDefined)(context.currency_code) || !(0, medusa_core_utils_1.isDefined)(context.amount)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_ARGUMENT, "`currency_code` and `amount` are required to create payment session.");
                                        }
                                        return [4 /*yield*/, provider
                                                .withTransaction(transactionManager)
                                                .createPayment(context)];
                                    case 1:
                                        paymentResponse = _c.sent();
                                        sessionData = (_a = paymentResponse.session_data) !== null && _a !== void 0 ? _a : paymentResponse;
                                        return [4 /*yield*/, this.processUpdateRequestsData({
                                                customer: { id: (_b = context.customer) === null || _b === void 0 ? void 0 : _b.id },
                                            }, paymentResponse)];
                                    case 2:
                                        _c.sent();
                                        return [4 /*yield*/, this.saveSession(providerId, {
                                                payment_session_id: !(0, utils_1.isString)(providerIdOrSessionInput)
                                                    ? providerIdOrSessionInput.payment_session_id
                                                    : undefined,
                                                cartId: context.id,
                                                sessionData: sessionData,
                                                status: models_1.PaymentSessionStatus.PENDING,
                                                isInitiated: true,
                                                amount: context.amount,
                                            })];
                                    case 3: return [2 /*return*/, _c.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    /**
     * Refreshes a payment session with the given provider.
     * This means, that we delete the current one and create a new.
     * @param paymentSession - the payment session object to
     *    update
     * @param sessionInput
     * @return the payment session
     */
    PaymentProviderService.prototype.refreshSession = function (paymentSession, sessionInput) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                        var session, provider, sessionRepo;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.retrieveSession(paymentSession.id)];
                                case 1:
                                    session = _a.sent();
                                    provider = this.retrieveProvider(paymentSession.provider_id);
                                    return [4 /*yield*/, provider.withTransaction(transactionManager).deletePayment(session)];
                                case 2:
                                    _a.sent();
                                    sessionRepo = transactionManager.getCustomRepository(this.paymentSessionRepository_);
                                    return [4 /*yield*/, sessionRepo.remove(session)];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, this.createSession(sessionInput)];
                                case 4: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Update a payment session with the given provider.
     * @param paymentSession - The paymentSession to update
     * @param sessionInput
     * @return the payment session
     */
    PaymentProviderService.prototype.updateSession = function (paymentSession, sessionInput) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var provider, context, paymentResponse, sessionData;
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        provider = this.retrieveProvider(paymentSession.provider_id);
                                        context = this.buildPaymentProcessorContext(sessionInput);
                                        return [4 /*yield*/, provider
                                                .withTransaction(transactionManager)
                                                .updatePayment(paymentSession.data, context)];
                                    case 1:
                                        paymentResponse = _c.sent();
                                        sessionData = (_a = paymentResponse.session_data) !== null && _a !== void 0 ? _a : paymentResponse;
                                        return [4 /*yield*/, this.processUpdateRequestsData({
                                                customer: { id: (_b = context.customer) === null || _b === void 0 ? void 0 : _b.id },
                                            }, paymentResponse)];
                                    case 2:
                                        _c.sent();
                                        return [4 /*yield*/, this.saveSession(paymentSession.provider_id, {
                                                payment_session_id: paymentSession.id,
                                                sessionData: sessionData,
                                                isInitiated: true,
                                                amount: context.amount,
                                            })];
                                    case 3: return [2 /*return*/, _c.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.deleteSession = function (paymentSession) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var session, provider, sessionRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieveSession(paymentSession.id).catch(function () { return void 0; })];
                                    case 1:
                                        session = _a.sent();
                                        if (!session) {
                                            return [2 /*return*/];
                                        }
                                        provider = this.retrieveProvider(paymentSession.provider_id);
                                        return [4 /*yield*/, provider
                                                .withTransaction(transactionManager)
                                                .deletePayment(paymentSession)];
                                    case 2:
                                        _a.sent();
                                        sessionRepo = transactionManager.getCustomRepository(this.paymentSessionRepository_);
                                        return [4 /*yield*/, sessionRepo.remove(session)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Finds a provider given an id
     * @param {string} providerId - the id of the provider to get
     * @return {PaymentService} the payment provider
     */
    PaymentProviderService.prototype.retrieveProvider = function (providerId) {
        try {
            var provider = void 0;
            if (providerId === "system") {
                provider = this.container_["systemPaymentProviderService"];
            }
            else {
                provider = this.container_["pp_".concat(providerId)];
            }
            return provider;
        }
        catch (err) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Could not find a payment provider with id: ".concat(providerId));
        }
    };
    PaymentProviderService.prototype.createPayment = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var payment_session, currency_code, amount, provider_id, providerId, provider, paymentData, paymentRepo, created;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        payment_session = data.payment_session, currency_code = data.currency_code, amount = data.amount, provider_id = data.provider_id;
                                        providerId = provider_id !== null && provider_id !== void 0 ? provider_id : payment_session.provider_id;
                                        provider = this.retrieveProvider(providerId);
                                        return [4 /*yield*/, provider
                                                .withTransaction(transactionManager)
                                                .getPaymentData(payment_session)];
                                    case 1:
                                        paymentData = _a.sent();
                                        paymentRepo = transactionManager.getCustomRepository(this.paymentRepository_);
                                        created = paymentRepo.create({
                                            provider_id: providerId,
                                            amount: amount,
                                            currency_code: currency_code,
                                            data: paymentData,
                                            cart_id: data.cart_id,
                                        });
                                        return [4 /*yield*/, paymentRepo.save(created)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.updatePayment = function (paymentId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var paymentService;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        paymentService = this.container_.paymentService;
                                        return [4 /*yield*/, paymentService
                                                .withTransaction(transactionManager)
                                                .update(paymentId, data)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.authorizePayment = function (paymentSession, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var session, provider, _a, status, data, sessionRepo;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.retrieveSession(paymentSession.id).catch(function () { return void 0; })];
                                    case 1:
                                        session = _b.sent();
                                        if (!session) {
                                            return [2 /*return*/];
                                        }
                                        provider = this.retrieveProvider(paymentSession.provider_id);
                                        return [4 /*yield*/, provider
                                                .withTransaction(transactionManager)
                                                .authorizePayment(session, context)];
                                    case 2:
                                        _a = _b.sent(), status = _a.status, data = _a.data;
                                        session.data = data;
                                        session.status = status;
                                        if (status === models_1.PaymentSessionStatus.AUTHORIZED) {
                                            session.payment_authorized_at = new Date();
                                        }
                                        sessionRepo = transactionManager.getCustomRepository(this.paymentSessionRepository_);
                                        return [4 /*yield*/, sessionRepo.save(session)];
                                    case 3: return [2 /*return*/, _b.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.updateSessionData = function (paymentSession, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var session, provider, _a, sessionRepo;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.retrieveSession(paymentSession.id)];
                                    case 1:
                                        session = _b.sent();
                                        provider = this.retrieveProvider(paymentSession.provider_id);
                                        _a = session;
                                        return [4 /*yield*/, provider
                                                .withTransaction(transactionManager)
                                                .updatePaymentData(paymentSession.data, data)];
                                    case 2:
                                        _a.data = _b.sent();
                                        session.status = paymentSession.status;
                                        sessionRepo = transactionManager.getCustomRepository(this.paymentSessionRepository_);
                                        return [4 /*yield*/, sessionRepo.save(session)];
                                    case 3: return [2 /*return*/, _b.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.cancelPayment = function (paymentObj) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var payment, provider, _a, now, paymentRepo;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.retrievePayment(paymentObj.id)];
                                    case 1:
                                        payment = _b.sent();
                                        provider = this.retrieveProvider(payment.provider_id);
                                        _a = payment;
                                        return [4 /*yield*/, provider
                                                .withTransaction(transactionManager)
                                                .cancelPayment(payment)];
                                    case 2:
                                        _a.data = _b.sent();
                                        now = new Date();
                                        payment.canceled_at = now.toISOString();
                                        paymentRepo = transactionManager.getCustomRepository(this.paymentRepository_);
                                        return [4 /*yield*/, paymentRepo.save(payment)];
                                    case 3: return [2 /*return*/, _b.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.getStatus = function (payment) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = this.retrieveProvider(payment.provider_id);
                        return [4 /*yield*/, provider.withTransaction(this.manager_).getStatus(payment.data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.capturePayment = function (paymentObj) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var payment, provider, _a, now, paymentRepo;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.retrievePayment(paymentObj.id)];
                                    case 1:
                                        payment = _b.sent();
                                        provider = this.retrieveProvider(payment.provider_id);
                                        _a = payment;
                                        return [4 /*yield*/, provider
                                                .withTransaction(transactionManager)
                                                .capturePayment(payment)];
                                    case 2:
                                        _a.data = _b.sent();
                                        now = new Date();
                                        payment.captured_at = now.toISOString();
                                        paymentRepo = transactionManager.getCustomRepository(this.paymentRepository_);
                                        return [4 /*yield*/, paymentRepo.save(payment)];
                                    case 3: return [2 /*return*/, _b.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.refundPayment = function (payObjs, amount, reason, note) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var payments, order_id, refundable, balance, used, paymentRepo, paymentToRefund, currentRefundable, refundAmount, provider, _a, refundRepo, toCreate, created;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.listPayments({
                                            id: payObjs.map(function (p) { return p.id; }),
                                        })];
                                    case 1:
                                        payments = _b.sent();
                                        refundable = payments.reduce(function (acc, next) {
                                            order_id = next.order_id;
                                            if (next.captured_at) {
                                                return (acc += next.amount - next.amount_refunded);
                                            }
                                            return acc;
                                        }, 0);
                                        if (refundable < amount) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Refund amount is greater that the refundable amount");
                                        }
                                        balance = amount;
                                        used = [];
                                        paymentRepo = transactionManager.getCustomRepository(this.paymentRepository_);
                                        paymentToRefund = payments.find(function (payment) { return payment.amount - payment.amount_refunded > 0; });
                                        _b.label = 2;
                                    case 2:
                                        if (!paymentToRefund) return [3 /*break*/, 5];
                                        currentRefundable = paymentToRefund.amount - paymentToRefund.amount_refunded;
                                        refundAmount = Math.min(currentRefundable, balance);
                                        provider = this.retrieveProvider(paymentToRefund.provider_id);
                                        _a = paymentToRefund;
                                        return [4 /*yield*/, provider
                                                .withTransaction(transactionManager)
                                                .refundPayment(paymentToRefund, refundAmount)];
                                    case 3:
                                        _a.data = _b.sent();
                                        paymentToRefund.amount_refunded += refundAmount;
                                        return [4 /*yield*/, paymentRepo.save(paymentToRefund)];
                                    case 4:
                                        _b.sent();
                                        balance -= refundAmount;
                                        used.push(paymentToRefund.id);
                                        if (balance > 0) {
                                            paymentToRefund = payments.find(function (payment) {
                                                return payment.amount - payment.amount_refunded > 0 &&
                                                    !used.includes(payment.id);
                                            });
                                        }
                                        else {
                                            paymentToRefund = undefined;
                                        }
                                        return [3 /*break*/, 2];
                                    case 5:
                                        refundRepo = transactionManager.getCustomRepository(this.refundRepository_);
                                        toCreate = {
                                            order_id: order_id,
                                            amount: amount,
                                            reason: reason,
                                            note: note,
                                        };
                                        created = refundRepo.create(toCreate);
                                        return [4 /*yield*/, refundRepo.save(created)];
                                    case 6: return [2 /*return*/, _b.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.refundFromPayment = function (payment, amount, reason, note) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var refundable, provider, _a, paymentRepo, refundRepo, toCreate, created;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        refundable = payment.amount - payment.amount_refunded;
                                        if (refundable < amount) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Refund amount is greater that the refundable amount");
                                        }
                                        provider = this.retrieveProvider(payment.provider_id);
                                        _a = payment;
                                        return [4 /*yield*/, provider
                                                .withTransaction(manager)
                                                .refundPayment(payment, amount)];
                                    case 1:
                                        _a.data = _b.sent();
                                        payment.amount_refunded += amount;
                                        paymentRepo = manager.getCustomRepository(this.paymentRepository_);
                                        return [4 /*yield*/, paymentRepo.save(payment)];
                                    case 2:
                                        _b.sent();
                                        refundRepo = manager.getCustomRepository(this.refundRepository_);
                                        toCreate = {
                                            payment_id: payment.id,
                                            amount: amount,
                                            reason: reason,
                                            note: note,
                                        };
                                        created = refundRepo.create(toCreate);
                                        return [4 /*yield*/, refundRepo.save(created)];
                                    case 3: return [2 /*return*/, _b.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentProviderService.prototype.retrieveRefund = function (id, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var refRepo, query, refund;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refRepo = this.manager_.getCustomRepository(this.refundRepository_);
                        query = (0, utils_1.buildQuery)({ id: id }, config);
                        return [4 /*yield*/, refRepo.findOne(query)];
                    case 1:
                        refund = _a.sent();
                        if (!refund) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "A refund with ".concat(id, " was not found"));
                        }
                        return [2 /*return*/, refund];
                }
            });
        });
    };
    /**
     * Build the create session context for both legacy and new API
     * @param cartOrData
     * @protected
     */
    PaymentProviderService.prototype.buildPaymentProcessorContext = function (cartOrData) {
        var _a;
        var cart = "object" in cartOrData && cartOrData.object === "cart"
            ? cartOrData
            : cartOrData.cart;
        var context = {};
        // TODO: only to support legacy API. Once we are ready to break the API, the cartOrData will only support PaymentSessionInput
        if ("object" in cartOrData && cartOrData.object === "cart") {
            context.cart = {
                context: cart.context,
                shipping_address: cart.shipping_address,
                id: cart.id,
                email: cart.email,
                shipping_methods: cart.shipping_methods,
            };
            context.amount = cart.total;
            context.currency_code = (_a = cart.region) === null || _a === void 0 ? void 0 : _a.currency_code;
            Object.assign(context, cart);
        }
        else {
            var data = cartOrData;
            context.cart = data.cart;
            context.amount = data.amount;
            context.currency_code = data.currency_code;
            context.resource_id = data.resource_id;
            Object.assign(context, cart);
        }
        return context;
    };
    /**
     * Create or update a Payment session data.
     * @param providerId
     * @param data
     * @protected
     */
    PaymentProviderService.prototype.saveSession = function (providerId, data) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var manager, sessionRepo, session, toCreate, created;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        manager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        sessionRepo = manager.getCustomRepository(this.paymentSessionRepository_);
                        if (!data.payment_session_id) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.retrieveSession(data.payment_session_id)];
                    case 1:
                        session = _g.sent();
                        session.data = (_b = data.sessionData) !== null && _b !== void 0 ? _b : session.data;
                        session.status = (_c = data.status) !== null && _c !== void 0 ? _c : session.status;
                        session.amount = (_d = data.amount) !== null && _d !== void 0 ? _d : session.amount;
                        session.is_initiated = (_e = data.isInitiated) !== null && _e !== void 0 ? _e : session.is_initiated;
                        session.is_selected = (_f = data.isSelected) !== null && _f !== void 0 ? _f : session.is_selected;
                        return [4 /*yield*/, sessionRepo.save(session)];
                    case 2: return [2 /*return*/, _g.sent()];
                    case 3:
                        toCreate = {
                            cart_id: data.cartId || null,
                            provider_id: providerId,
                            data: data.sessionData,
                            is_selected: data.isSelected,
                            is_initiated: data.isInitiated,
                            status: data.status,
                            amount: data.amount,
                        };
                        created = sessionRepo.create(toCreate);
                        return [4 /*yield*/, sessionRepo.save(created)];
                    case 4: return [2 /*return*/, _g.sent()];
                }
            });
        });
    };
    /**
     * Process the collected data. Can be used every time we need to process some collected data returned by the provider
     * @param data
     * @param paymentResponse
     * @protected
     */
    PaymentProviderService.prototype.processUpdateRequestsData = function (data, paymentResponse) {
        var _a, _b;
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var update_requests, manager;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        update_requests = paymentResponse.update_requests;
                        if (!update_requests) {
                            return [2 /*return*/];
                        }
                        manager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        if (!(update_requests.customer_metadata && ((_b = data.customer) === null || _b === void 0 ? void 0 : _b.id))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.customerService_
                                .withTransaction(manager)
                                .update(data.customer.id, {
                                metadata: update_requests.customer_metadata,
                            })];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return PaymentProviderService;
}(interfaces_1.TransactionBaseService));
exports.default = PaymentProviderService;
//# sourceMappingURL=payment-provider.js.map