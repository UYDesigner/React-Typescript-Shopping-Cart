const currency_formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD"
});

export default function FormatCurrency(number: number) {
    return currency_formatter.format(number);
}
