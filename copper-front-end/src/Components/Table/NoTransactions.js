import "./TableStyles.css"

const NoTransactions = (props) => {
    {
        return props.noTransaction && <tr> <div className="NoTransactionsContainer" >
            No transactions found
        </div> </tr> || <>{props.children}</>
    }

}

export default NoTransactions