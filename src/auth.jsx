import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-iyn0-2cq.auth0.com',
        clientID: 'KJPIEGijNstFo9Srd813oDDVPAUYMOOB',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    });

    login = () => {
        this.auth0.authorize();

    }

    handleAuth = () => {
        this.auth0.parseHash((err, authresult) => {
            if (authresult) {
                localStorage.setItem('access_token', authresult);
                localStorage.setItem('id', authresult.idToken);

                let expiresAt = (authresult.expiresIn * 1000 + new Date().getTime);
                localStorage.setItem('expiresAt', expiresAt);
            } else {
                console.log(err);
            }
        })
    }

    logout =()=>{
        localStorage.removeItem('access_token');
        localStorage.removeItem('id');
        localStorage.removeItem('expiresAt');
    }
}