'use strict';

const localDB = {
    getItem(key) {
        const jsonString = localStorage.getItem(key);
        return JSON.parse(jsonString);
    },
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// alapértelmezett exportálás
export default localDB;