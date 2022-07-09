import React, { useState } from "react";
import { Input } from "reactstrap";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import './TableStyles.css'

const TableHeader = (props) => {
  const [checkboxSelected, setCheckboxSelected] = useState(false)
  return <thead>
    <tr className="tableHeaderRow" >
      <th><Input type="checkbox"
      className="checkbox"
        checked={checkboxSelected}
        onChange={(event) => {
          setCheckboxSelected(event.target.checked)
          props.selectAllTableData(event.target.checked)
        }} /> </th>
      <th className="tableHeaderRowData">Date</th>
      <th className="tableHeaderRowData">Type</th>
      <th className="tableHeaderRowData">Account</th>
      <th className="tableHeaderRowData">Currency</th>
      <th className="tableHeaderRowData">Amount</th>
      <th className="tableHeaderRowData">Action</th>
    </tr>
  </thead>

}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);