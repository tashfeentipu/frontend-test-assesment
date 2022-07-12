import { cryptoToUSD, sumUSD } from "./cryptoToUSD";

export const renderHeading = (tableData, currencyData) => {
    const usdValues = []
    const selectedElements = tableData.filter(element => {
        return element.selected
    })

    if (selectedElements.length === 0) {
        for (let j = 0; j < tableData?.length; j++) {
            for (let i = 0; i < currencyData?.length; i++) {
                if (currencyData[i].currency.toLowerCase() === tableData[j].baseCurrency.toLowerCase()) {
                    usdValues.push(cryptoToUSD(tableData[j].amount, currencyData[i]._embedded.price.price))
                }
            }
        }
        return {
            ordersHeading: "All Orders",
            ordersContent: tableData.length,
            amountHeading: "Total Amount",
            amountContent: `${sumUSD(usdValues)} USD`
        }
    }
    for (let j = 0; j < selectedElements?.length; j++) {
        for (let i = 0; i < currencyData?.length; i++) {
            if (currencyData[i].currency.toLowerCase() === selectedElements[j].baseCurrency.toLowerCase()) {
                usdValues.push(cryptoToUSD(selectedElements[j].amount, currencyData[i]._embedded.price.price))
            }
        }
    }
    return {
        ordersHeading: "Selected Orders",
        ordersContent: selectedElements.length,
        amountHeading: "Total Selected Amount",
        amountContent: `${sumUSD(usdValues)} USD`
    }
}
