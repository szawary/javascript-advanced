'use stict';
// A tömb második legkisebb elemét keresem,
// újra felhnasznál ehhez egy függvényt.


// Tömb sorbarendezés - Bubble Sort
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

// A köv. függvény az arr tömb nth elemét adja vissza.
function getNthMinElement(arr, nth) {
    const sortedArr = bubbleSort(arr);

    // input ellenőrzés, nagyobb számot keresek, mint ahány elemű a tömb.
    if (nth > arr.length) {
        return arr[arr.length - 1]
    }

    return sortedArr[nth - 1];
}

const sampleArray = [555, 384, 22, 4955, 115, 679,];
console.log(getNthMinElement(sampleArray, 2));