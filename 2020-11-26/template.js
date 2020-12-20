'use strict';

const obj = {
    message: 'something',
    fn() {
        console.log(this);
    },
}

const template = `
<div class="container">
<div class="row" onclick="obj.fn()">
    <div class="col">
        <col>
        <p class="text">content</p>
        <p class="text">content</p>
        <p class="text">content</p>
        <p class="text">content</p>
        <p class="text">content</p>
    </div>
</div>
</div>
`;
document.querySelector('body').insertAdjacentHTML('beforeend', template);

const template2 = `
<div class="container">
<div class="row">
    <div class="col">
        <col>
        <p class="text">content</p>
        <p class="text">content</p>
        <p class="text">content</p>
        <p class="text">content</p>
        <p class="text">content</p>
    </div>
</div>
</div>
`;
document.querySelector('body').insertAdjacentHTML('beforeend', template2);

const fn1 = () => { console.log('hi'); }
const btn = document.querySelector('.btn');
btn.addEventListener('click', fn1);
btn.removeEventListener('click', fn1)



// ----

const container = document.createElement('div');
container.setAttribute('class', 'container');
const row = document.createElement('div');
row.setAttribute('class', 'row');
const col = document.createElement('div');
col.setAttribute('class', 'col');
row.appendChild(col);
container.appendChild(row);