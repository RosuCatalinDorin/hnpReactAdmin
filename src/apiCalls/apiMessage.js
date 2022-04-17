import Notiflix from "notiflix";

export const printErrorMessage = (error) =>{
    Notiflix.Notify.init({position: 'right-bottom'});
    //Notiflix.Notify.failure(error.message);
    let message ;
    debugger;
    switch(error.code) {
        case 'auth/email-already-in-use':
            message = 'Adresa de mail este deja folosita de un cont activ.';
    }
    Notiflix.Notify.failure(message);
}
