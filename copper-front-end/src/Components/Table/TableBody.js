import { connect } from "react-redux";
import { Input } from "reactstrap";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";

const TableBody = (props) => {
    const orderStatusComponent = (tableRowData) => {
        if(tableRowData.orderStatus && tableRowData.status){
            return <div>
                    {tableRowData.status}
                </div>
        }
        return <>
            <button onClick={() => {
                props.rejectTransactionById(tableRowData.orderId)
            }}>Reject</button>
            <button onClick={() => {
                props.approveTransactionById(tableRowData.orderId)
            }}>Approve</button></>
    }

    return <tbody>
        {
            props.tableData.map(element => {
                return <tr key={element.orderId} >
                    <td><Input type="checkbox" /> </td>
                    <td>{element.createdAt}</td>
                    <td>{element.orderType}</td>
                    <td>{element.portfolioName}</td>
                    <td>{element.baseCurrency}</td>
                    <td>{element.amount}</td>
                    <td>
                        {orderStatusComponent(element)}
                    </td>
                </tr>

            })
        }
    </tbody>
}

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);