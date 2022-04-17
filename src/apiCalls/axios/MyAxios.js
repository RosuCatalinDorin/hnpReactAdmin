import axios from 'axios';
import Notiflix from 'notiflix';
import {url} from '../utils/constants';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
    baseURL: url,
});

/**
 * Request Wrapper with default success/error actions
 */
const request = function(options)
{

    const onSuccess = function(response)
    {
        Notiflix.Loading.remove();
        console.debug('Request Successful!', response);
        return response.data.data;
    };

    const onError = function(error)
    {

        if(error.response) {
            switch(error.response.status) {
                case 401:
                    Notiflix.Report.failure(
                        'Drepturi insuficiente',
                        error.response.data.message,
                        'Okay',
                    );
                    break;
                case 409:
                    Notiflix.Report.failure(
                        'Nu se poate crea o noua declaratie',
                        error.response.data.message,
                        'Okay',
                    );
                    break;
                default:
                    Notiflix.Notify.init({position: 'right-bottom'});
                    Notiflix.Notify.failure(error.response.data.message);

                    console.error('Status:', error.response.status);
                    console.error('Data:', error.response.data);
                    console.error('Headers:', error.response.headers);
            }
            Notiflix.Loading.remove();
        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    };

    return client(options)
        .then(onSuccess)
        .catch(onError);
};

export default request;