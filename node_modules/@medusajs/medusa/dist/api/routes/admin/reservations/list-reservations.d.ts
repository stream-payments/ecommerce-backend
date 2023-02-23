import { Request, Response } from "express";
import { NumericalComparisonOperator } from "../../../../types/common";
/**
 * @oas [get] /reservations
 * operationId: "GetReservations"
 * summary: "List Reservations"
 * description: "Retrieve a list of Reservations."
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: location_id
 *     style: form
 *     explode: false
 *     description: Location ids to search for.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: inventory_item_id
 *     style: form
 *     explode: false
 *     description: Inventory Item ids to search for.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: line_item_id
 *     style: form
 *     explode: false
 *     description: Line Item ids to search for.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: quantity
 *     description: Filter by reservation quantity
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *           type: number
 *           description: filter by reservation quantity less than this number
 *         gt:
 *           type: number
 *           description: filter by reservation quantity greater than this number
 *         lte:
 *           type: number
 *           description: filter by reservation quantity less than or equal to this number
 *         gte:
 *           type: number
 *           description: filter by reservation quantity greater than or equal to this number
 *   - (query) offset=0 {integer} How many Reservations to skip in the result.
 *   - (query) limit=20 {integer} Limit the number of Reservations returned.
 *   - (query) expand {string} (Comma separated) Which fields should be expanded in the product category.
 *   - (query) fields {string} (Comma separated) Which fields should be included in the product category.
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/admin/product-categories' \
 *       --header 'Authorization: Bearer {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Product Category
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminGetReservationReservationsReq"
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
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
declare const AdminGetReservationsParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
export declare class AdminGetReservationsParams extends AdminGetReservationsParams_base {
    location_id?: string[];
    inventory_item_id?: string[];
    line_item_id?: string[];
    quantity?: NumericalComparisonOperator;
}
