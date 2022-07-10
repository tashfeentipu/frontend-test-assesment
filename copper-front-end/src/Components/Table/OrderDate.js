import './TableStyles.css'

const OrderDate = (props) => {
    return <div className="tableDateContainer" >
        <div className="tableDateMonth">
            {props.month}
        </div>
        <div className="tableDate" >
            {props.date}
        </div>
    </div>
}

export default OrderDate;