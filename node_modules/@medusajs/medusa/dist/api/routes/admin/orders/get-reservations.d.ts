import { Request, Response } from "express";
/**
 * @oas [get] /orders/{id}/reservations
 * operationId: "GetOrdersOrderReservations"
 * summary: "Get reservations for an Order"
 * description: "Retrieves reservations for an Order"
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) offset=0 {integer} How many reservations to skip before the results.
 *   - (query) limit=20 {integer} Limit the number of reservations returned.
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.retrieveReservations(order_id)
 *       .then(({ reservations }) => {
 *         console.log(reservations[0].id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/admin/orders/{id}/reservations' \
 *       --header 'Authorization: Bearer {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Order
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
declare const AdminGetOrdersOrderReservationsParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
export declare class AdminGetOrdersOrderReservationsParams extends AdminGetOrdersOrderReservationsParams_base {
}
