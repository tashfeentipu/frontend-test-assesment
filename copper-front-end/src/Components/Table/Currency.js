import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { RightArrow } from '../../Assets';
import './TableStyles.css';

const Currency = (props) => {
    const baseCurrency = useSelector(state => state.currencies.currenciesData)
        .find(element => element.currency === props.baseCurrency)
    const quoteCurrency = useSelector(state => state.currencies.currenciesData)
        .find(element => element.currency === props.quoteCurrency)
    console.log(baseCurrency, quoteCurrency);
    useEffect(() => {
    })

    return <div className="tableBodyCurrencyContainer" >
        <div className='tableBodyCurrencySubContainer' >
            <div className='tableBodyCurrencyImageContainer' >
                <img src={`https://cdn.copper.co/static/currencies/${baseCurrency.currency.toLowerCase()}.svg`} />
            </div>
            <div>
                <div className='tableBodyCurrencyText' >{baseCurrency.name}</div>
                <div className='tableBodyCurrencySymbol'>{baseCurrency.symbol}</div>
            </div>
        </div>
        <div>
            <img src={RightArrow} />
        </div>
        <div className='tableBodyCurrencySubContainer' >
            <div className='tableBodyCurrencyImageContainer'>
                <img src={`https://cdn.copper.co/static/currencies/${quoteCurrency.currency.toLowerCase()}.svg`} />
            </div>
            <div>
                <div className='tableBodyCurrencyText'>{quoteCurrency.name}</div>
                <div className='tableBodyCurrencySymbol'>{quoteCurrency.symbol}</div>
            </div>
        </div>
    </div>
}

export default Currency;