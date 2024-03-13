"use client"

import { useState } from 'react';
import axios from 'axios';

const PaymentButton = ({productId,promoCode}:{productId:number;promoCode:string}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.post('/api/create-payment-intent', { productId,promoCode });
      console.log(data)
      window.location = data.url
    } catch (error) {
      console.error('Error initiating payment:', error);
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handlePayment} disabled={isLoading}>
      {isLoading ? 'Processing...' : 'Purchase Now'}
    </button>
  );
};

export default PaymentButton;