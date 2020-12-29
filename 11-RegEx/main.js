'use strict';

document.querySelector('.register-form').addEventListener('submit', (ev) => {
    ev.preventDefault();

    // Name: 5 char length, only contains letter and space.
    const name = ev.target.querySelector('input[name=name').value;
    // if (name.length < 5) {
    //     alert('The name must be at least 5 chars and contain letters.');
    // };

    // caret ^   ALTGR + 3 space
    if (!/^[a-űA-Ű ]{5,20}$/.test(name)) {  // min. 5, max 20 char!
        alert('The name must be at least 5, max 20 chars and contain letters.');

    };


    // Check password.
    // At least 8 char long, a - ű, A - Ű, 0 - 9
    const passwordRegEx = new RegExp('^[a-űA-Ű0-9]{8,}$', 'g');
    const password = ev.target.querySelector('input[name=password]').value;
    if (!passwordRegEx.test(password)) {
        alert('The passord must be at least 8 chars and contains letters and numbers.')
    }
});