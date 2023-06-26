import { loadStripe } from "@stripe/stripe-js";
import PageHeader from "../../../Shared/PageHeader/PageHeader";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_STRIPE_PK);

const Payment = () => {
    const [classInfo, seClassInfo] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/classes/${id}`)
            .then(res => res.json())
            .then(data => {
                seClassInfo(data);
            })
    }, [id])

    console.log(classInfo);

    return (
        <div>
            <PageHeader title='Make Payment'></PageHeader>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;