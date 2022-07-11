import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";

const OrderStatusComponent = (props) => {
    if (props.tableRowData.orderStatus && props.tableRowData.status) {
        return <div className="tableBodyCompletedActionContainer">
            <div className="tableBodyCompletedAction" >
                Completed
            </div>
        </div>
    }
    return <div className="OrderStatusContainer" >
        <button
            className="rejectButton"
            onClick={() => {
                props.rejectTransactionById(props.tableRowData.orderId)
            }}>Reject</button>
        <button
            className="acceptButton"
            onClick={() => {
                props.approveTransactionById(props.tableRowData.orderId)
            }}>Approve</button>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatusComponent);