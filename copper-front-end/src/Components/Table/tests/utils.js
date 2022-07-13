import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import tableReducer from "../../../Redux/Reducers/tableData";
import currenciesReducer from "../../../Redux/Reducers/currenciesReducer";

//custom render that includes redux provider
export function renderWithProviders(
    ui,
    {
        preloadedState = {
            currencies: currenciesData
        },
        // Automatically create a store instance if no store was passed in
        store = configureStore({
            reducer: {
                table: tableReducer,
                currencies: currenciesReducer
            }, preloadedState
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }

    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}