import {dataInput} from "../main";

const qs = require('qs');

export let result: string = '';

export let handle = {
    getInputData: undefined,
    zeroToTen: undefined,
    elevenToNineteen: undefined,
    allMethod: undefined,
    twentyOneToOneHundred: undefined,
    threeDigit: undefined,
    oneHundredAndElevenToOneHundredAndTwenty: undefined
};
handle.allMethod = () => {
    handle.getInputData();
    if (+handle.getInputData().inputNumber >= 0 && +handle.getInputData().inputNumber <= 10) handle.zeroToTen();
    if (+handle.getInputData().inputNumber >= 11 && +handle.getInputData().inputNumber <= 19) handle.elevenToNineteen();
    if (+handle.getInputData().inputNumber >= 20 && +handle.getInputData().inputNumber <= 99) handle.twentyOneToOneHundred();
    if (+handle.getInputData().inputNumber >= 100 && +handle.getInputData().inputNumber <= 109) handle.threeDigit();
    if (+handle.getInputData().inputNumber >= 119 && +handle.getInputData().inputNumber <= 999) handle.threeDigit();
    if (+handle.getInputData().inputNumber >= 110 && +handle.getInputData().inputNumber <= 119) handle.oneHundredAndElevenToOneHundredAndTwenty();
    return result;
}

handle.getInputData = () => {
    return qs.parse(dataInput);

}
handle.zeroToTen = () => {
    switch (+handle.getInputData().inputNumber) {
        case 0:
            result = 'zero';
            break;
        case 1:
            result = 'one';
            break;
        case 2:
            result = 'two';
            break;
        case 3:
            result = 'three';
            break;
        case 4:
            result = 'four';
            break;
        case 5:
            result = 'five';
            break;
        case 6:
            result = 'six';
            break;
        case 7:
            result = 'seven';
            break;
        case 8:
            result = 'eight';
            break;
        case 9:
            result = 'nine';
            break;
        case 10:
            result = 'ten';
            break;
    }
}
handle.elevenToNineteen = () => {
    switch (+handle.getInputData().inputNumber[1]) {
        case 1:
            result = 'eleven';
            break;
        case 2:
            result = 'twelve';
            break;
        case 3:
            result = 'thirteen';
            break;
        case 4:
            result = 'fourteen';
            break;
        case 5:
            result = 'fifteen';
            break;
        case 6:
            result = 'sixteen';
            break;
        case 7:
            result = 'seventeen';
            break;
        case 8:
            result = 'eighteen';
            break;
        case 9:
            result = 'nineteen';
            break;
    }
}
handle.twentyOneToOneHundred = () => {
    let result0 = '';
    let result1 = '';
    switch (+handle.getInputData().inputNumber[0]) {
        case 2:
            result0 = 'twenty';
            break;
        case 3:
            result0 = 'thirty';
            break;
        case 4:
            result0 = 'forty';
            break;
        case 5:
            result0 = 'fifty';
            break;
        case 6:
            result0 = 'sixty';
            break;
        case 7:
            result0 = 'seventy';
            break;
        case 8:
            result0 = 'eighty';
            break;
        case 9:
            result0 = 'ninety';
            break;
    }
    switch (+handle.getInputData().inputNumber[1]) {
        case 0:
            result1 = '';
            break;
        case 1:
            result1 = 'one';
            break;
        case 2:
            result1 = 'two';
            break;
        case 3:
            result1 = 'three';
            break;
        case 4:
            result1 = 'four';
            break;
        case 5:
            result1 = 'five';
            break;
        case 6:
            result1 = 'six';
            break;
        case 7:
            result1 = 'seven';
            break;
        case 8:
            result1 = 'eight';
            break;
        case 9:
            result1 = 'nine';
            break;
    }
    result = result0 + result1;
}

handle.oneHundredAndElevenToOneHundredAndTwenty = () => {
    let result2 = '';
    switch (+handle.getInputData().inputNumber[2]) {
        case 0:
            result2 = 'ten';
            break;
        case 1:
            result2 = 'eleven';
            break;
        case 2:
            result2 = 'twelve';
            break;
        case 3:
            result2 = 'thirteen';
            break;
        case 4:
            result2 = 'fourteen';
            break;
        case 5:
            result2 = 'fifteen';
            break;
        case 6:
            result2 = 'sixteen';
            break;
        case 7:
            result2 = 'seventeen';
            break;
        case 8:
            result2 = 'eighteen';
            break;
        case 9:
            result2 = 'nineteen';
            break;
    }
    result = 'one hundred and ' + result2;
}

handle.threeDigit = () => {
    let result0 = '';
    let result1 = '';
    let result2 = '';
    switch (+handle.getInputData().inputNumber[0]){
        case 1:
            result0 = 'one hundred '
            break
        case 2:
            result0 = 'two hundred ';
            break;
        case 3:
            result0 = 'three hundred ';
            break;
        case 4:
            result0 = 'four hundred ';
            break;
        case 5:
            result0 = 'five hundred ';
            break;
        case 6:
            result0 = 'six hundred ';
            break;
        case 7:
            result0 = 'seven hundred ';
            break;
        case 8:
            result0 = 'eight hundred ';
            break;
        case 9:
            result0 = 'nine hundred ';
            break;
    }
    switch (+handle.getInputData().inputNumber[1]) {
        case 0:
            result1 = ''
            break;
        case 1:
            result1 = 'and ten '
            break;
        case 2:
            result1 = 'and twenty ';
            break;
        case 3:
            result1 = 'and thirty ';
            break;
        case 4:
            result1 = 'and forty ';
            break;
        case 5:
            result1 = 'and fifty ';
            break;
        case 6:
            result1 = 'and sixty ';
            break;
        case 7:
            result1 = 'and seventy ';
            break;
        case 8:
            result1 = 'and eighty ';
            break;
        case 9:
            result1 = 'and ninety ';
            break;
    }
    switch (+handle.getInputData().inputNumber[2]) {
        case 0:
            result2 = '';
            break;
        case 1:
            result2 = 'one';
            break;
        case 2:
            result2 = 'two';
            break;
        case 3:
            result2 = 'three';
            break;
        case 4:
            result2 = 'four';
            break;
        case 5:
            result2 = 'five';
            break;
        case 6:
            result2 = 'six';
            break;
        case 7:
            result2 = 'seven';
            break;
        case 8:
            result2 = 'eight';
            break;
        case 9:
            result2 = 'nine';
            break;
    }
    result = result0 + result1 + result2;
}