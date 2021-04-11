export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T> {
    dataState: DataStateEnum;
    data: T;
    errorMessage: string;
}

export enum ProductActionType {
    CREATE = '[Product] Create Product',
    UPDATE_PRODUCT = '[Product] Update Product',
    GET_ALL_PRODUCT = '[Product] Get all products'
}

export interface ActionEvent {
    type: ProductActionType;
    payload: any;
}
