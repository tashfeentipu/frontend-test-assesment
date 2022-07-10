import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import BulkOrderAction from "./BulkOrderAction";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import "./TableStyles.css";

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

const TableComponent = (props) => {

    useEffect(() => {
        // Fetch all data when component loads
        props.getTableData()
        props.getCurrenciesData()
    }, [])


    return <>
        <div>
            <div className="mainHeading">Transactions</div>
            <div className="mainHeading_container">
                <div className="mainHeading_container_2" >
                    <div className="mainHeading_orders">
                        <div className="mainHeading_orders_heading">All Orders</div>
                        <div className="mainHeading_orders_content">{props.tableData.length}</div>
                    </div>
                    <div className="mainHeading_amount" >
                        <div className="mainHeading_amount_heading">Total Amount</div>
                        <div className="mainHeading_amount_content">1,367,987.01 USD</div>
                    </div>
                </div>
                <div>
                    <BulkOrderAction />
                    {/* <button className="rejectButton" onClick={() => {
                        if (getSelectedTransactions(props.tableData).length !== 0) {
                            props.rejectTransactionByIds(getSelectedTransactions(props.tableData))
                        }
                    }}>Reject</button>
                    <button className="acceptButton" onClick={() => {
                        if (getSelectedTransactions(props.tableData).length !== 0) {
                            props.approveTransactionByIds(getSelectedTransactions(props.tableData))
                        }
                    }}>Approve</button> */}
                </div>
            </div>
        </div>
        <Table responsive >
            <TableHeader />
            <TableBody />
        </Table>
    </>
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);