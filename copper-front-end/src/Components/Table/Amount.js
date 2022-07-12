const Amount = ({ element }) => {
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

export default Amount;