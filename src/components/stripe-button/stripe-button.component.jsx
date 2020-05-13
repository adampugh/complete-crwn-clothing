import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Z93GutPkZ0G6cxzHDOPnBEfo00OKeVXWNk'

    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }

    return (
        <StripeCheckout 
            currency="USD" 
            label="Pay Now"
            name="CRWN Clothing ltd"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton