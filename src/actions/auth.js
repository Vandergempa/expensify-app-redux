import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLoginGoogle = () => {
    return () => {
        // I want to go ahaed and sign in to one of my accounts and im gonna use the popup system:
        return firebase.auth().signInWithPopup(googleAuthProvider)
    };
};

export const startLoginFacebook = () => {
    return () => {
        // I want to go ahaed and sign in to one of my accounts and im gonna use the popup system:
        return firebase.auth().signInWithPopup(facebookAuthProvider)
    };
};

export const logout = () => ({
    type: 'LOGOUT',
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
