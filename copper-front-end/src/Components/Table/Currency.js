import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { RightArrow } from '../../Assets';
import './TableStyles.css';

const Currency = (props) => {
    const [baseCurrency, setBaseCurrency] = useState()
    const [quoteCurrency, setQuoteCurrency] = useState()
    const currenciesData = useSelector(state => state.currencies.currenciesData);
    useEffect(() => {
        setBaseCurrency(currenciesData.find(element => element.currency === props.baseCurrency))
        setQuoteCurrency(currenciesData.find(element => element.currency === props.quoteCurrency))
    }, [currenciesData])

    return <div className="tableBodyCurrencyContainer" >
        <div className='tableBodyCurrencySubContainer' >
            <div className='tableBodyCurrencyImageContainer' >
                {baseCurrency && <img src={`https://cdn.copper.co/static/currencies/${baseCurrency?.currency.toLowerCase()}.svg`} />}
            </div>
            <div>
                <div className='tableBodyCurrencyText' data-testid="baseCurrency" >{baseCurrency?.name}</div>
                <div className='tableBodyCurrencySymbol'>{baseCurrency?.currency}</div>
            </div>
        </div>
        <div>
            <img src={RightArrow} />
        </div>
        <div className='tableBodyCurrencySubContainer' >
            <div className='tableBodyCurrencyImageContainer'>
                {quoteCurrency && <img src={`https://cdn.copper.co/static/currencies/${quoteCurrency.currency.toLowerCase()}.svg`} />}
            </div>
            <div>
                <div className='tableBodyCurrencyText'>{quoteCurrency?.name}</div>
                <div className='tableBodyCurrencySymbol'>{quoteCurrency?.currency}</div>
            </div>
        </div>
    </div>
}

export default Currency;