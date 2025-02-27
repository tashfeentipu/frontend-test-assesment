import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { renderHeading } from "../../Handlers/HeadingHandler";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import BulkOrderAction from "./BulkOrderAction";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import "./TableStyles.css";

const selectionChecker = (tableData) => {
    const index = tableData.findIndex(element => {
        return element.selected
    })
    return !(index === -1)
}

const TableComponent = (props) => {
    const [headings, setHeadings] = useState(renderHeading(props.tableData, props.currencies))

    useEffect(() => {
        // Fetch all data when component loads
        props.getTableData()
        props.getCurrenciesData()
    }, [])

    useEffect(() => {
        setHeadings(renderHeading(props.tableData, props.currencies))
    }, [props.tableData])

    return <>
        <div>
            <div className="mainHeading">Transactions</div>
            <div className="mainHeading_container">
                <div className="mainHeading_container_2" >
                    <div className="mainHeading_orders">
                        <div className="mainHeading_orders_heading">{headings.ordersHeading}</div>
                        <div className="mainHeading_orders_content" data-testid="mainHeaderOrdersContent" >{headings.ordersContent}</div>
                    </div>
                    <div className="mainHeading_amount" >
                        <div className="mainHeading_amount_heading">{headings.amountHeading}</div>
                        <div className="mainHeading_amount_content" data-testid="mainHeaderAmountContent" >{headings.amountContent}</div>
                    </div>
                </div>
                <div>
                    {selectionChecker(props.tableData) && <BulkOrderAction />}
                </div>
            </div>
        </div>
        <div style={{ overflowX: "auto" }} >
            <table className="table">
                <TableHeader rowSelected={selectionChecker(props.tableData)} />
                <TableBody />
            </table>
        </div>
    </>
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);