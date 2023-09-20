import React from 'react';
import { useState } from 'react';

import ExchangeRate from './ExchangeRate';

const CurrencyConvertor = () => {
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
    const [amount, setAmount] = useState(1);
    const [amountSec, setSecAmount] = useState(1);


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
                            type='number'
                            name='Currency-amount-2'
                            value={amountSec} 
                            onChange={(e) => setSecAmount(e.target.value)}/>
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
            <ExchangeRate />
        </div>
    );
};

export default CurrencyConvertor;