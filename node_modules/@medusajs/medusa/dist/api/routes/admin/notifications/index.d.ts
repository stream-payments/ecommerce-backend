import { Notification } from "./../../../../";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminNotificationsRelations: string[];
export declare const defaultAdminNotificationsFields: string[];
/**
 * @schema AdminNotificationsListRes
 * type: object
 * properties:
 *   notifications:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Notification"
 */
export declare type AdminNotificationsListRes = {
    notifications: Notification[];
};
/**
 * @schema AdminNotificationsRes
 * type: object
 * properties:
 *   notification:
 *     $ref: "#/components/schemas/Notification"
 */
export declare type AdminNotificationsRes = {
    notification: Notification;
};
export * from "./list-notifications";
export * from "./resend-notification";
