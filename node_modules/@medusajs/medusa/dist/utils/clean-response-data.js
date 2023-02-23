"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanResponseData = void 0;
var lodash_1 = require("lodash");
/**
 * Filter response data to contain props specified in the fields array.
 *
 * @param data - record or an array of records in the response
 * @param fields - record props allowed in the response
 */
function cleanResponseData(data, fields) {
    if (!fields.length) {
        return data;
    }
    if (Array.isArray(data)) {
        return data.map(function (record) { return (0, lodash_1.pick)(record, fields); });
    }
    return (0, lodash_1.pick)(data, fields);
}
exports.cleanResponseData = cleanResponseData;
//# sourceMappingURL=clean-response-data.js.map