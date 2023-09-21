import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import ExchangeRate from './ExchangeRate';

const CurrencyConvertor = () => {
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
    const [amount, setAmount] = useState(1);
    // const [amountSec, setSecAmount] = useState(1);
    const [ exchangeRate, setExchangeRate ] = useState(0);
    const [result, setResult] = useState(0);

    const convert = async () => {
        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {
              from_currency: chosenPrimaryCurrency,
              function: 'CURRENCY_EXCHANGE_RATE',
              to_currency: chosenSecondaryCurrency
            },
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_CRYPTO_APIKEY,
              'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
            //   console.log(response.data['Realtime Currency Exchange Rate']['Exchange Rate'])
              setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
              setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
          } catch (error) {
              console.error(error);
          }
    };
    // console.log(exchangeRate);

    return (
        <div>
            <h2>Currency Converter</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Primary Currency</td>
                        <td>
                            <input 
                            type='number'
                            name='Currency-amount-1'
                            value={amount} 
                            onChange={(e) => setAmount(e.target.value)}/>
                        </td>
                        <td>
                            <select 
                            value={chosenPrimaryCurrency}
                            name='Currency-option-1'
                            onChange={(e) => setChosenPrimaryCurrency(e.target.value)}>
                                {currencies.map((curr, _index) => (
                                    <option
                                    key={_index}>{curr}</option>
                                ))}
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>Secondary Currency</td>
                        <td>
                            <input
                            name='Currency-amount-2'
                            value={result}
                            disabled={true}
                            />
                        </td>
                        <td>
                            <select 
                            value={chosenSecondaryCurrency}
                            name='Currency-option-2'
                            onChange={(e) => setChosenSecondaryCurrency(e.target.value)}>
                                {currencies.map((curr, _index) => (
                                    <option
                                    key={_index}>{curr}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={convert}>Convert</button>

            <ExchangeRate 
            exchangeRate={exchangeRate}
            primaryCurrency={chosenPrimaryCurrency}
            secondaryCurrency={chosenSecondaryCurrency} />
        </div>
    );
};

export default CurrencyConvertor;