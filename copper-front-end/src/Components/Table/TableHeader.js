import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Input } from "reactstrap";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import './TableStyles.css';

const TableHeader = (props) => {
  const checkBoxRef = useRef()
  useEffect(() => {
    console.log("Row Selected", props.rowSelected);
    checkBoxRef.current.indeterminate = props.rowSelected
  }, [props.rowSelected])
  return <tr className="tableHeaderRow" >
    <th>
      <div className="checkboxContainer">
        <input type="checkbox"
          className="checkbox"
          ref={checkBoxRef}
          checked={props.headerCheckboxChecked}
          onChange={(event) => {
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