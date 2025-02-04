import { BaseQueryApi } from "@reduxjs/toolkit/query";
import React from "react";

export type TError = {
    data: {
        message: string;
        stack: string;
        success: boolean;
    };
    status: number;
}

export type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
}

export type TResponse<T> = {
    error: any;
    data: {
        result?: T;
        error?: TError;
        meta?: TMeta;
    }
}


export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;


export type TQueryParam = {
    name: string;
    value: boolean | React.Key;
}

export type TCartItem = {
    product: string; 
    name: string;
    price: number;
    quantity: number;
    stock: number;
    image: string;
}