class Currency {
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_X8vkJSE7HG8YUUtTULGQ4qxOqKtrzVLy0gUHBnXX&base_currency="
    }

    async convert(amount, firstCurrency, secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`);
        const res = await response.json();
        const exchangeResult = amount * res.data[secondCurrency];

        return exchangeResult;
    }
}