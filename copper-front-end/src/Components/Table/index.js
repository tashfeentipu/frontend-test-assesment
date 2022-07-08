import React from "react";
import { Table } from "reactstrap";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const TableComponent = (props) => {
    return <Table>
        <TableHeader />
        <TableBody />
    </Table>
}

export default TableComponent;