import { DeleteResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminUploadsRes
 * type: object
 * properties:
 *   uploads:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         url:
 *           type: string
 *           description: The URL of the uploaded file.
 *           format: uri
 */
export declare type AdminUploadsRes = {
    uploads: {
        url: string;
    }[];
};
/**
 * @schema AdminDeleteUploadsRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The file key of the upload deleted
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: file
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export declare type AdminDeleteUploadsRes = DeleteResponse;
/**
 * @schema AdminUploadsDownloadUrlRes
 * type: object
 * properties:
 *   download_url:
 *     type: string
 *     description: The Download URL of the file
 */
export declare type AdminUploadsDownloadUrlRes = {
    download_url: string;
};
export * from "./create-upload";
export * from "./delete-upload";
export * from "./get-download-url";
