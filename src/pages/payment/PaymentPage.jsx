import React from 'react';
import "./payment.css"
import"../../App.css"

const PaymentPage = () => {
    const paymentOptions = [
        { name: 'Visa', icon: '/visa-icon.png', link: 'https://github.com/payrexx/payment-logos/raw/main/assets/card-icons/card_visa.svg' },
        { name: 'MasterCard', icon: '/mastercard-icon.png', link: 'https://github.com/payrexx/payment-logos/raw/main/assets/card-icons/card_mastercard.svg' },
        { name: 'PayPal', icon: '/paypal-icon.png', link: 'https://github.com/payrexx/payment-logos/raw/main/assets/card-icons/card_paypal.svg' },
        { name: 'Apple Pay', icon: '/apple-pay-icon.png', link: 'https://github.com/payrexx/payment-logos/raw/main/assets/card-icons/card_apple-pay.svg' },
        { name: 'Google Pay', icon: '/google-pay-icon.png', link: 'https://github.com/payrexx/payment-logos/raw/main/assets/card-icons/card_google-pay.svg' },
    ];

    const handlePaymentClick = (link) => {
        window.open(link, '_blank'); // Ouvre le lien dans un nouvel onglet
    };

    return (
        <div className="payment-page">
            <h2 style={{ color: 'salmon'}}>Choisissez un mode de paiement :</h2>
            <div className="payment-options">
                {paymentOptions.map((option, index) => (
                    <button
                        key={index}
                        className="payment-button"
                        onClick={() => handlePaymentClick(option.link)}
                    >
                        <img src={option.link} alt={option.name} />
                        <p style={{ color: 'coral' }}>{option.name}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PaymentPage;
