function countRepsOfChars(sentence) {

    var charMap = {};
    var ch, count;


    for (let i = 0; i < sentence.length; ++i) {

        if (sentence.charAt(i) != ' ') {

            ch = sentence.charAt(i);
            count = charMap[ch];
            charMap[ch] = count ? count + 1 : 1;
        }
    }

    for (ch in charMap) {
        console.log(ch + " count: " + charMap[ch]);
    }

}

var text = "This is the string which I use to test";
countRepsOfChars(text);