import './TableStyles.css'

const Currency = (props) => {
    return <div className="tableBodyCurrency" >
        <div>
            {props.baseCurrency}
        </div>
        <div>
            {props.quoteCurrency}
        </div>
    </div>
}

export default Currency;