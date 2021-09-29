const s = 7; //start of dude's house
const t = 10; //end of dude's house
const a = 4; //where apple tree is located
const b = 12; //where orange tree is located
const apples = [2, 3, -4]; //array of fallen apples' positions
const oranges = [3, -2, -4]; //array of fallen oranges' positions

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesInRange = 0;
    let orangesInRange = 0;
    for (const position of apples) {
        if (a + position >= s && a + position <= t) {
            applesInRange++;
        };
    };
    for (const position of oranges) {
        if (b + position >= s && b + position <= t) {
            orangesInRange++;
        };
    };

    console.log(applesInRange);
    console.log(orangesInRange);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
