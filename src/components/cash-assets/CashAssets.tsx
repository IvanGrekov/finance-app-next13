import { IExchangeRatesData } from 'models/types/exchangeRates';
import { formatCurrency } from 'utils/format.utils';

interface ICashAssetsProps {
    data: IExchangeRatesData;
}

export default function CashAssets({ data }: ICashAssetsProps): JSX.Element {
    return (
        <ul>
            {Object.values(data).map(({ code, value }) => (
                <li key={code}>
                    {code} - {formatCurrency(value)}
                </li>
            ))}
        </ul>
    );
}
