import { shuffle as sh, test } from './utils.js';
import DB from './db.js'; // importálás teljes fájl

(function () {
    const names = ['Józsi', 'Piri', 'Sanyi',];
    sh(names);
    DB.setItem('todos', [{ text: 'feladat', done: false }]);
    console.log(names);
})();

test();
