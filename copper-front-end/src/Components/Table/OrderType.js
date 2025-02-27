import './TableStyles.css'

const OrderType = (props) => {
    return <div className='tableBodyOrderTypeContainer'>
        {
            props.orderType === "buy" && <div className='tableBodyOrderTypeBuy' >B</div> ||
            <div className='tableBodyOrderTypeSell'>S</div>
        }
        <div className="tableBodyOrderTypeDate" >{props.time}</div>
    </div>
}

export default OrderType;