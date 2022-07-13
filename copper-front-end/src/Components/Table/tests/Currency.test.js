import React from 'react';
import { screen } from '@testing-library/react';
import Currency from '../Currency';
import { renderWithProviders } from "./utils";
import { currenciesData } from "./TestsMockData";

it('Checks the content of currency container', () => {

    renderWithProviders(<Currency baseCurrency="BTC" quoteCurrency="ETH" />, {
        preloadedState : {
            currencies: { currenciesData }
        }
    })
    const baseCurrencyElement = screen.getByTestId("baseCurrency");
    expect(baseCurrencyElement).toHaveTextContent("Bitcoin");
});
