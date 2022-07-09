import { connect } from "react-redux";
import { Input } from "reactstrap";
import OrderStatusComponent from "./OrderStatusComponent";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import { dateConverter, timeConverter } from "../../Handlers";

const TableBody = (props) => {
    return <tbody>
        {
            props.tableData.map(element => {
                return <tr key={element.orderId} >
                    <td><Input type="checkbox"
                        checked={element.selected}
                        onChange={(event) => {
                            props.selectTableData(element.orderId, event.target.checked)
                        }} /> </td>
                    <td><div>
                        {dateConverter(element.createdAt).date}
                    </div>
                        <div>
                            {dateConverter(element.createdAt).month}
                        </div>
                    </td>
                    <td><div>
                        {element.orderType}
                    </div>
                        <div>
                            {timeConverter(element.createdAt)}
                        </div>
                    </td>
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