import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";

const getSelectedTransactions = (tableData) => {
    let selectedTransactionsArray = [...tableData]
    selectedTransactionsArray = selectedTransactionsArray.filter(element => {
        return element.selected === true
    })
    selectedTransactionsArray = selectedTransactionsArray.map(element => {
        return `${element.orderId}`
    })
    return selectedTransactionsArray
}

const BulkOrderAction = (props) => {
    return <div className="BulkOrderContainer" >
        <button className="rejectButton" onClick={() => {
            if (getSelectedTransactions(props.tableData).length !== 0) {
                props.rejectTransactionByIds(getSelectedTransactions(props.tableData))
            }
        }}>Reject</button>
        <button className="acceptButton" onClick={() => {
            if (getSelectedTransactions(props.tableData).length !== 0) {
                props.approveTransactionByIds(getSelectedTransactions(props.tableData))
            }
        }}>Approve</button>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(BulkOrderAction);