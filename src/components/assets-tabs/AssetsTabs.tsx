import Tab from 'components/tabs/Tab';
import Tabs from 'components/tabs/Tabs';
import { ASSETS_TYPE_SEARCH_PARAM_NAME } from 'constants/assetsType';
import { useAssetsTypeValue } from 'hooks/assetsType.hooks';
import { EAssetsType } from 'models/types/assetsType';

export default function AssetsTabs(): JSX.Element {
    const assetsTypeValue = useAssetsTypeValue();

    return (
        <Tabs>
            <Tab
                value={EAssetsType.CASH}
                label="Cash"
                searchParamKey={ASSETS_TYPE_SEARCH_PARAM_NAME}
                currentValue={assetsTypeValue}
            />
            <Tab
                value={EAssetsType.CRYPTO}
                label="Crypto"
                searchParamKey={ASSETS_TYPE_SEARCH_PARAM_NAME}
                currentValue={assetsTypeValue}
            />
        </Tabs>
    );
}
