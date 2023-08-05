'use client';

import Tab from 'components/tabs/Tab';
import Tabs from 'components/tabs/Tabs';
import { EAssetsTypePaths } from 'models/types/assetsType';

export default function AssetsTabs(): JSX.Element {
    return (
        <Tabs>
            <Tab path={EAssetsTypePaths.CASH} label="Cash" />
            <Tab path={EAssetsTypePaths.CRYPTO} label="Crypto" />
        </Tabs>
    );
}
