'use strict';


// First task

(function () {
    // Save a cookie with js.
    const saveCookie = (name, content, expireDate = new Date()) => {
        document.cookie = `${name}=${content}; expires=${expireDate}`;
    };

    const expire = new Date(new Date().getTime() + 15 * 60 * 1000);
    saveCookie('token', 'eyJhbGciOiJIUzI1NiIsInR5cC', expire);


    // Second task

    // READ OUT THE COOKIE
    const cookieHandler = {
        getCookie(name) {
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith(name))
                .split('=')[1];
            return cookieValue;
        },

        // REMOVE COOKIE
        removeCookie(name) {
            document.cookie = `${name}= expires =Thu, 01 Jan 1970 00:00:00 UTC`
        },
        // SAVE THE SESSION THE COOKIE VALUS
        setSessionStorage(key, value) {
            window.sessionStorage.setItem(key, value);
        },
        moveToSession(name) {
            const value = this.getCookie(name);
            this.removeCookie(name);
            this.setSessionStorage(name, value);
        }
    };

    cookieHandler.moveToSession('token')




})();






