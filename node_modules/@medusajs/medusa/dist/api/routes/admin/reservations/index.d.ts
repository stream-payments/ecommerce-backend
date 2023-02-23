import { ReservationItemDTO } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import "reflect-metadata";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminPostReservationsReq
 * type: object
 * required:
 *   - reservation
 * properties:
 *   reservation:
 *     $ref: "#/components/schemas/ReservationItemDTO"
 */
export declare type AdminReservationsRes = {
    reservation: ReservationItemDTO;
};
/**
 * @schema AdminGetReservationReservationsReq
 * type: object
 * properties:
 *   reservations:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ReservationItemDTO"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of items skipped before these items
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export declare type AdminReservationsListRes = PaginatedResponse & {
    reservations: ReservationItemDTO[];
};
export declare const defaultAdminReservationRelations: never[];
export declare const defaultReservationFields: string[];
export declare type AdminReservationsDeleteRes = DeleteResponse;
export * from "./create-reservation";
export * from "./delete-reservation";
export * from "./get-reservation";
export * from "./update-reservation";
