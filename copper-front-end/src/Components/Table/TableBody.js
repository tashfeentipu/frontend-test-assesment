import { connect } from "react-redux";
import { Input } from "reactstrap";
import OrderStatusComponent from "./OrderStatusComponent";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";

const TableBody = (props) => {
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
                        <OrderStatusComponent tableRowData={element} />
                    </td>
                </tr>

            })
        }
    </tbody>
}

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);