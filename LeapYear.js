class LeapYear{
    validate_leapyear(numero){
        if (numero % 4 === 0 && numero % 100 === 0 && numero % 400 !== 0 || numero % 4 !== 0){
            return "false";
        } else if (numero % 400 === 0 || numero % 4 === 0) {
            return "true";
        } 
    }
};

module.exports = LeapYear;