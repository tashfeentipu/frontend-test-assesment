export const tableData = [{
    "amount": "175.819995321113279542",
    "baseCurrency": "ETH",
    "createdAt": "1580141321351",
    "orderId": "3a16aef1d2afe8af1ad52fd4ec374fae",
    "orderStatus": "waiting-counterparty-approve",
    "orderType": "sell",
    "portfolioName": "Default Trading",
    "quoteAmount": "979.45646023",
    "quoteCurrency": "DOGE",
    "selected": true
},
{
    "amount": "723.4071",
    "baseCurrency": "EOS",
    "createdAt": "1627317557723",
    "orderId": "ad40cd89f8330c53e2ea4e8c63ea9c97",
    "orderStatus": "executed",
    "orderType": "sell",
    "portfolioName": "Default Trading",
    "quoteAmount": "92.09607079",
    "quoteCurrency": "BTC",
    "selected": true
}]

export const currenciesData = [{
    "currency": "BTC",
    "mainCurrency": "BTC",
    "name": "Bitcoin",
    "fiat": false,
    "priority": "6",
    "confirmations": "2",
    "decimal": "8",
    "_embedded": {
        "price": {
            "baseCurrency": "BTC",
            "quoteCurrency": "USD",
            "price": "38703.50130755758"
        }
    }
}, {
    "currency": "ETH",
    "mainCurrency": "ETH",
    "name": "Ethereum",
    "fiat": false,
    "priority": "5",
    "confirmations": "30",
    "decimal": "18",

    "explorerUrl": "https://etherscan.io/tx/",
    "_embedded": {
        "price": {
            "baseCurrency": "ETH",
            "quoteCurrency": "USD",
            "price": "2551.84260413368"
        }
    }
},
{
    "currency": "DOGE",
    "mainCurrency": "DOGE",
    "name": "Dogecoin",
    "fiat": false,
    "priority": "0",
    "confirmations": "20",
    "decimal": "8",
    "explorerUrl": "https://blockchair.com/dogecoin/transaction/",
    "_embedded": {
        "price": {
            "baseCurrency": "DOGE",
            "quoteCurrency": "USD",
            "price": "0.11375481817224442"
        }
    }
},
{
    "currency": "EOS",
    "mainCurrency": "EOS",
    "name": "EOS",
    "fiat": false,
    "priority": "0",
    "confirmations": "1",
    "decimal": "4",
    "extra": {},
    "explorerUrl": "https://bloks.io/transaction/",
    "_embedded": {
        "price": {
            "baseCurrency": "EOS",
            "quoteCurrency": "USD",
            "price": "1.9557948890790413"
        }
    }
}]