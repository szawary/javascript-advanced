function bubblosSort(arr) {
    let swapped;                           // ebben a változóban csak azt tárolom, hogy a tömb rendezett-e vagy sem.

    do {                                  // egyszer mindenképpen le fog futni
        swapped = false;                  // azt mondjuk hogy biztos nem rendezett még
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {    // ha kisebb mint a soron következő
                let temp = arr[i];
                arr[i] = arr[i + 1];      // az elemeket megcseréljük. 
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}