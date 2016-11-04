export interface PagedDto<T> {
    count: number,
    next: any,
    previous: any,
    results: Array<T>;
}