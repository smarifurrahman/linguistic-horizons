import { loadStripe } from "@stripe/stripe-js";
import PageHeader from "../../../Shared/PageHeader/PageHeader";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_STRIPE_PK);

const Payment = () => {
    const [classInfo, setClassInfo] = useState();

    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/classes/${id}`)
            .then(res => res.data)
            .then(data => {
                setClassInfo(data);
            })
    }, [id, axiosSecure])

    return (
        <div>
            <PageHeader title='Make Payment'></PageHeader>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    price={classInfo?.price}
                ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;