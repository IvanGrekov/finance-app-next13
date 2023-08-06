enum ECurrency {
    USD = '$',
    EUR = '€',
    UAH = '₴',
    BTC = '₿',
}

type TFormatCurrency = (value: number, currency?: ECurrency) => string;

export const formatCurrency: TFormatCurrency = (value, currency = ECurrency.USD) => {
    let fixedValue = value;

    switch (true) {
        case value >= 100:
            fixedValue = +value.toFixed(0);
            break;
        case value >= 10:
            fixedValue = +value.toFixed(1);
            break;
        case value >= 0.1:
            fixedValue = +value.toFixed(2);
            break;
        case value >= 0.01:
            fixedValue = +value.toFixed(3);
            break;
        default:
            fixedValue = +value.toFixed(7);
    }

    return `${currency}${fixedValue}`;
};
