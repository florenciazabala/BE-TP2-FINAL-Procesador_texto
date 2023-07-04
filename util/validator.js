module.exports = class Validator{
    static isValidWord(word){
        var regEx = /^[A-Za-z]+$/;
        return word && word.match(regEx);
    }
} 