import { useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import { Input } from "reactstrap";

const TableBody = (props) => {
    console.log(props.tableData[0]);
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
                        <button>Reject</button>
                        <button>Approve</button>
                    </td>
                </tr>

            })
        }
    </tbody>
}

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);