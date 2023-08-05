import { usePathname } from 'next/navigation';

import { EAssetsTypePaths } from 'models/types/assetsType';

export const useIsCrypto = (): boolean => {
    const pathname = usePathname();

    return pathname === EAssetsTypePaths.CRYPTO;
};
