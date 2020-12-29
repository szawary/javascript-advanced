// This is an iife.
// event listener

(function clickTxtHandler() {
    const element = document.querySelector('.txt');  // Select an element.
    element.addEventListener('click', () => {
        element.textContent = 'Clicked';
    })
})();


(function clickBtnHandler() {
    const buttons = document.querySelectorAll('.btn');  // All of button will be selected.
    console.log(buttons);     // return NodeList, this an object, not an array !! 
    const buttonsArray = Array.from(buttons);  // Make an array form object. 
    console.log(buttonsArray);

    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].addEventListener('click', (event) => {
            console.log(event);
            console.log(event.target);
            console.log(event.target.textContent);
            console.log('Clicked button', i);
        })
    }
})();

(function bubbling() {
    //    const first = document.querySelector('.first');
    //    const second = document.querySelector('.second');
    //    const third = document.querySelector('.third');

    const divs = document.querySelectorAll('.first, .second, .third');

    // more events, but only one reaction
    const events = ['click', 'mouseover'];
    for (let i = 0; i < divs.length; i += 1) {
        for (let j = 0; j < events.length; j += 1) {
            divs[i].addEventListener(events[j], (event) => {
                console.log(event.currentTarget);
            })
        }
    }

    console.log(divs);

    for (let i = 0; i < divs.length; i += 1) {
        divs[i].addEventListener('click', (event) => {
            //         event.stopPropagation();
            console.log(event.currentTarget);
        }, true)        // default value: false. 
    }

})();