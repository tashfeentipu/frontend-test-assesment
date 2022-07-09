import React, { useState } from "react";
import { Input } from "reactstrap";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";

const TableHeader = (props) => {
  const [checkboxSelected, setCheckboxSelected] = useState(false)
  return <thead>
    <tr>
      <th><Input type="checkbox"
        checked={checkboxSelected}
        onChange={(event) => {
          setCheckboxSelected(event.target.checked)
          props.selectAllTableData(event.target.checked)
        }} /> </th>
      <th>Date</th>
      <th>Type</th>
      <th>Account</th>
      <th>Currency</th>
      <th>Amount</th>
      <th>Action</th>
    </tr>
  </thead>

}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);