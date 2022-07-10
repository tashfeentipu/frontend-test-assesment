import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Amount = ({ element }) => {
    const [baseCurrency, setBaseCurrency] = useState()
    const [quoteCurrency, setQuoteCurrency] = useState()
    const currenciesData = useSelector(state => state.currencies.currenciesData);
    useEffect(() => {
        setBaseCurrency(currenciesData.find(placeholderElement => placeholderElement.currency === element.baseCurrency))
        setQuoteCurrency(currenciesData.find(placeholderElement => placeholderElement.currency === element.quoteCurrency))
    }, [currenciesData])

    console.log(baseCurrency);
    return <div className="tableBodyAmountContainer">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
            <div className="tableBodyBaseAmountContainerText" >
                {parseFloat(element.amount).toFixed(8)}
            </div>
            <div className="tableBodyBaseAmountContainerSymbol">
                {element.baseCurrency}
            </div>
        </div>
        <div className="tableBodyBaseAmountContainerSymbol" >
            <div>
                {parseFloat(element.quoteAmount).toFixed(8)}
            </div>
            <div>
                {element.quoteCurrency}
            </div>
        </div>

    </div>
}

export default memo(Amount);