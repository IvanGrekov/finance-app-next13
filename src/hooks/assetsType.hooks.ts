import { useSearchParams } from 'next/navigation';

import { ASSETS_TYPE_SEARCH_PARAM_NAME } from 'constants/assetsType';
import { EAssetsType } from 'models/types/assetsType';

export const useAssetsTypeValue = (): string => {
    const searchParams = useSearchParams();

    const value = searchParams.get(ASSETS_TYPE_SEARCH_PARAM_NAME);

    return value || '';
};

export const useIsCrypto = (): boolean => {
    return useAssetsTypeValue() === EAssetsType.CRYPTO;
};
