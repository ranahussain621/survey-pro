



import { FunctionComponent, useEffect } from "react";
import styles from "./PaymentSuccessfullScreen.module.css";
import backgroundCard from '../../assets/imgs/successPaymentCard.png'
import successIcon from '../../assets/svgs/successPayment.svg'
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_URL } from "@/consts";
import { notification } from "@/components/ui";
const ThankYouNote: FunctionComponent = () => {
    const navigate = useNavigate()
    const userStore = localStorage.getItem('UserStore') ?? '{}';
    const userId = JSON.parse(userStore);
    console.log("🚀 ~ userId:", userId.user.id)

    const { id } = useParams()


    const handleCheckStatus = async () => {
        try {
            // Send a POST request to your backend API
            const response = await fetch(`${BACKEND_URL}/stripe/check-payment-status`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ uniqueId: id }), // Send form data in the request body if needed
            });

            // Check if the request was successful
            if (response.ok) {
                // Handle successful response
                const data = await response.json();
                console.log('Response from backend:', data?.session?.payment_status);
                if (data?.session?.payment_status === 'paid') {
                    notification.success({ message: 'You have successfully buy a plan' })
                }


            } else {
                // Handle errors
                throw new Error('Failed to check the status');
            }
        } catch (error) {
            // Handle errors
            console.error('Error:', error);
            notification.error({ message: 'Failed to check the status' });
        }
    };

    useEffect(() => {

        handleCheckStatus()
    }, [id])





    return (
        <div className="flex  flex-col justify-center bg-slate-50 py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">

                <div className={styles.paymentSuccessfulScreen}>
                    <img className={styles.confettiIcon} alt="" src={backgroundCard} />
                    <div className={styles.successIconComponentParent}>
                        <img
                            className={styles.successIconComponent}
                            alt=""
                            src={successIcon}
                        />
                        <div className={styles.message}>
                            <div className={styles.paymentSuccessful}>Payment Successful</div>
                            <div className={styles.thankYouForContainer}>
                                <p className={styles.thankYouFor}>
                                    Thank you for patronizing us today.
                                </p>
                                <p className={styles.thankYouFor}>We value you!</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.returnHome}>
                        <button className={styles.paymentSuccessful} onClick={() => navigate('/workspace')}>Return Home</button>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default ThankYouNote;
