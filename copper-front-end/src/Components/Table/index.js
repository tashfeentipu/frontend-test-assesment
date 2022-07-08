import React, { useEffect } from "react";
import { Table } from "reactstrap";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";

const TableComponent = (props) => {

    useEffect(() => {
        // Fetch all data when component loads
        props.getTableData()
    }, [])

    return <Table>
        <TableHeader />
        <TableBody />
    </Table>
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);