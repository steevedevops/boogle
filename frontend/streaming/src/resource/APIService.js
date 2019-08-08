import axios from 'axios';
import routes from './APIRoutes'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
export class APIService{
    onLogin(data) {
        const url = routes.login;
        return axios.post(url,data).then(response => response.data);
    };

    onLogout(){
        const url = routes.logout;
        return axios.get(url).then(response => response.data);
    };
    
}