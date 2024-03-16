var dictionary = fetch("./dictionary.txt");
var wordsAndPhonetics = dictionary.split("\n");

function findPhonetics(text) {
    // var output = "";
    var output = [];
    var words = [];
    text = text.toLowerCase();
    var loc = 0;
    for (var i = 0; i < text.length; i++) {
        var noPunc = [".", ",", ";", ":", "/", "\\", "!", "?", "\"", "\'"];
        for (char in noPunc) {
            if (char == text[i]) {
                if (loc != i - 1) {
                    appendItem(words, text.substring(loc, i));
                    loc = i + 1;
                }
            }
        }
    }
    for (val in words) {
        var phraseLoc = binarySearch(val, 0, wordsAndPhonetics.length - 1, wordsAndPhonetics);
        if (phrase != -1) {
            var phrase = wordsAndPhonetics[phraseLoc].substring(wordsAndPhonetics[phraseLoc].length - wordsAndPhonetics[phraseLoc].lastIndexOf(" "));
            appendItem(output, phrase);
        } else {
            return 
        }
    }
    return output;
}

function findWord(word) {
    var index =  binarySearch(word, 0, wordsAndPhonetics.length - 1, wordsAndPhonetics);
    return index;
}

function binarySearch(word, left, right, arr) {
    if (left < right) {
        var middle = (left + right)/2;
        var wordSize = word.length;
        if (arr[middle].substring(0, wordSize).localeCompare(word) == 1) {
            binarySearch(word, middle + 1, right, arr);
        } else if (arr[middle].substring(0, wordSize).localeCompare(word)) {
            binarySearch(word, left, middle - 1, arr);
        } else {
            return middle;
        }
    } else {
        return -1;
    }
}