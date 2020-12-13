
// I do something later

setTimeout(() => {
    console.log('From timeout');
}, 1000)

// immediately 
console.log('From root');


(function () {
    // necessary element
    const clock = document.querySelector('.clock');
    const btnGroup = document.querySelector('.btn-group');

    /* merge the three btn to one
   
       const playBtn = btnGroup.querySelector('.timer-start');
       const pauseBtn = btnGroup.querySelector('.timer-pause');
       const resetBtn = btnGroup.querySelector('.timer-reset'); */


    // click managing fucntion
    const clockHandlerClick = (event) => {
        let btn = null;
        if (event.target.classList.contains('fa')) {
            btn = event.target.parentElement;
        } else {
            btn = event.target;
        }
        const btnClass = btn.className.split('-').pop();
        switch (btnClass) {
            case 'start': isTiming = true;
                break;
            case 'pause': isTiming = false;
                break;
            case 'reset':
                currentTime = 0;
                showTime();
                break;
        };
    };


    // events settings
    let isTiming = false;
    let currentTime = 0;
    // this will be the merged line 3 to 1 -- btnGroup!
    btnGroup.addEventListener('click', clockHandlerClick)

    /* merge the three addEventListener to one
       playBtn.addEventListener('click', () => isTiming = true);
       pauseBtn.addEventListener('click', () => isTiming = false);
       resetBtn.addEventListener('click', () => {
           currentTime = 0;
           showTime();
       });         */

    // display the time

    const showTime = () => {
        let minutes = Math.floor(currentTime / 60);
        let seconds = currentTime % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        clock.textContent = `${minutes}:${seconds}`;

    }

    // refresh the time -> setInterval funciton repeat the task
    setInterval(() => {
        if (!isTiming) {    // if isTiming false -> don't ++ currentTime
            return;
        }
        currentTime++;
        showTime();
    }, 1000);

})();