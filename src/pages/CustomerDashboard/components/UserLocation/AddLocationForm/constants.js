import * as Yup from "yup";

export const addLocationSchema = {
    userName: Yup.string().required('Numele persoanei de contact este obligatoriu').min(6, 'Trebuie sa fie de minim 10 caracatere.'),
    oras: Yup.string().required('Camp obligatoriu').min(2, 'Trebuie sa fie de minim 10 caracatere.'),
    telefon: Yup.string().required('Camp obligatoriu').min(10, 'Trebuie sa fie de minim 10 caracatere.'),
    judet: Yup.string().required('Camp obligatoriu').min(3, 'Trebuie sa fie de minim 10 caracatere.'),
    adress: Yup.string().min(6, 'Prea scurt!').max(50, 'Prea lung!').required('Camp obligatoriu'),
    userId: Yup.string().required(),
    active: Yup.boolean().required(),
}


export const formInitialValues = (userId) => {
    return {
        userName: '',
        oras: '',
        telefon: '',
        judet: '',
        adress: '',
        userId: userId,
        active: true
    }
}


