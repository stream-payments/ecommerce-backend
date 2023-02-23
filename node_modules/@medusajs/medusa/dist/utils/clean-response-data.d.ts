/**
 * Filter response data to contain props specified in the fields array.
 *
 * @param data - record or an array of records in the response
 * @param fields - record props allowed in the response
 */
declare function cleanResponseData<T>(data: T, fields: string[]): Pick<any, string>[] | Partial<T>;
export { cleanResponseData };
