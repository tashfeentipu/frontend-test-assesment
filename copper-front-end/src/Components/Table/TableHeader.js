import React from "react";
import { Input } from "reactstrap";

const TableHeader = (props) => {
  return <thead>
    <tr>
      <th><Input type="checkbox" /> </th>
      <th>Date</th>
      <th>Type</th>
      <th>Account</th>
      <th>Currency</th>
      <th>Amount</th>
      <th>Action</th>
    </tr>
  </thead>

}

export default TableHeader;