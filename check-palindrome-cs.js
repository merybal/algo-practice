function checkPalindrome(inputString) {
    if (inputString.length === 1) {
        return true;
    } else if (inputString.length % 2 === 0) {
        for (let i = 0; i < inputString.length / 2; i++) {
            if (inputString[i] !== inputString[inputString.length - 1 - i]) {
                return false;
            }
        }
        return true;
    } else {
        for (let i = 0; i < parseInt(inputString.length / 2); i++) {
            if (inputString[i] !== inputString[inputString.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

checkPalindrome('acda')