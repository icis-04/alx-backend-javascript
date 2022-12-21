export default function appendToEachArrayValue(array, appendString) {
    for (let idx of array) {
        const value = array.indexOf(idx);
        array[value] = appendString + idx;
    }

    return array;
}
