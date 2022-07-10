import { connect } from "react-redux";
import { Input } from "reactstrap";
import './TableStyles.css'
import OrderStatusComponent from "./OrderStatusComponent";
import { dateConverter, timeConverter } from "../../Handlers";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import OrderType from "./OrderType";
import OrderDate from "./OrderDate";

const TableBody = (props) => {
    return <tbody>
        {
            props.tableData.map(element => {
                return <tr key={element.orderId} >
                    <td>
                        <Input
                            type="checkbox"
                            checked={element.selected}
                            onChange={(event) => {
                                props.selectTableData(element.orderId, event.target.checked)
                            }} />
                    </td>
                    <td>
                        <OrderDate
                            month={dateConverter(element.createdAt).month}
                            date={dateConverter(element.createdAt).date}
                        />
                    </td>
                    <td>
                        <OrderType
                            orderType={element.orderType}
                            time={timeConverter(element.createdAt)} />
                    </td>
                    <td>
                        <div className="tableBodyAccountContainer" >
                            {element.portfolioName}
                        </div>
                    </td>
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