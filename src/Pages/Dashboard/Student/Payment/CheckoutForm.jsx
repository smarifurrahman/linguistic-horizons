import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    console.log(price)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error);
        }
        else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }
    }

    return (
        <form className="bg-deep-white w-[400px] md:w-[500px] px-10 p-12 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-ghost btn-sm bg-primary-color mt-7 text-white-secondary" type="submit" disabled={!stripe}>
                Pay Now
            </button>
            {cardError && <p className="mt-5 text-pink-color font-semibold">{cardError.message}</p>}
        </form>
    );
};

export default CheckoutForm;