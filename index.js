const leapYearCalculator = function(number) {
    if (number % 4 === 0 && number % 100 !== 0 || (number % 100 === 0 && number % 400 === 0)) {
        return true;
    }
    return false;
};

module.exports = leapYearCalculator;