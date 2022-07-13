import React from 'react';
import { screen } from '@testing-library/react';
import MainHeader from '../index';
import { renderWithProviders } from "./utils";
import { currenciesData, tableData } from "./TestsMockData";

it('Checks the content of Main Header container', () => {

    renderWithProviders(<MainHeader />, {
        preloadedState: {
            currencies: { currenciesData },
            table: { tableData }
        }
    })
    const ordersContentElement = screen.getByTestId("mainHeaderOrdersContent");
    expect(ordersContentElement).toHaveTextContent(tableData.length.toString());
    const amountContentElement = screen.getByTestId("mainHeaderAmountContent");
    expect(amountContentElement).toHaveTextContent("450079.79 USD");
});
