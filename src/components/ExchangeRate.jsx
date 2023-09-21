import React from 'react';

const ExchangeRate = ({ exchangeRate, primaryCurrency, secondaryCurrency }) => {
    return (
        <div className='m-4 '>
            <h3 className='text-lg'>Exchange Rate</h3>
            <h4>{exchangeRate}</h4>
            <p>{primaryCurrency} to {secondaryCurrency} </p>
        </div>
    );
};

export default ExchangeRate;