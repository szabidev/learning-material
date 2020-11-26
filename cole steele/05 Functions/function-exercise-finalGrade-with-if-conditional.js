/* Write a function, finalGrade(). It should:
take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: ‘F’
60-69 should return: ‘D’
70-79 should return: ‘C’
80-89 should return: ‘B’
90-100 should return: ‘A’
*/
const finalGrade = (midterm,homework,final) => {
    // declaring average variable, that will calculate the average of the 3 grades
    let average = (midterm + homework + final) / 3;
    if (midterm < 0 || midterm > 100 , homework < 0 || homework > 100, final < 0 || final > 100) {
        return 'You have entered an invalid grade';
    } else if (average <= 59) {
        return 'F';
    } else if (average >= 60 && average <= 69) {
        return 'D';
    } else if (average >=70 && average <= 79) {
        return 'C';
    } else if (average >= 80 && average <= 89) {
        return 'B';
    } else if(average >= 90 && average <= 100) {
        return 'A';
    }
}

console.log(finalGrade(34,78,60))