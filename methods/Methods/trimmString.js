


const  trimStringFromWord=(inputString, word)=> {
    const index = inputString.indexOf(word)
    inputString.indexOf(word)
    if (index !== -1) {
        return inputString.substring(0, index).trim()+word;
    }
    return inputString;
}

const  trimStringFromWords=(inputString, word,word1,word2)=> {
    const index = inputString.indexOf(word)||inputString.indexOf(word2)||inputString.indexOf(word1);

    inputString.indexOf(word)
    if (index !== -1) {
        return inputString.substring(0, index).trim()+word;
    }
    return inputString;
}


module.exports={trimStringFromWord,trimStringFromWords}