import React from 'react';
import { screen } from '@testing-library/react';
import Currency from '../Currency';
import { renderWithProviders } from "./utils";

const currenciesData = [{
    "currency": "BTC",
    "mainCurrency": "BTC",
    "name": "Bitcoin",
    "fiat": false,
    "priority": "6",
    "confirmations": "2",
    "decimal": "8",
    "tags": [
        "deposit-custody",
        "deposit-trading-vault",
        "deposit-trading",
        "deposit-external",
        "withdraw-custody",
        "withdraw-trading-vault",
        "withdraw-trading",
        "withdraw-external",
        "show-custody",
        "show-trading-vault",
        "show-trading",
        "show-external"
    ],
    "color": "#fa8a34",
    "feesLevels": [
        {
            "feeLevel": "low",
            "value": "0.0000033"
        },
        {
            "feeLevel": "medium",
            "value": "0.0000099"
        },
        {
            "feeLevel": "high",
            "value": "0.0000099"
        }
    ],
    "extra": {
        "networkFeesParameters": [
            {
                "name": "feePerByte"
            }
        ]
    }
}, {
    "currency": "ETH",
    "mainCurrency": "ETH",
    "name": "Ethereum",
    "fiat": false,
    "priority": "5",
    "confirmations": "30",
    "decimal": "18",
    "tags": [
        "deposit-custody",
        "deposit-trading-vault",
        "deposit-trading",
        "deposit-external",
        "withdraw-custody",
        "withdraw-trading-vault",
        "withdraw-trading",
        "withdraw-external",
        "show-custody",
        "show-trading-vault",
        "show-trading",
        "show-external",
        "rbf"
    ],
    "color": "#7c63ff",
    "feesLevels": [
        {
            "feeLevel": "low",
            "value": "0.000057"
        },
        {
            "feeLevel": "medium",
            "value": "0.000072"
        },
        {
            "feeLevel": "high",
            "value": "0.000086"
        }
    ],
    "extra": {
        "networkFeesParameters": [
            {
                "name": "gasPriceGwei"
            }
        ]
    },
    "explorerUrl": "https://etherscan.io/tx/",
    "_embedded": {
        "price": {
            "baseCurrency": "ETH",
            "quoteCurrency": "USD",
            "price": "2551.84260413368"
        }
    }
}]

it('Checks the content of currency container', () => {

    renderWithProviders(<Currency baseCurrency="BTC" quoteCurrency="ETH" />, {
        preloadedState : {
            currencies: { currenciesData }
        }
    })
    const baseCurrencyElement = screen.getByTestId("baseCurrency");
    expect(baseCurrencyElement).toHaveTextContent("Bitcoin");
});
