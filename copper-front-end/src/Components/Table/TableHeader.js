import React, { useState } from "react";
import { Input } from "reactstrap";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import './TableStyles.css'

const TableHeader = (props) => {
  const [checkboxSelected, setCheckboxSelected] = useState(false)
  return <tr className="tableHeaderRow" >
    <th>
      <div className="checkboxContainer">
        <Input type="checkbox"
          className="checkbox"
          checked={checkboxSelected}
          onChange={(event) => {
            setCheckboxSelected(event.target.checked)
            props.selectAllTableData(event.target.checked)
          }} />
      </div>
    </th>
    <th><div className="tableHeaderRowData">Date</div></th>
    <th><div className="tableHeaderRowData">Type</div></th>
    <th><div className="tableHeaderRowData">Account</div></th>
    <th><div className="tableHeaderRowData">Currency</div></th>
    <th><div className="tableHeaderRowData">Amount</div></th>
    <th><div className="tableHeaderRowData">Action</div></th>
  </tr>

}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);