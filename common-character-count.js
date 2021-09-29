function commonCharacterCount(s1, s2) {
    let totalCount = 0;
    let commonCharacters = [];
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1.charAt(i))) {
            if (!commonCharacters.includes(s1.charAt(i))) {
                commonCharacters.push(s1.charAt(i));
            }
        }
    }
    for (let i = 0; i < commonCharacters.length; i++) {
        const countS1 = s1.split(commonCharacters[i]).length - 1;
        const countS2 = s2.split(commonCharacters[i]).length - 1;
        if (countS1 > countS2) {
            totalCount += countS2;
        } else {
            totalCount += countS1;
        }
    }
    return totalCount;
}
const s1 = "aabcc";
const s2 = "adcaa";

commonCharacterCount(s1, s2)
