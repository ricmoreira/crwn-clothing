import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_live_EIpHieDHqo572N5j4dubMvcf00i0A3Gqdh';

    const onToken= token => {
        console.log(token);
        alert('Payment Successfull');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothin Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is EUR ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now' 
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeButton;