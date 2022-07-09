import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

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
    }, [])


    return <>
        <>
            <button onClick={() => {
                props.rejectTransactionByIds(getSelectedTransactions(props.tableData))
            }}>Reject</button>
            <button onClick={() => {
                props.approveTransactionByIds(getSelectedTransactions(props.tableData))
            }}>Approve</button>
        </>
        <Table>
            <TableHeader />
            <TableBody />
        </Table>
    </>
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);