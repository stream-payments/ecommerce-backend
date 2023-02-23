"use strict";
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
exports.transformIncludesOptions = void 0;
var medusa_core_utils_1 = require("medusa-core-utils");
/**
 * Retrieve the includes options from the fields query param.
 * If the include option is present then assigned it to includes on req
 * @param allowedIncludesFields The list of fields that can be passed and assign to req.includes
 * @param expectedIncludesFields The list of fields that the consumer can pass to the end point using this middleware. It is a subset of `allowedIncludesFields`
 */
function transformIncludesOptions(allowedIncludesFields, expectedIncludesFields) {
    if (allowedIncludesFields === void 0) { allowedIncludesFields = []; }
    if (expectedIncludesFields === void 0) { expectedIncludesFields = []; }
    return function (req, res, next) {
        var e_1, _a;
        var _b, _c, _d;
        if (!allowedIncludesFields.length || !req.query["fields"]) {
            return next();
        }
        var fields = (_b = req.query["fields"].split(",")) !== null && _b !== void 0 ? _b : [];
        try {
            for (var allowedIncludesFields_1 = __values(allowedIncludesFields), allowedIncludesFields_1_1 = allowedIncludesFields_1.next(); !allowedIncludesFields_1_1.done; allowedIncludesFields_1_1 = allowedIncludesFields_1.next()) {
                var includesField = allowedIncludesFields_1_1.value;
                var fieldIndex = (_c = fields.indexOf(includesField)) !== null && _c !== void 0 ? _c : -1;
                var isPresent = fieldIndex !== -1;
                if (isPresent) {
                    fields.splice(fieldIndex, 1);
                    if (!expectedIncludesFields.includes(includesField)) {
                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The field \"".concat(includesField, "\" is not supported by this end point. ").concat(expectedIncludesFields.length
                            ? "The includes fields can be one of entity properties or in [".concat(expectedIncludesFields.join(", "), "]")
                            : ""));
                    }
                    req["includes"] = (_d = req["includes"]) !== null && _d !== void 0 ? _d : {};
                    req["includes"][includesField] = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (allowedIncludesFields_1_1 && !allowedIncludesFields_1_1.done && (_a = allowedIncludesFields_1.return)) _a.call(allowedIncludesFields_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (req.query["fields"]) {
            if (fields.length) {
                req.query["fields"] = fields.join(",");
            }
            else {
                delete req.query["fields"];
            }
        }
        next();
    };
}
exports.transformIncludesOptions = transformIncludesOptions;
//# sourceMappingURL=transform-includes-options.js.map