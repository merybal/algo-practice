const grades = [73, 67, 38, 33]

/*
If the difference between the grade and the next multiple of 5 is less than 3,
round grade up to the next multiple of 5.

If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade. */

function gradingStudents(grades) {
    let roundedGrades = []
    for (const grade of grades) {
        if (grade < 38) {
            roundedGrades.push(grade);
        } else {
            const nextMultiple = (parseInt(grade / 5) + 1) * 5;
            if (nextMultiple - grade < 3) {
                roundedGrades.push(nextMultiple);
            } else {
                roundedGrades.push(grade);
            }
        }
    }
    return roundedGrades;
}

gradingStudents(grades);