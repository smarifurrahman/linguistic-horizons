import { loadStripe } from "@stripe/stripe-js";
import PageHeader from "../../../Shared/PageHeader/PageHeader";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_STRIPE_PK);

const Payment = () => {
    return (
        <div>
            <PageHeader title='Payment System'></PageHeader>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;