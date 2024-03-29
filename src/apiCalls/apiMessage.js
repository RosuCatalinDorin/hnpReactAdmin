import Notiflix from "notiflix";

export const printErrorMessage = (error) =>{
    Notiflix.Notify.init({position: 'right-bottom'});
    //Notiflix.Notify.failure(error.message);
    let message ='Ups... a aparut o eroare.' ;
    switch(error.code) {
        case 'auth/email-already-in-use':
            message = 'Adresa de mail este deja folosita de un cont activ.';
            break
        case 'auth/wrong-password':
            message = 'Adresa de mail sau parola nu este corecta ! :(';
            break
        case 'auth/too-many-requests':
            message = 'Din pacate ai atins numarul maxim de de authentificari gresite.';
            break
    }
    Notiflix.Notify.failure(message);
}

export const printSuccessMessage = (message) =>{
    Notiflix.Notify.init({position: 'right-bottom'});
    Notiflix.Notify.success(message);
}