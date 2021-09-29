const time1 = '12:01:00PM';
const time2 = '12:01:00AM';
const time3 = '01:15:00PM';

function timeConversion(time) {
    const splitTime = time.split(':');

    if (time.endsWith('AM') && splitTime[0] == 12) {
        const militaryTime = time.replace('12', '00');
        return militaryTime.substr(0,8);
    }

    if (time.endsWith('PM') && splitTime[0] != 12) {
        const convert = parseInt(splitTime[0]) + 12;
        const militaryTime = time.replace(splitTime[0], `${convert}`);
        return militaryTime.substr(0,8);
    }

    return time.substr(0,8);

}

timeConversion(time3);

function maurosTimeConversion(time) {
    const splitTime = time.split(':');
    let militaryTime = time.substr(0,8);
    if (splitTime[0] == 12) {
        const convert = parseInt(splitTime[0]) - 12;
        militaryTime = time.replace(splitTime[0], `${convert}`);
    }
    if (time.endsWith('PM')) {
        const convert = parseInt(splitTime[0]) + 12;
        militaryTime = time.replace(splitTime[0], `${convert}`);
    }

    return militaryTime;
}