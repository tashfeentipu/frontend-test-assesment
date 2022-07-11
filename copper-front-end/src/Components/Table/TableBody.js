import { connect } from "react-redux";
import { Input } from "reactstrap";
import './TableStyles.css'
import OrderStatusComponent from "./OrderAction";
import { dateConverter, timeConverter } from "../../Handlers";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import OrderType from "./OrderType";
import OrderDate from "./OrderDate";
import Currency from "./Currency";
import Amount from "./Amount";
import Loader from "../Loader";
import NoTransactions from "./NoTransactions";

const TableBody = (props) => {
    return <Loader loading={props.tableLoading} >
        <NoTransactions noTransaction={props.tableData.length === 0} >
            {
                props.tableData.map(element => {

                    const disabled = element.orderStatus && element.status
                    return <tr key={element.orderId} className="tableBodyRow" style={{ backgroundColor: element.selected && "rgba(106, 234, 212, 0.1)" }} >
                        <td>
                            <div className="checkboxContainer" >
                                <Input
                                    type="checkbox"
                                    disabled={disabled}
                                    checked={element.selected}
                                    onChange={(event) => {
                                        props.selectTableData(element.orderId, event.target.checked)
                                    }} />
                            </div>
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
                        <td>
                            <Currency baseCurrency={element.baseCurrency} quoteCurrency={element.quoteCurrency} />
                        </td>
                        <td>
                            <Amount element={element} />
                        </td>
                        <td>
                            <OrderStatusComponent tableRowData={element} disabled={disabled} />
                        </td>
                    </tr>
                })
            }
        </NoTransactions>
    </Loader>
}

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);