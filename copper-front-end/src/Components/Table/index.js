import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";

const TableComponent = (props) => {
    const [selectedElements, setSelectedElements] = useState([])

    useEffect(() => {
        // Fetch all data when component loads
        props.getTableData()
    }, [])

    return <>
        <>
            <button onClick={() => {
                props.rejectTransactionByIds(["3a16aef1d2afe8af1ad52fd4ec374fae", "0f38e8e4ed6346aacf86b0dde689df70", "8b352292e01acc2d95a458dafb75e9cf"])
            }}>Reject</button>
            <button onClick={() => {
                props.approveTransactionByIds(["ad40cd89f8330c53e2ea4e8c63ea9c97", "35302977cd484d2fcbe8dd594de862fb", "b60da6b302d4cbeefd13444222625d2a"])
            }}>Approve</button>
        </>
        <Table>
            <TableHeader />
            <TableBody />
        </Table>
    </>
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);