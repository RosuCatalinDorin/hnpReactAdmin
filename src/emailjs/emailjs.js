import emailjs from "@emailjs/browser";
import * as React from "react";


const SERVICE_ID = 'service_2dq3zal_hnp';
const TEMPLATE_ID = 'template_304nr1d';
const PUBLIC_KEY = 'y-jb8xYPYtOo8DWuQ'
export const emailComandaTrimisaSpreHnp = (user, orderId) => {

    const templateParams = {
        subiect: 'Confirmare înregistrare comandă',
        email_to: user.userDetails.email,
        to_name: user.userDetails.displayName,
        my_html: "<p>Îţi mulţumim pentru comandă.</p>" +
            "<p>Vei fi contactat in cel mai scurt timp de catre cun consultant HNP</p>"
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}


export const emailComandaNoua = (orderId) => {

    const templateParams = {
        subiect: 'Confirmare înregistrare comandă',
        email_to: 'rosucatalindorin@gmail.com',
        to_name: 'Catalin',
        my_html: "<p>A fost aduagata o comanda noua</p>" +
            "<p>Aici vezi detaliile despre comanda. </p>" + process.env.TEST_ENV
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}