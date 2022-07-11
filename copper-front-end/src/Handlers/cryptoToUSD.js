export const cryptoToUSD = (crypto, usdRate) => {
    return (parseFloat(crypto) * parseFloat(usdRate)).toFixed(2)
}

export const sumUSD = (usdArray) => {
    return (usdArray.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)).toFixed(2)
}