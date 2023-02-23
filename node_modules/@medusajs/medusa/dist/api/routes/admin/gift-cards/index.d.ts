import "reflect-metadata";
import { GiftCard } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminGiftCardFields: (keyof GiftCard)[];
export declare const defaultAdminGiftCardRelations: string[];
/**
 * @schema AdminGiftCardsRes
 * type: object
 * properties:
 *   gift_card:
 *     $ref: "#/components/schemas/GiftCard"
 */
export declare type AdminGiftCardsRes = {
    gift_card: GiftCard;
};
/**
 * @schema AdminGiftCardsDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Gift Card
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: gift-card
 *   deleted:
 *     type: boolean
 *     description: Whether the gift card was deleted successfully or not.
 *     default: true
 */
export declare type AdminGiftCardsDeleteRes = DeleteResponse;
/**
 * @schema AdminGiftCardsListRes
 * type: object
 * properties:
 *   gift_cards:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/GiftCard"
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
export declare type AdminGiftCardsListRes = PaginatedResponse & {
    gift_cards: GiftCard[];
};
export * from "./create-gift-card";
export * from "./list-gift-cards";
export * from "./update-gift-card";
