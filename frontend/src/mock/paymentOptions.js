const paymentOptions = [
    {
        id: 'klarna',
        name: 'Klarna',
        description: 'Faktura- och delbetalningstjänst',
        dataHandling: 'Kunddata delas med Klarna för kreditbedömning.',
        gdpr: 'Personuppgifter behandlas enligt Klarnas integritetspolicy.'
    },
    {
        id: 'paypal',
        name: 'PayPal',
        description: 'Betala snabbt och säkert med PayPal.',
        dataHandling: 'E-postadress och ordervärde delas med PayPal.',
        gdpr: 'Betalningen sker via extern tjänst med egen GDPR-policy.'
    },
    {
        id: 'stripe',
        name: 'Stripe',
        description: 'Kortbetalning via Stripe.',
        dataHandling: 'Kortuppgifter skickas direkt till Stripe, inte till vår server.',
        gdpr: 'Endast anonym transaktionsinformation lagras i systemet.'
    },
    {
        id: 'swish',
        name: 'Swish',
        description: 'Mobilbetalning med BankID-verifiering.',
        dataHandling: 'Telefonnummer används för verifiering via BankID.',
        gdpr: 'Inga personuppgifter lagras i systemet; verifiering sker via bank.'
    }
];

export default paymentOptions;
