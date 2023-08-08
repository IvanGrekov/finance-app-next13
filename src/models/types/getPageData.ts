import { DehydratedState } from '@tanstack/react-query';

export interface IPageData {
    dehydratedState?: DehydratedState;
}

export interface INextRequestOptions {
    revalidate?: number;
}
