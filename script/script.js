function removeElement(array, item, newElem) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array[i] = newElem;
        }
    }
}

const myArray = [1, 2, 3, 2, 4, 2, 5];
const itemToRemove = 2;
const newElement = 0;

removeElement(myArray, itemToRemove, newElement);
console.log(myArray);