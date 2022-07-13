import React from 'react';
import { render, screen } from '@testing-library/react';
import Amount from '../Amount';

describe("Testing Amount", () => {

    it('Checks the content of amount container', () => {
        render(<Amount
            element={{
                amount: "50",
                baseCurrency: "BTC",
                quoteAmount: "100",
                quoteCurrency: "ETH"
            }}
        />);
        const baseCurrencyElement = screen.getByText(/BTC/i);
        const quoteCurrencyElement = screen.getByText(/ETH/i);
        expect(baseCurrencyElement).toBeInTheDocument();
        expect(quoteCurrencyElement).toBeInTheDocument();
    });

})