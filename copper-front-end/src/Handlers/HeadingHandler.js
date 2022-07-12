import { cryptoToUSD, sumUSD } from "./cryptoToUSD";

const arrayTraversal = (arrayA, arrayB) => {
    const usdValues = []
    for (let j = 0; j < arrayA?.length; j++) {
        for (let i = 0; i < arrayB?.length; i++) {
            if (arrayB[i].currency.toLowerCase() === arrayA[j].baseCurrency.toLowerCase()) {
                usdValues.push(cryptoToUSD(arrayA[j].amount, arrayB[i]._embedded.price.price))
            }
        }
    }
    return usdValues
}

export const renderHeading = (tableData, currencyData) => {
    const selectedElements = tableData.filter(element => {
        return element.selected
    })

    if (selectedElements.length === 0) {
        return {
            ordersHeading: "All Orders",
            ordersContent: tableData.length,
            amountHeading: "Total Amount",
            amountContent: `${sumUSD(arrayTraversal(tableData, currencyData))} USD`
        }
    }
    return {
        ordersHeading: "Selected Orders",
        ordersContent: selectedElements.length,
        amountHeading: "Total Selected Amount",
        amountContent: `${sumUSD(arrayTraversal(selectedElements, currencyData))} USD`
    }
}
