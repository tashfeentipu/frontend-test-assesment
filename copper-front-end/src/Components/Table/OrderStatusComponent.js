import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";

const OrderStatusComponent = (props) => {
    if (props.tableRowData.orderStatus && props.tableRowData.status) {
        return <div>
            {props.tableRowData.status}
        </div>
    }
    return <>
        <button onClick={() => {
            props.rejectTransactionById(props.tableRowData.orderId)
        }}>Reject</button>
        <button onClick={() => {
            props.approveTransactionById(props.tableRowData.orderId)
        }}>Approve</button></>
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatusComponent);